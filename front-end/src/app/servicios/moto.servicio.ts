import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Moto } from '../modelos/moto';
import { Global } from './global';

@Injectable()
export class MotoServicio{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando ';
	}

	saveMoto(moto: Moto): Observable<any>{
		let params = JSON.stringify(moto);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-moto',params, {headers: headers});
	}

	getMotos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'get-motos',{headers: headers});

	}

	getMoto(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'get-moto/'+id,{headers: headers});
	}

	deleteMoto(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'delete-moto/'+id,{headers: headers});
	}

	updateMoto(moto): Observable<any>{
		let params = JSON.stringify(moto);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'put-moto/'+moto._id, params, {headers: headers});
	}
	
}