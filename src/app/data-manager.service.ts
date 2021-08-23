import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
// Import data model classes, for example...
import { draftPick} from "./data-classes";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

 // Options object for POST and PUT requests
 private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

 // Error handler, from the Angular docs
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // Base URL for the web API
  //private url: string = 'https://example.com/api';
  private url: string = 'https://api.sleeper.app/v1';

  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  // Add other methods that provide general service to all components in the app

  
  getDraftPicks(id: string): Observable<draftPick[]> {
    return this.http.get<draftPick[]>(`${this.url}/draft/${id}/picks`)
  }

}