import '@grapecity/wijmo.styles/wijmo.css';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjFlexSheet } from '@grapecity/wijmo.angular2.grid.sheet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('flex') flex;
  @ViewChild('flex_sheet') flexSheet;

  readonly numRows = 11;
  readonly numColumns = 6;
  readonly sheetName = "Next Gen Worksheet";

  private initializeFlexSheet() {

    this.flexSheet.rowCount = this.numRows;
    this.flexSheet.columnCount = this.numColumns;
    this.flexSheet.name= this.sheetName;
    this.populateFlexSheet();
  }

  /**
   * populate the flex sheet with data
   */
 private populateFlexSheet(){

  let evenNum = 2;
  let cellData: any;
  // the first prime number is 3 so we initialize it
  let nextPrimeNum = 3;
  
    for (let row = 0; row < this.numRows; row++) {
        for (let col =  0; col < this.numColumns; col++) {

          // set first row to even numbers starting at 2nd column
          if(row == 0){

            if(col > 0){
              cellData = evenNum;
              evenNum+=2;
            }

          } else {
            cellData = row + col;
          }
            this.flex.setCellData(row, col, cellData);
        }
    }
  }

  getNextPrimeNum(currentPrimeNum: number){

    for (let i = currentPrimeNumer; i < num; i++){
      if (num % i == 0){
        // Number is NOT prime
      }
    }
    if (num > 1){
      // Number IS prime
    } else {
      // Number is NOT prime
    }
  }

  ngAfterViewInit(){
    this.initializeFlexSheet()
  }
   
}

