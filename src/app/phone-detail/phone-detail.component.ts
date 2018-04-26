import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneService } from '../phone.service';
import { Phone } from '../phone';
import { Details } from '../details';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {


// @Input decorator to make the phone property available for binding by the external PhoneListComponent.
  // @Input() phone: Phone;
  //
   @Input() details : Details;

   mainImageUrl = '';

  constructor(
      private route: ActivatedRoute,
      private PhoneService: PhoneService,
      private location: Location) {      }

  ngOnInit(): void {
    // this.getPhone();
    this.getDetail();
  //
}



// getPhone(): void {
//   const id = this.route.snapshot.paramMap.get('id');
//   this.Phthis.rvice.ge'id'd);
//    .subscribe(phone => this.phone = phone);
// }


getDetail(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.PhoneService.getDetail(id)
   .subscribe(details => this.details = details);
   // console.log("this is detail", detailx, " from getdetail");   properties are undefined here
   //this.getFirstImage();
}



setImage(imageUrl: string): void {
  // console.log("this is detail", this.details, " and that's it");  after html page is loaded, properties are available
//  this.mainImageUrl = imageUrl;
// got error "Property src does not exist on type HTMLElement,  use casting with HTMLImageElement to fix it"
  (<HTMLImageElement>document.getElementById("mainImage")).src = imageUrl;
}

 getFirstImage(): void {
   // console.log("this is detail", this.details, " first image");
   this.mainImageUrl = this.details.images[0];
 }


goBack(): void {
  this.location.back();
}

}
