import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PersonalData, ContactRequest} from '../../models/contact-request';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  contactForm: FormGroup;
  countries = ['USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroupWithBuilder();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      personalData: this.formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    });
  }

  onSubmit() {
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    console.log(result);
  }

  revert() {
    this.contactForm.reset();

    this.contactForm.reset({
      personalData: new PersonalData(), requestType: '', text: ''
    });
  }

  ngOnInit() {
  }
}
