import '@grapecity/wijmo.styles/wijmo.css';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjFlexSheet } from '@grapecity/wijmo.angular2.grid.sheet';
import { WjFlexGridColumn } from '@grapecity/wijmo.angular2.grid';

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
  readonly sheetName = 'Next Gen Worksheet';
  readonly numberOfPrimesNeeded = 10;

  private initializeFlexSheet() {
    this.flexSheet.rowCount = this.numRows;
    this.flexSheet.columnCount = this.numColumns;
    this.flexSheet.name = this.sheetName;

    // set top row and left column background to gray with white text
    this.flex.applyCellsStyle(
      {
        background: '#333333',
        color: 'white',
      },
      [new wjcGrid.CellRange(0, 0, 10, 0), new wjcGrid.CellRange(0, 1, 0, 6)]
    );

    // set top row and left column background to light blue with white text
    this.flex.applyCellsStyle(
      {
        background: 'lightblue',
        color: 'white',
      },
      [new wjcGrid.CellRange(10, 1, 10, 6)]
    );

    this.populateFlexSheet();
  }

  /**
   * populate the flex sheet with data
   */
  private populateFlexSheet() {
    let evenNum = 2;
    let cellData: any;
    let rowTwoInitialVal = 1;
    let primeNumberIndex = 0;

    // get an array of prime numbers prepared
    const primeNumArray: number[] = this.getArrayOfPrimes(
      this.numberOfPrimesNeeded
    );

    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numColumns; col++) {
        // set first row to even numbers starting at 2nd column
        if (row == 0) {
          if (col > 0) {
            cellData = evenNum;
            evenNum += 2;
          }
          // Fill rows 2-10 of the grid with numbers 1-45
        } else if (row <= 9 && col > 0) {
          cellData = rowTwoInitialVal++;

          /* Set the Row Headers (Column A) to display prime numbers incrementing down */
        } else if (col === 0) {
          cellData = primeNumArray[primeNumberIndex];
          primeNumberIndex++;
        } else {
          /* Set each cell in the row 11 to a formula that adds the value of the numbers above */
          cellData = row + col;
        }

        this.flex.setCellData(row, col, cellData);
      }
    }

    const excelColString = 'BCDEF';

    for( let i=0; i< this.numColumns; i++){
      let colCharacter =  excelColString.charAt(i);
      let formula = '=SUM('  + colCharacter + '2'  + ':' + colCharacter  + (this.numRows -1) + ')';
      this.flex.setCellData(10, (i+1) , formula);
    }

  }


  private isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    if (num > 1) {
      return true;
    } else {
      return false;
    }
  }

  private getArrayOfPrimes(numOfPrimes): number[] {
    var arr = [];
    var counter = 2;
    while (arr.length < numOfPrimes) {
      if (this.isPrime(counter)) {
        arr.push(counter);
      }
      counter++;
    }
    return arr;
  }

  ngAfterViewInit() {
    this.initializeFlexSheet();
  }
}
