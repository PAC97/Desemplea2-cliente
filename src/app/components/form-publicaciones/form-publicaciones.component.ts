import { Component, OnInit } from '@angular/core';
import { Publicaciones} from '../../models/Publicaciones';
import { PublicacionesService } from '../../services/publicaciones.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-publicaciones',
  templateUrl: './form-publicaciones.component.html',
  styleUrls: ['./form-publicaciones.component.css']
})
export class FormPublicacionesComponent implements OnInit {
  publicacion : Publicaciones = {
    Titulo : '',
    Descripcion: '',
    Usuario: ''
  };
  constructor( private publicacionesService: PublicacionesService, private router : Router) { }

  ngOnInit() {
  }
  guardarPublicacion(){
    try {
      this.publicacionesService.addPublicacion(this.publicacion)
      .subscribe(
        res =>{
          console.log(res)
          this.router.navigate(['/publicaciones'])
        },
        err => console.error(err)
      ) 
    } catch (error) {
      this.router.navigate(['/publicaciones'], error)
    }
    
  }

}
