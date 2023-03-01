import { Component, OnInit } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //info$: Observable<string | null>;

    info$ =  of('Initial version');
    
  constructor() {
    //this.info$ = of('Initial version');
   }

  ngOnInit(): void {
    //this.info$ = of('Test text');
  }



}
