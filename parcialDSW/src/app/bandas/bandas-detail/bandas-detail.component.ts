import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../bandas';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './bandas-detail.component.html'
})
export class BandasDetailComponent implements OnInit{
    @Input() banda!: Banda;

     constructor() { }

    ngOnInit(): void {
    }
}
