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

    listQuoteInput(submitEvent:Event){

  // The 'preventDefault()' method is to be preceeded by a form variable declaration, which is used to 
  // designate our 'modal' form variable as the target of our 'submit' event i.e. the item our submitEvent 
  // is assigned to.
   
         
      let form:any/*FormDataEntryValue*/= submitEvent.target
   
         submitEvent.preventDefault()
   
   
       
        let quoteAuthor:string= form.authorNameInput.value;
       
        let newUserQuote:string= form.quoteTextArea.value; // This accesses the form's textArea input quote value submitted 
                                                           // by a user contributor and assigns the value obtained 
                                                           // to the 'newUserQuote' variable, formulating a similar 
                                                           // code statement for the form's author name input.
       
  
   // We then formulate a Quote Object to enable us hold each individual modal-form Quote entry 
   // and its associated vote attributes and functions, in the quoteInputs array as the properties
   // of an instance of our Quote Object Variable 'objectQuote'.
   
   let objectQuote = {

    newUserQuote,

    quoteAuthor,

    daysElapsed:new Date(),

    votes:0  }   


   // To enable us render each individual Quote property set for each user quote entry submission, 
   // as a table row record entry in our app component's corresponding HTML template, we call the
   // quoteInputs Array's push() method, passing it the 'objectQuote' Object as a parameter,
   // which provide each individual Quote instance's property value set to be held as an array element/item
   // in our quoteInputs array. 

    this.quoteInputs.push(objectQuote);
  

    }

  }

