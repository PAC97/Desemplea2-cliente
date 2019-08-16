import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from '../../models/TipoUsuario';
import { TipousuarioService } from '../../services/tipousuario.service';
@Component({
  selector: 'app-tipousuario-list',
  templateUrl: './tipousuario-list.component.html',
  styleUrls: ['./tipousuario-list.component.css']
})
export class TipousuarioListComponent implements OnInit {
  tipoUsuarios : TipoUsuario[];
  constructor(private tUS : TipousuarioService) { }

  ngOnInit() {
    this.tUS.getTipoUsuarioList().subscribe((data : TipoUsuario[])=>{
      this.tipoUsuarios = data;
      console.log(this.tipoUsuarios);
    });
  }

}
