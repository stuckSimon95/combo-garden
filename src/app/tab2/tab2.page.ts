import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  sizes: Array<any> = [
    { value: 2, text: "2 x 2" },
    { value: 3, text: "3 x 3" },
    { value: 4, text: "4 x 4" },
    { value: 5, text: "5 x 5" }
  ];

  sizeArray: Array<number> = [];
  selectedSize: number;
  vegetables: Array<{ alias: string, name: string, goodCombo: [], badCombo: [] }> = [];
  vegMatrix: Array<{ row: number, col: number, alias: string }> = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVegetables().subscribe((resp) => {
      this.vegetables.push({
        alias: "---",
        name: "",
        goodCombo: [],
        badCombo: []
      });

      resp.vegetables.forEach(veg => {
        this.vegetables.push({
          alias: veg.alias,
          name: veg.name,
          goodCombo: veg.goodCombo,
          badCombo: veg.badCombo
        });
      });

      console.log(this.vegetables);
    })
  }

  OnSizeChange(choice) {
    this.sizeArray = [];
    let index = 0;
    this.selectedSize = parseInt(choice.detail.value);
    while (index < this.selectedSize) {
      this.sizeArray.push(index);
      index++;
    }
  }

  OnVegSelected(data, row, col) {
    let aliasVeg = data.detail.value;
    this.vegMatrix.push({
      row: row,
      col: col,
      alias: aliasVeg
    });
    if(row == 0 || col !== 1) {
    }

    console.log(this.vegMatrix);
  }

}
