import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	public titulo: string;

  constructor() {
	this.titulo="Contacto";
   }


  ngOnInit() {
  }

   onSubmit(form){
   form.reset();
   }


}
