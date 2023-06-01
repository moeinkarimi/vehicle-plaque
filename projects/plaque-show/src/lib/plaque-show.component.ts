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
export class PlaqueShowComponent
  implements OnInit
{
  plaque1?: number;
  plaque2?: number;
  plaque3?: number;
  plaqueAlphabet?: string;
  isCar?: boolean;
  className?: string;

  @Input() plaqueItem!: VehiclePlaqueAlphabetModel;

  constructor() {
  }

  ngOnInit() {
    if (this.plaqueItem != null) {
      this.plaque1 = this.plaqueItem.plaque1;
      this.plaque2 = this.plaqueItem.plaque2;
      this.plaque3 = this.plaqueItem.plaque3;
      this.plaqueAlphabet = this.plaqueItem.vPlaqueAlphabet;
      this.isCar = this.plaqueItem.isCar;
      this.plaqueColor(this.plaqueAlphabet!);
      console.log(this.plaqueItem)
    }
  }

  plaqueColor(alphabet: string) {
    switch (alphabet) {
      case "الف":
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
