import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  animations: [
    trigger('phoneslist', [
      // state('0', style({transform: 'translateX(0) scale(1.1)'}))
    transition('void => *', [ style({transform: 'translateX(0) scale(0)'}),
        animate(200)])
    ])
  ]
})
export class PhoneListComponent implements OnInit {

  phones: Phone[];

  // selectedPhone: Phone;

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

//   onSelect(phone: Phone): void {
//       this.selectedPhone = phone;
// }


getPhones(): void {
  this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones);
}

}
