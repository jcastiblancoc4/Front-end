import { Component, OnInit } from '@angular/core';
import { Moto } from '../../modelos/moto';
import { MotoServicio } from '../../servicios/moto.servicio';
import { Global } from '../../servicios/global';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css'],
  providers: [MotoServicio]
})
export class MotosComponent implements OnInit {
  public motos : Moto[];
  public url: string;

  constructor( 
  	private _motoServicio: MotoServicio
  	){
  	this.url = Global.url;
  	}

  ngOnInit() {
  	this.getMotos();
  }

  getMotos(){
  	this._motoServicio.getMotos().subscribe(
  		response => { 
  			console.log(response);
  			if(response.moto){
  				this.motos = response.moto;
  			}
  		},
  		error => {
  			console.log(<any> error);
  		}
  	);
  }

}
