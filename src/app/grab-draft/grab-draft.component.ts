import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager.service";
//import { Observable } from "rxjs";
import { draftPick } from "../data-classes";

@Component({
  selector: 'app-grab-draft',
  templateUrl: './grab-draft.component.html',
  styleUrls: ['./grab-draft.component.css']
})
export class GrabDraftComponent implements OnInit {

  constructor(private m: DataManagerService) { }

  // Properties for the class
  picks: draftPick[];
  draftID: string;

  ngOnInit(): void {
    // Just take ten (10) of them 

    // Fetch posts...
    //this.m.getDraftPicks("735065462257356800").subscribe(response => this.picks = response);
  }

  getDraftPicks(draftID){
    this.m.getDraftPicks(draftID).subscribe(response => this.picks = response);
  }

}
