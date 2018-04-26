import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: [ './phone-search.component.css' ]
})
export class PhoneSearchComponent implements OnInit {
  phones$: Observable<Phone[]>;
  private searchTerms = new Subject<string>();

  constructor(private phoneService: PhoneService) {}

//   A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
// You can also push values into that Observable by calling its next(value) method as the search() method does.
// The search() method is called via an event binding to the textbox's keystroke event.
// <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
// Every time the user types in the textbox, the binding calls search() with the textbox value, a "search term". The searchTerms becomes an Observable emitting a steady stream of search terms.

// Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }


  // Passing a new search term directly to the searchPhones() after every user keystroke would create an excessive amount of HTTP requests,
  // taxing server resources and burning through the cellular network data plan.
  // Instead, the ngOnInit() method pipes the searchTerms observable through a sequence of RxJS operators
  // that reduce the number of calls to the searchPhones(), ultimately returning an observable of timely hero search results (each a Hero[]).

  ngOnInit(): void {
    this.phones$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      //waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. You'll never make requests more frequently than 300ms.
      debounceTime(300),

      // ignore new term if same as previous term.  ensures that a request is sent only if the filter text changed
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // calls the search service for each search term that makes it through debounce and distinctUntilChanged.
      // It cancels and discards previous search observables, returning only the latest search service observable
      switchMap((term: string) => this.phoneService.searchPhones(term)),
    );
  }
}
