import { Component, OnInit } from '@angular/core';
import { Moto } from '../../modelos/moto';
import { MotoServicio } from '../../servicios/moto.servicio';
import { UploadServicio } from '../../servicios/upload.servicio';
import { Global } from '../../servicios/global';

@Component({
  selector: 'app-crear-moto',
  templateUrl: './crear-moto.component.html',
  styleUrls: ['./crear-moto.component.css'],
  providers: [MotoServicio, UploadServicio]
})
export class CrearMotoComponent implements OnInit {

	public titulo: string;
	public moto: Moto;
  public save_moto;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
  		private _motoServicio: MotoServicio,
      private _uploadServicio: UploadServicio
  	) { 
  		this.titulo = "AGREGAR MOTO";
  		this.moto = new Moto('','','', null,'','','','','','');
   	}

  ngOnInit() {
  }

  onSubmit(form){

    //Guardar datos basicos  
    this._motoServicio.saveMoto(this.moto).subscribe(
      response => {
        if(response.moto){

          //subir la imagen 
          if(this.filesToUpload){
          this._uploadServicio.makeFileRequest(Global.url+"upload-imagen/"+response.moto._id, [], this.filesToUpload, 'foto')
          .then((result:any)=>{

           this.save_moto =  result.moto;

            this.status = 'success';
               form.reset();
            });
          }else{
            this.save_moto =  response.moto;
            this.status = 'success';
            form.reset();

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
