import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bzg-card',
  templateUrl: './bz-card.component.html',
  styleUrls: ['./bz-card.component.css']
})
export class BzCardComponent implements OnInit {

  nameIcon = 'icon-gear';
  title = 'Title card';
  subtitle = 'Subtitle card';
  description = 'Bizagi LATAM is a company in Bogotá D.C.';

  constructor() { }

  ngOnInit() {
  }
}
