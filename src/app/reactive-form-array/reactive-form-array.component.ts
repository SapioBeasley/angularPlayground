import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.css']
})
export class ReactiveFormArrayComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.profileFormGroup();
  }

  profileFormGroup() {
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  ngOnInit() {
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  submitForm() {
    console.log(this.profileForm.value);
  };

}
