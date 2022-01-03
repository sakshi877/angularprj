import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registationform',
  templateUrl: './registationform.component.html',
  styleUrls: ['./registationform.component.scss']
})
export class RegistationformComponent implements OnInit {

  name: string = "sakshi";
  constructor() { }


  ngOnInit(): void {
  }

  formSubmit(SubmitForm: NgForm) {
    console.log(SubmitForm.value);
  }
}


