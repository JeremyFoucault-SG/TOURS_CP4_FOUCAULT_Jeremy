import { Component, OnInit } from '@angular/core';
import { NumerosService } from '../services/numeros.service';
import { Numero } from '../shared/numeros.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newnumero',
  templateUrl: './newnumero.component.html',
  styleUrls: ['./newnumero.component.scss']
})
export class NewnumeroComponent implements OnInit {

  constructor(private service: NumerosService, private toastr: ToastrService) { }

  public numero: Numero;

  ngOnInit() {
  }

  createNumero(numero) {
    this.service.createNumero(numero.value).subscribe((numero) => {this.toastr.success('numéro ajouté !')
      if (numero) {
      }
    });
  }

}
