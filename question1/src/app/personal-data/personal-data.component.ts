import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpringService } from '../service/spring.service';
import { PersonalData } from '../model/personaldata';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent {

    personalForm = this.formb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(1), Validators.max(110)]],
    gender: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    ocupation: ['', Validators.required],
    educationLevel: ['', Validators.required],
    bank: ['', Validators.required],
    number: ['', [Validators.required, Validators.minLength(16)]],
    franchise: ['', Validators.required],
    validThru: ['', Validators.required],
  });

  constructor(private router: Router, private service: SpringService, private formb: FormBuilder) { }

  onSubmit() {
    this.service.createPersonalData(this.personalForm.value)
    .subscribe(data => {
        alert('Personal data added correctly.');
        this.router.navigate(['/']);
    });

    }

    save(personaldata: PersonalData) {
        this.service.createPersonalData(personaldata)
        .subscribe(data => {
            alert('Personal Data added');
        });
    }


    get firstName() { return this.personalForm.get('firstName'); }
    get lastName() { return this.personalForm.get('lastName'); }
    get age() { return this.personalForm.get('age'); }
    get gender() { return this.personalForm.get('gender'); }
    get maritalStatus() { return this.personalForm.get('maritalStatus'); }
    get ocupation() { return this.personalForm.get('ocupation'); }
    get educationLevel() { return this.personalForm.get('educationLevel'); }

    get bank() { return this.personalForm.get('bank'); }
    get number() { return this.personalForm.get('number'); }
    get franchise() { return this.personalForm.get('franchise'); }
    get validThru() { return this.personalForm.get('validThru'); }
}

