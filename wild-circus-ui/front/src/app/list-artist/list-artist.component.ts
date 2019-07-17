import { Component, OnInit,TemplateRef, ViewChild, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Numero } from '../shared/numeros.model';
import { NumerosService } from '../services/numeros.service';
import { Artist } from '../shared/artists.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ListArtistComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openModal: EventEmitter<boolean>;
  @Input()
  public numero: Numero;
  @Input()
  public artists;
  public artistsForm;

  public Artist;


  constructor(config: NgbModalConfig, private modalService: NgbModal,
              private service: NumerosService, private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    if (this.openModal) {
      this.openModal.subscribe(data => {
        this.modalService.open(this.content);
      });
    } 
  }


  close(content) {
    this.modalService.dismissAll(content);
  }

  deleteArtist(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
      this.service.deleteArtist(id).subscribe(() => {this.toastr.success('Artiste supprimé !');
      });
      this.artists.splice(index, 1);
    }else { 
      this.toastr.warning('erreur lors de la suppression !')};
  }

}
