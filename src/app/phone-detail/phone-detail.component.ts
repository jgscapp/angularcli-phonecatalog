import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneService } from '../phone.service';
import { Phone } from '../phone';
import { Details } from '../details';


type Orientation = ( "prev" | "next" | "none");

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
  animations: [
    trigger('phonedetails', [
      // state('0', style({transform: 'translateX(0) scale(1.1)'}))
    transition('void => *', [ style({transform: 'translateX(0) scale(0)'}),
        animate(200)])
    ]),
    trigger('phoneselected', [
    transition( "void => prev", // ---> Entering --->
                    [
                        style({
                            //display: 'block',
                            position: 'absolute',
                            top: 500,
                            opacity: 0.0,
                            zIndex: 2
                        }),
                        animate(
                           "200ms ease-in-out",
                            style({
                                top: 0,
                                opacity: 1.0,
                                zIndex: 2
                            })
                        )
                    ]
                ),
    transition( "prev => void", // ---> Leaving --->
                    [
                        animate(
                            "200ms ease-in-out",
                            style({
                                top: 500,
                                opacity: 0.0
                            })
                        )
                    ]
                ),
    transition( "void => next", // <--- Entering <---
                     [
                         style({
                           //display: 'block',
                           position: 'absolute',
                             top: 500,
                             opacity: 0.0,
                             zIndex: 2
                         }),
                         animate(
                             "200ms ease-in-out",
                             style({
                                 top: 0,
                                 opacity: 1.0,
                                 zIndex: 2
                             })
                         )
                     ]
                 ),
     transition( "next => void", // <--- Leaving <---
                     [
                         animate(
                             "200ms ease-in-out",
                             style({
                                 top: 500,
                                 opacity: 0.0
                             })
                         )
                     ]
                 )
    ])
  ]

})

export class PhoneDetailComponent implements OnInit {


// @Input decorator to make the phone property available for binding by the external PhoneListComponent.
  // @Input() phone: Phone;
  //
   @Input() details : Details;

   public orientation: Orientation;
   public selectedImage: string;

    private changeDetectorRef: ChangeDetectorRef

   mainImageUrl = '';
   public index = 0;
   public prvindex = 0;

  constructor(
      private route: ActivatedRoute,
      private PhoneService: PhoneService,
      private location: Location,
      changeDetectorRef: ChangeDetectorRef) {

      this.changeDetectorRef = changeDetectorRef;
      this.orientation = "none";
}

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
   //this.selectedImage = this.details.images[0].push;
 }




setImage(imageUrl: string): void {
  // console.log("this is detail", this.details, " and that's it");  after html page is loaded, properties are available
 // this.mainImageUrl = imageUrl;
// got error "Property src does not exist on type HTMLElement,  use casting with HTMLImageElement to fix it"
  // (<HTMLImageElement>document.getElementById("mainImage")).src = imageUrl;

  this.index = this.details.images.indexOf(imageUrl);
console.log(this.prvindex);
  console.log(this.index);

  if(this.index>this.prvindex) {
    this.orientation = "next";
  } else {
    this.orientation = "prev";
  }

  this.changeDetectorRef.detectChanges();
  console.log(this.orientation);

  this.prvindex=this.index

  this.selectedImage = this.details.images[this.index]
    // ? this.details.images[this.index]
    // : this.details.images[0];

//  console.log(this.selectedImage);

}

public showNextImage() : void {

        // Change the "state" for our animation trigger.
        this.orientation = "next";
        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
        var index = this.details.images.indexOf( this.selectedImage );
        // ? this.details.images.indexOf( this.selectedImage )
        // : 0 ;
        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        this.selectedImage = this.details.images[ index + 1 ]
            ? this.details.images[ index + 1 ]
            : this.details.images[ 0 ]
        ;

    }


    public showPrevImage() : void {

        // Change the "state" for our animation trigger.
        this.orientation = "prev";

        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
        var index = this.details.images.indexOf( this.selectedImage );

        // Move the rendered element to the previous index - this will cause the current
        // item to enter the ( "prev" => "void" ) transition and this new item to enter
        // the ( "void" => "prev" ) transition.
        this.selectedImage = this.details.images[ index - 1 ]
            ? this.details.images[ index - 1 ]
            : this.details.images[ this.details.images.length - 1 ]
        ;

    }


 getFirstImage(): void {
   // console.log("this is detail", this.details, " first image");
   this.mainImageUrl = this.details.images[0];
 }


goBack(): void {
  this.location.back();
}


}
