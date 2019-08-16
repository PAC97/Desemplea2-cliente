import { Component, OnInit } from '@angular/core';
import { Publicaciones } from "../../models/Publicaciones";
import { PublicacionesService } from "../../services/publicaciones.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
publicaciones: Publicaciones[];
  constructor(private publicacionesService: PublicacionesService, private router: Router) { }

  ngOnInit() {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(){
    this.publicacionesService.getPublicaciones()
    .subscribe((data: Publicaciones[])=>{
      this.publicaciones = data;
      console.log(this.publicaciones);
    });
  }
  deletePubli(_id : string){
    Swal.fire({
      title: '¿Dese eliminar la publicacion?',
      text: "Al eliminar no se podra recuperar!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.publicacionesService.deletePublicacion(_id)
        .subscribe(
          res => {
          return this.obtenerPublicaciones();
          },
          err => console.log(err)
        )
        Swal.fire(
          'Eliminado!',
          'La publicacion se elimino correctamente.',
          'success'
        )
      }
    })
    
  }

}
