import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent {
  @Input() label: string;
  @Input() placeholderText: string;
  @Input() type: string;
  @Input() value: string;
  @Output() valueChanged = new EventEmitter<string>();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  
  constructor() {
    // Додаткова ініціалізація компонента в конструкторі
    this.label = 'Text Input';
    this.type = 'text';
    this.value = '';
    this.placeholderText = '';
  }
  
  onInput(event: Event) {
    if (event && event.target && 'value' in event.target) {
      const value = (event.target as HTMLInputElement).value;
      this.valueChanged.emit(value);
    }
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
