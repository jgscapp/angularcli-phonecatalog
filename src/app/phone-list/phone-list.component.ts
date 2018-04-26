import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
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
