import { Component, OnInit, Output } from '@angular/core';
import { ShoutcastService } from '../../services/shoutcast.service';

@Component({
  selector: 'app-genre-primary',
  templateUrl: './genre-primary.component.html',
  styleUrls: ['./genre-primary.component.scss']
})
export class GenrePrimaryComponent implements OnInit {

  @Output() name: string;

  primaryGenres$: Object;

  constructor(private shoutCastData: ShoutcastService) {
    this.name = "Genres";
  }

  ngOnInit() {
    this.shoutCastData.getPrimaryGenres().subscribe(data => {
      // this.primaryGenres$ = data.response.data.genrelist.genre;
      this.primaryGenres$ = data;
    });
  }
}




