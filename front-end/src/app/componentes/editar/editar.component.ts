import { Component, OnInit } from '@angular/core';
import { Moto } from '../../modelos/moto';
import { MotoServicio } from '../../servicios/moto.servicio';
import { UploadServicio } from '../../servicios/upload.servicio';
import { Global } from '../../servicios/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: '../crear-moto/crear-moto.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [MotoServicio, UploadServicio]
})
export class EditarComponent implements OnInit {
  public titulo: string;
  public moto: Moto;
  public save_moto;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
  	  private _motoServicio: MotoServicio,
      private _uploadServicio: UploadServicio,
      private _route: ActivatedRoute,
      private _router: Router

  	) { 
  		this.titulo = "EDITAR MOTO";
  		this.url = Global.url;
  		
   	}

    ngOnInit() {
  	this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getMoto(id);
  	});
  }
  getMoto(id){
  	this._motoServicio.getMoto(id).subscribe(
  		response => {
  			this.moto = response.moto;
  			},
  			error => {
  				console.log(<any>error);
  			}
  		)

  }

	onSubmit(){
  		this._motoServicio.updateMoto(this.moto).subscribe(
  		response =>{
			  if(response.moto){
          //subir la imagen 
            if(this.filesToUpload){
            this._uploadServicio.makeFileRequest(Global.url+"upload-imagen/"+response.moto._id, [], this.filesToUpload, 'foto')
    	         .then((result:any)=>{
	           			this.save_moto =  result.moto;
            			this.status = 'success';
        	    		
            		});
            	}else{
            		this.save_moto =  response.moto;
            		this.status = 'success';
            		
            	}
	        
    	    }else{
        		this.status = 'failed';
        		
        	}
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  	}

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
