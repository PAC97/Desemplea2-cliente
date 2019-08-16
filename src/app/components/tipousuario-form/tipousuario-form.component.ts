import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'src/app/models/TipoUsuario';
import { TipousuarioService } from 'src/app/services/tipousuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipousuario-form',
  templateUrl: './tipousuario-form.component.html',
  styleUrls: ['./tipousuario-form.component.css']
})
export class TipousuarioFormComponent implements OnInit {
tipoUsuario : TipoUsuario = {
nombre: '',
descripcion: ''
};
  constructor(private tipoUsuarioService : TipousuarioService, private router: Router) { }

  ngOnInit() {
  }
  guardarTipoUsuario(){
    this.tipoUsuarioService.addTipoUsuario(this.tipoUsuario)
    .subscribe(
      res =>{
        this.router.navigate(['/tipoUsuario'])
      },
      err => console.log(err)
    )
  }
}
