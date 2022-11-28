import '@grapecity/wijmo.styles/wijmo.css';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjcSheet from '@grapecity/wijmo.grid.sheet';
import { WjFlexSheet } from '@grapecity/wijmo.angular2.grid.sheet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild(WjFlexSheet) flex;
  @ViewChild('flex_sheet') flexSheet;

  readonly numRows = 11;
  readonly numColumns = 6;
  readonly sheetName = "Next Gen Worksheet";

  initializeFlexSheet() {
    
    this.flexSheet.rowCount = this.numRows;
    this.flexSheet.columnCount = this.numColumns;
    this.flexSheet.name = "Next Gen Worksheet";

      for (let row = 0; row < this.numRows; row++) {
          for (let col =  0; col < this.numColumns; col++) {
              this.flex.setCellData(row, col, row + col);
          }
      }
  }

  ngAfterViewInit(){
    this.initializeFlexSheet()
  }
   
}

