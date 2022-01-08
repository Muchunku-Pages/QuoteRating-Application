import { Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuoteRating-App';

// Create a new Array-type variable to hold the quote input values   
// submitted through the modal hosted form by a user contributor.

    quoteInputs = Array();
    

  constructor(private ngModal:NgbModal){}

  

  openQuoteModal(modalContent:any){

      this.ngModal.open(modalContent);

    }


}
