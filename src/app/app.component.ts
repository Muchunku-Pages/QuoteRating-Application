import { Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuoteRating-App';


  constructor(private ngModal:NgbModal){}

  

  openQuoteModal(modalContent:any){

      this.ngModal.open(modalContent);

    }


}
