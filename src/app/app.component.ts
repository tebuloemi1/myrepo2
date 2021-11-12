import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tdf';
  myForm;
  reset()
  
{this.myForm.reset();}

  onSubmit() {console.log("Form Submitted!");}

}






