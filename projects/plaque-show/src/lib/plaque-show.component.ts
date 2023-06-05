import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { VehiclePlaqueAlphabetModel } from '../model/vehicle-plaque-alphabet.model';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: {
  provide: any;
  useExisting: any;
  multi: any;
} = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PlaqueShowComponent),
  multi: true,
};

@Component({
  selector: 'app-plaque-show',
  templateUrl: './plaque-show.component.html',
  styleUrls: ['./plaque-show.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class PlaqueShowComponent implements OnInit {
  plaque1?: number;
  plaque2?: number;
  plaque3?: number;
  plaqueAlphabet?: string;
  isCar?: boolean;
  className?: string;

  @Input() plaqueItem!: VehiclePlaqueAlphabetModel;

  constructor() {}

  ngOnInit() {
    if (this.plaqueItem != null) {
      this.isCar = this.plaqueItem.isCar;

      if (this.isCar) {
        if (
          this.plaqueItem.plaque1! > 10 &&
          this.plaqueItem.plaque1! < 100 &&
          !this.isLastDigitZero(this.plaqueItem.plaque1!)
        ) {
          this.plaque1 = this.plaqueItem.plaque1;
        } else {
          this.plaque1 = 11;
        }

        if (
          this.plaqueItem.plaque2! > 110 &&
          this.plaqueItem.plaque2! < 1000 &&
          !this.isLastDigitZero(this.plaqueItem.plaque2!)
        ) {
          this.plaque2 = this.plaqueItem.plaque2;
        } else {
          this.plaque2 = 111;
        }

        if (this.plaqueItem.plaque3! > 9 && this.plaqueItem.plaque3! < 100) {
          this.plaque3 = this.plaqueItem.plaque3;
        } else {
          this.plaque3 = 10;
        }

        this.plaqueAlphabet = this.plaqueItem.plaqueAlphabet;
        this.plaqueColor(this.plaqueAlphabet!);
      } else {
        if (
          this.plaqueItem.plaque1! > 110 &&
          this.plaqueItem.plaque1! < 1000 &&
          !this.isLastDigitZero(this.plaqueItem.plaque1!)
        ) {
          this.plaque1 = this.plaqueItem.plaque1;
        } else {
          this.plaque1 = 111;
        }

        if (
          this.plaqueItem.plaque2! > 11110 &&
          this.plaqueItem.plaque2! < 100000 &&
          !this.isLastDigitZero(this.plaqueItem.plaque1!)
        ) {
          this.plaque2 = this.plaqueItem.plaque2;
        } else {
          this.plaque2 = 11111;
        }
      }
    }
  }

  private isLastDigitZero(value: number) {
    var lastDigit: number = 0;
    if (value >= 10 && value < 100) lastDigit = value % 10;
    else if (value >= 100 && value < 1000) lastDigit = value % 100;
    else if (value >= 1000 && value < 10000) lastDigit = value % 1000;
    else if (value >= 10000 && value < 100000) lastDigit = value % 10000;

    if (lastDigit === 0) {
      return true;
    }
    return false;
  }

  plaqueColor(alphabet: string) {
    switch (alphabet) {
      case 'الف':
        this.className = 'edari';
        break;
      case 'پ':
        this.className = 'police';
        break;
      case 'ت':
        this.className = 'taxi';
        break;
      case 'ث':
        this.className = 'police';
        break;
      case 'ز':
        this.className = 'v-defa';
        break;
      case 'ش':
        this.className = 'artesh';
        break;
      case 'ع':
        this.className = 'taxi';
        break;
      case 'ف':
        this.className = 'setad-kol';
        break;
      case 'ک':
        this.className = 'taxi';
        break;
      case 'D':
        this.className = 'diplomat';
        break;
      case 'S':
        this.className = 'diplomat';
        break;

      default:
        this.className = '';
        break;
    }
  }
}
