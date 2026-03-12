import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}

studentName: string = "Jonald Alea";
score: number = 90;

imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";

isDisabled: boolean = false;

message: string = "";

showMessage(){
this.message = "Button Clicked Successfully!";
}

}