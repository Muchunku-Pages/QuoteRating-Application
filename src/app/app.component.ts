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
  
   // After the submission of each user quote into the AppComponent array, we need to ensure 
   // the modal form's input controls are cleared of the previously entered user data, 
   // prior to its submission by invoking following code statements:


      form.authorNameInput.value ="";

      form.quoteTextArea.value = "";

  // To remove the modal together with all its sub-modals and controls from memory 
  // to terminate its activity within the application we invoke the modal's 
  // dismissAll() method using the following code statement:

    this.ngModal.dismissAll()
   

    }

    deleteQuoteEntry(index:any){

    // To remove a selected table quote entry from the corresponding HTML template table 
    // we invoke the quoteInputs array's splice() method, as follows:
   
    this.quoteInputs.splice(index,1);
   
     }  


  voteAcquired(i:any, buttonDesignation:string){

    // Formulate the voteAcquired function operation by assigning an item of our quoteInputs Array 
    // of objectQuote,of the index value passed in by the parameter i to a newly declared variable 
    // - 'quoteItem', representing a single item of the quoteInputs Array of objectQuote items.
  
    let quoteItem:any = this.quoteInputs[i];
  
    // Next we formulate an Angular If directive statement whose result is assigned
    // to the quoteInputs Array item of the passed in parameter index value i 
    // to determine the newly incremented or decremented  vote property value of 
    // the index value i - quoteItem for the corresponding  quoteInputs Array's  
    // objectQuote Item initial vote value of the very same parameter index value 
    // passed into the two-way databound function.    
     
  
    this.quoteInputs[i].votes =  buttonDesignation === "upVote" ? quoteItem.votes + 1: quoteItem.votes - 1;
  
    
   
    }



}

