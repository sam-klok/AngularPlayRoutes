import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    //test$: Observable<string | null>;
    test$ =  of('Initial version');

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    //this.test$ = of('Initial version');
   }

  ngOnInit(): void {
    //this.test$ = of('Test text');
  }

  btnClear(){
    // we already on welcome page
    // this should clear text input
    this.router.navigate(['/welcome']);  
  }

}
