# PlaqueShow

This library helps you to display your vehicle license plate using it. Now, it doesn't matter if this vehicle is a motorcycle or a car, just specify its type.

## How to Use

In first step install package in your project:
```
    npm i plaque-show
```

After that, add `PlaqueShowModule` in `module.ts` file, then you must make a model like below section:

```
plaque: VehiclePlaqueAlphabetModel;

private generatePlaque(){
  this.plaque.isCar: true;
  this.plaque.plaque1: 12;
  this.plaque.plaque2: 345;
  this.plaque.plaque3: 11;
  this.plaque.vPlaqueAlphabet: 'الف';
}
      
```

finally you must add below section in html file:

```
<app-plaque-show [plaqueItem]="plaque"></app-plaque-show>
```
