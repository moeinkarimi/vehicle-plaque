# Vehicle Plaque Show

This library helps you to display your vehicle license plate using it. Now, it doesn`t matter if this vehicle is a motorcycle or a car, just specify its type.

![License Plate](https://github.com/moeinkarimi/vehicle-plaque/blob/master/sample%20license%20plate.png?raw=true)

## How to Use

In first step install package in your project:
```
    npm i vehicle-plaque-show
```

After that, add `PlaqueShowModule` in `module.ts` file, then you must create a model like below section:

```
plaque: VehiclePlaqueAlphabetModel;

private generatePlaque(){
  this.plaque.isCar = true;
  this.plaque.plaque1 = 12;
  this.plaque.plaque2 = 345;
  this.plaque.plaque3 = 11;
  this.plaque.plaqueAlphabet = `الف`;
}
      
```

If your vehicle is a car, you must enter a number between 11 and 99, without zero, in the first numerical field, `plaque1`. Also, in the second numerical part, you must pass a number between 111 and 999, without zero, `plaque2`. Otherwise, it will be automatically replaced by the same number of 1. In the third numerical part, you can replace a number between 10 and 99, `plaque3`. Here the zero value is not important. In the letter section, `plaqueAlphabet`, you must write the desired letter correctly, just like the real license plate, so that the color is displayed correctly.

But if your vehicle is a motorcycle, you must set the `isCar` to false and enter a number from 111 to 999 without zero in the first part, `plaque1` and a number from 11111 to 99999 without zero in the second part, `plaque2`.


finally you must add below section in html file:

```
<app-plaque-show [plaqueItem]="plaque"></app-plaque-show>
```
