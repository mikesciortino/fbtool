//Data model classes for the app

import { first } from "rxjs/operators";

//Describe a draft pick
export class draftPick {
    _id? : string;
    picked_by: string; // user_id this pick will go to (not all leagues have users in every slot, this can be "")
    roster_id: string; // roster_id this pick will go to
    round: number;
    draft_slot: number; //which coloumn this is on the draft board
    pick_no: number;
    metadata : metadata;
    
    is_keeper: string;
    draft_id: string;

    name: string;
    ecr: string;
    vecr: string;

}

export class rankings{
    rank: number;
    name: string;
    team : string;
    position: string;
    ecr: string;
    vecr: string;

    picked: string = 'no';
}
    
    
export class metadata {
   _id? : string;
   team : string;
   status: string;
   sport: string;
   position: string;
   player_id: string;
   number: number;
   news_updated: string;
   last_name: string;
   injury_status: string;
   first_name: string;
}


export class idClass {
    _id: string  = '';
  }