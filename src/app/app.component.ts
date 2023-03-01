import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import {
  Observable,
  of, 
} from 'rxjs';
import {map, tap, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle$ = of('Angular Play Routes');
  //name$ = of('Just a test'); // this code works

  // Logic: 
  // 1. if route /welcome or /products - continue
  // 2. if there are params - ignore, return nothing
  // 3. if no params, return empty string (clear input with "")

  name$ = this.activateRoute.queryParams.pipe(
    map(params => params['name']),
    map(x => {return x}))

  // name$ = this.activateRoute.url.pipe(
  //   map(url => url),
  //   map(UrlSegment => { return UrlSegment[0].path})
  // );


  constructor(private activateRoute: ActivatedRoute, private router: Router){

  }

  btnGoWelcome(name: string){
    if (name)
      this.router.navigate(['/welcome'], {queryParams: {name: name}});
    else 
      this.router.navigate(['/welcome']);
  }
  
  btnGoProducts(name: string){
    if (name)
      this.router.navigate(['/products'], {queryParams: {name: name}});
    else
      this.router.navigate(['/products']);
  }  

  
}

