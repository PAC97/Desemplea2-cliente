import { Component, OnInit } from '@angular/core';
import { Servicio } from "../../models/Servicios";
import { ServiciosService } from "../../services/servicios.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {
  servicios: Servicio[];
  constructor(private servicioService : ServiciosService, private router : Router) { }

  ngOnInit() {
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.servicioService.getServicios().subscribe((data: Servicio[])=>{
      this.servicios = data;
      console.log(this.servicios);
    });
  }

  eliminarServicio(_id : string){
    Swal.fire({
      title: '¿Dese eliminar el registro?',
      text: "Al eliminar no se podra recuperar el registro!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicioService.deleteServicio(_id)
        .subscribe(
          res => {
          return this.obtenerServicios();
          },
          err => console.log(err)
        )
        Swal.fire(
          'Eliminado!',
          'El registro se elimino correctamente.',
          'success'
        )
      }
    })
    
  }

  editServicio(_id: string){
    console.log(_id)
  }

}
