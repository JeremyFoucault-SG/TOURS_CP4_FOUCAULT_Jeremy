import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Numero } from '../shared/numeros.model';
import { NumerosService } from '../services/numeros.service';


@Component({
  selector: 'app-modifnumero',
  templateUrl: './modifnumero.component.html',
  styleUrls: ['./modifnumero.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModifnumeroComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openEdit: EventEmitter<boolean>;
  @Input()
  public numeroForm;


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


  editNumero(numero, id){
    this.service.updateNumero(id, numero.value).subscribe((numero: Numero) => {
      this.modalService.dismissAll();
    })
  }
}
