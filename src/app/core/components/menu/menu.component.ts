import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    // instacja klasy
    console.log('constructor')
   }

  ngOnInit() {
      // wyrenderowanie komponentu w DOM
      console.log('ngOnInit')

  }
  ngOnChanges(){
    // komponent zostanie zasilony danymi
    console.log('ngOnChanges')
  }
  ngOnDestroy(){
    // komponent umiera
    console.log('ngOnDestroy')
  }

}
