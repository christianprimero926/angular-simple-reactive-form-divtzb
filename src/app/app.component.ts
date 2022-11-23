import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listContacts = [];
  // contactForm: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.contactForm = this.initForm();
  // }

  // onSubmit() {
  //   console.log('Form ->', this.contactForm.value);
  // }

  // initForm(): FormGroup {
  //   return this.fb.group({
  //     firstName: '',
  //     lastName: '',
  //     phoneNumber: '',
  //   });
  // }

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.initForm();
    this.listContacts.push({
      firstName: 'Coder',
      lastName: 'Byte',
      phoneNumber: '8888879',
    });
  }

  onSubmit() {
    this.listContacts.push(this.contactForm.value);
    this.listContacts.sort((a, b) =>
      a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
    );
    console.log('Form ->', this.contactForm.value);
    console.log('Form ->', this.listContacts);
  }

  initForm(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
    });
  }
}
