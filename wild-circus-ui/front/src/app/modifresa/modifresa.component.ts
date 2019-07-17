import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../shared/reservations.model';
import { NumerosService } from '../services/numeros.service';

@Component({
  selector: 'app-modifresa',
  templateUrl: './modifresa.component.html',
  styleUrls: ['./modifresa.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModifresaComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openEdit: EventEmitter<boolean>;
  @Input()
  public resaForm;


  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private service: NumerosService) { config.backdrop = 'static';
    config.keyboard = false; }

  ngOnInit() {
    if (this.openEdit) {
      this.openEdit.subscribe(data => {
        this.modalService.open(this.content);
      });
  }
  }

  close(content) {
    this.modalService.dismissAll(content);
  }


  editResa(reservation, id){
    this.service.updateReservation(id, reservation.value).subscribe((reservation: Reservation) => {
      this.modalService.dismissAll();
    })
  }
}