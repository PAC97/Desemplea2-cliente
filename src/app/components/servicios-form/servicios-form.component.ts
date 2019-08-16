import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/Servicios';
import { ServiciosService } from '../../services/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.component.html',
  styleUrls: ['./servicios-form.component.css']
})
export class ServiciosFormComponent implements OnInit {
  servicio : Servicio = {
    nombre: '',
    descripcion: ''
  };
  constructor(private serviciosService : ServiciosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.serviciosService.getServicio(params.id)
      .subscribe((data: Servicio)=>{
        this.servicio = data
        console.log(this.servicio)
      })
    }
  }
  guardarServicio(){
    this.serviciosService.addServicio(this.servicio)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/servicios'])
      },
      err => console.error(err)
    )
  }


}
