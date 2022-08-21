import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miEducacion:any;

  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data =>{
      this.miEducacion=data;
    });
  }

}
