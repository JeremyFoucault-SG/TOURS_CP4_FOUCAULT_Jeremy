import { Component, OnInit,EventEmitter } from '@angular/core';
import { NumerosService } from '../services/numeros.service';
import { Numero } from '../shared/numeros.model';
import { Artist } from '../shared/artists.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent implements OnInit {

  openEdit: EventEmitter<boolean> = new EventEmitter();
  openModal: EventEmitter<boolean> = new EventEmitter();

  public numeros;
  public numero;
  public artists;
  public numeroForm;


  constructor(private service: NumerosService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getNumeros().subscribe((numeros: Numero) => {
      this.numeros = numeros;;
      })
  }

  openEditionNumero(num){
    this.openEdit.emit(true);
    this.numeroForm = num;
  }

  openModalArtists(numeros) {
    this.openModal.emit(true);
    this.numero = numeros;
    this.service.getArtists(numeros.id).subscribe((artists: Artist) => {
      this.artists = artists;
      console.log(artists)
    })
  }

  deleteNumero(id, index) {
    if (confirm('Voulez vous vraiment supprimer ?')) {
      this.service.deleteNumero(id).subscribe(() => {this.toastr.success('numéro supprimé !')
      });
      this.numeros.splice(index, 1);
    } else { };
  }
}
