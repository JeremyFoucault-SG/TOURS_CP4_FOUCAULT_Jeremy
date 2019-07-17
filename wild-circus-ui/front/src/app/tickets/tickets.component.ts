import { Component, OnInit, EventEmitter  } from '@angular/core';
import { NumerosService } from '../services/numeros.service';
import { Numero } from '../shared/numeros.model';
import { Reservation } from '../shared/reservations.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  openEdit: EventEmitter<boolean> = new EventEmitter();
  constructor(private service: NumerosService, private toastr: ToastrService) { }

  public numeros;
  public idNumero;
  public reservations;
  public resaForm;


  ngOnInit() {this.service.getReservations().subscribe((reservations: Reservation) => {
    this.reservations = reservations;
    this.service.getNumeros().subscribe((numeros: Numero) => {
      this.numeros = numeros;
    })
  })
  }

  addResa(newResa){
    this.service.addResa(newResa.value).subscribe((reservation) => {
      this.reservations.push(newResa.value);
      this.toastr.success('Réservation enregistré !')
      if(reservation){
      }
    });
  }

  openEditionResa(resa){
    this.openEdit.emit(true);
    this.resaForm = resa;
  }

  deleteReservation(id, index) {
    if (confirm('Voulez vous vraiment supprimer ?')) {
      this.service.deleteReservation(id).subscribe(() => {
        this.toastr.success('Réservation supprimé !')
      });
      this.reservations.splice(index, 1);
    } else { };
  }
}
