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
  readonly numberOfPrimesNeeded = 10;


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
  let rowTwoInitialVal = 1;
  let primeNumberIndex = 0;

  // get an array of prime numbers prepared
  const primeNumArray: number[] = this.getArrayOfPrimes(this.numberOfPrimesNeeded);


    for (let row = 0; row < this.numRows; row++) {
        for (let col = 0; col < this.numColumns; col++) {

          // set first row to even numbers starting at 2nd column
          if(row == 0){

            if(col > 0){
              cellData = evenNum;
              evenNum+=2;
            }

          } else if (row <= 9 && col > 0) {
              cellData = rowTwoInitialVal++;
          } else if (col === 0) {
              cellData = primeNumArray[primeNumberIndex];
              primeNumberIndex++;
          } else {
            cellData = row + col;
          }
            this.flex.setCellData(row, col, cellData);
        }
    }

  }

  private isPrime(num) {
    for (var i = 2; i < num; i++){
      if (num % i == 0){
        return false;
      }
    }
    if (num > 1){
      return true;
    } else {
      return false;
    }
  }
  
  private getArrayOfPrimes(numOfPrimes) : number[] {
    var arr = [];
    var counter = 2;
    while ( arr.length < numOfPrimes ) {
      if( this.isPrime(counter) ){
        arr.push(counter);
      }
      counter++;
    }
    return arr;
  };

  ngAfterViewInit(){
    this.initializeFlexSheet()
  }
   
}

