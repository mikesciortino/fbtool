import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { DataManagerService } from "../data-manager.service";
import { draftPick, rankings } from "../data-classes";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-ranks-tool',
  templateUrl: './ranks-tool.component.html',
  styleUrls: ['./ranks-tool.component.css']
})
export class RanksToolComponent {

  // Properties for the class
  picks: draftPick[];
  
  ranks: rankings[] = [];
  draftID: string;
  i: number = 0;
  j: number = 0;
  
  csvRecords: any[] = [];
  header = true;

  draftID1 : string;

  constructor(private ngxCsvParser: NgxCsvParser, private m: DataManagerService) { }
  
  @ViewChild('fileImportInput', { static: true }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {

        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  getDraftPicks(draftID){
    //this.draftID1 = draftID;
    //this.m.getDraftPicks(draftID).subscribe(response => this.picks = response);
    for(this.i = 0;this.i<this.ranks.length;this.i++){
      this.draftID1 = draftID;
      this.m.getDraftPicks(draftID).subscribe(response => this.picks = response);
      for(this.j = 0;this.j<this.picks.length;this.j++){
        if(this.ranks[this.i].name == (this.picks[this.j].metadata.first_name + ' ' + this.picks[this.j].metadata.last_name)){
          this.ranks[this.i].picked = 'yes';
        }
      } 
    }     
  }

  loadRanks(){
    for(this.i = 0;this.i<this.csvRecords.length;this.i++){
      this.ranks[this.i] = this.csvRecords[this.i];
      //this.ranks[this.i].rank=this.csvRecords[this.i].rank;
      this.ranks[this.i].name = this.csvRecords[this.i].playerName;
      //this.ranks[this.i].team = this.csvRecords[this.i].team;
      //this.ranks[this.i].position = this.csvRecords[this.i].position;
      //this.ranks[this.i].ecr = this.csvRecords[this.i].ecr;
      this.ranks[this.i].vecr = this.csvRecords[this.i].vECR;
    }
  }

  fillRankings(){
    this.m.getDraftPicks(this.draftID1).subscribe(response => this.picks = response);
      
    for(this.i = 0;this.i<this.ranks.length;this.i++){
      for(this.j = 0;this.j<this.picks.length;this.j++){
        if(this.ranks[this.i].name == (this.picks[this.j].metadata.first_name + ' ' + this.picks[this.j].metadata.last_name)){
          this.ranks[this.i].picked = 'yes';
        }
      } 
    }
  }

}
