import { Component, OnInit } from '@angular/core';
import { BandasService } from '../bandas.service';
import { Banda } from '../bandas';

@Component({
  selector: 'app-bandas-list',
  templateUrl: './bandas-list.component.html'
})
export class BandasListComponent implements OnInit{

  bandas: Array<Banda> = [];
  bandaMasAntigua!: Banda;
  selectedBanda!: Banda;
  selected: boolean = false;

  constructor(private bandasService : BandasService) { }

  findOldestBand():void {

      let oldestYear: number = Infinity;

      for (const band of this.bandas) {
        if (band.foundation_year < oldestYear) {
          oldestYear = band.foundation_year;
          this.bandaMasAntigua = band;
        }
      }
  }

  onSelected(banda: Banda): void {
    this.selectedBanda = banda;
    this.selected = true;
  }

  ngOnInit(): void {
    this.bandasService.getBandas().subscribe(
      (bandas) => {this.bandas = bandas
        this.findOldestBand();
      }
    );
  }
}
