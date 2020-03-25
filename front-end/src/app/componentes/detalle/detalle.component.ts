import { Component, OnInit } from '@angular/core';
import { Moto } from '../../modelos/moto';
import { MotoServicio } from '../../servicios/moto.servicio';
import { Global } from '../../servicios/global';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [MotoServicio]
})
export class DetalleComponent implements OnInit {
  public url: string;
  public moto: Moto;


  constructor(
  	private _motoServicio: MotoServicio,
  	private _router: Router,
  	private _route: ActivatedRoute
  	){ 
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

  deleteMoto(id){
    this._motoServicio.deleteMoto(id).subscribe(
      response => {
        if(response.moto){
          this._router.navigate(['/motos']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
















