import { Component, OnInit } from '@angular/core';
import { NumerosService } from '../services/numeros.service';
import { Artist } from '../shared/artists.model';
import { Numero } from '../shared/numeros.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newartist',
  templateUrl: './newartist.component.html',
  styleUrls: ['./newartist.component.scss']
})
export class NewartistComponent implements OnInit {

  constructor(private service: NumerosService, private toastr: ToastrService) { }

  public artist: Artist;
  public idNumero;
  public numeros;

  ngOnInit() {
    this.service.getNumeros().subscribe((numeros: Numero) => {
      this.numeros = numeros;
    })
}

  createArtist(artist) {
    this.service.createArtist(artist.value).subscribe((artist) => {this.toastr.success('artiste ajouté !')
      if (artist) {
      }
    });
  }

}
