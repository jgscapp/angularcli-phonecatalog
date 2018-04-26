import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Phone } from './phone';
import { Details } from './details';
//import { PHONES } from './phones';   not useful after implement HTTP


@Injectable()
export class PhoneService {

  private phonesUrl = 'api/phones'  //URL to web api
  private detailsUrl = 'api/details'

  constructor(
    private http: HttpClient
  ) { }


/** GET heroes from the server */
getPhones(): Observable<Phone[]> {
//  return of(PHONES);  //Uses RxJs
   return this.http.get<Phone[]>(this.phonesUrl)
    .pipe(
      catchError(this.handleError('getPhones', []))
    );
}

getPhone(id: string): Observable<Phone> {
  // return of(PHONES.find(phone => phone.age === age));  //uses rxjs


  // this function constructs a request URL with the desired hero's id.
  // the server should respond with a single hero rather than an array of heroes.
  // therefore, getHero returns an Observable<Hero> ("an observable of Hero objects") rather than an observable of hero arrays .
  const url = `${this.phonesUrl}/${id}`;
  return this.http.get<Phone>(url).pipe(
    catchError(this.handleError<Phone>(`getPhone id=${id}`))
  );
}

getDetail(id: string): Observable<Details> {
  const url = `${this.detailsUrl}/${id}`;
  return this.http.get<Details>(url).pipe(
    catchError(this.handleError<Details>(`getDetail id=${id}`))
  );
}


/* GET phones whose name contains search term */
searchPhones(term: string): Observable<Phone[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Phone[]>(`api/phones/?name=${term}`).pipe(
    //tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Phone[]>('searchPhones', []))
  );
}


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
  //  this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
