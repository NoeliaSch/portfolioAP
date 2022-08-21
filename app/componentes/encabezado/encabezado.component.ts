import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';




@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
miPortfolio:any ;
isLogged = false;


  constructor(private datosPortfolio:PortfolioService, private ruta:Router, private autenticacionService:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log("portfolio"+ JSON.stringify(data));
      this.miPortfolio=data[0] ;
    });
  }

  //para que se vea el icono edit
  edit(){
      let currentUser=this.autenticacionService.UsuarioAutenticado;
      if(currentUser && currentUser.accessToken){
        return this.isLogged = true;
      }
      else{
        return this.isLogged = false;
      }
   
}
}