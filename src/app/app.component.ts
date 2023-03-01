import { Component } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_b } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import {
  EMPTY,
  Observable,
  of, 
} from 'rxjs';
import {map, tap, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle$ = of('Angular Play Routes');
  //name$ = of('Just a test'); // this test code works

  
  // getting current URL .. 
  url$ = this.activatedRoute.queryParams.pipe(
    map(() => {
      console.log("router.url="+this.router.url); // full URL with params
      return this.router.url.split('?')[0] ;
    })
  )


  // geting value parameter 'name' - works
  param$ = this.activatedRoute.queryParams.pipe(
    map(params => {
      console.log('params='+JSON.stringify(params));
      console.log("router.url="+this.router.url);
      if (params['name'])
        return params['name'];
      else 
        return 'param name not found';
    })
  )

  // getting only 'name' parameter value, otherwise ignore
  // param$ = this.activateRoute.queryParams.pipe(
  //   filter(params => params['name'] != undefined),
  //   map(params => {
  //     console.log('params='+params);
  //     if (params['name'])
  //       return params['name'];
  //     else 
  //       return 'param name not found';
  //   })
  // )


  name$ = this.activatedRoute.url.pipe(
    map(value => {
      //console.log('value ='+value);
      return JSON.stringify(value);
    }),
    
  );

  // Logic: 
  // 1. if route /welcome or /products - continue
  // 2. if there are params - ignore, return nothing
  // 3. if no params, return empty string (clear input with "")

  // name$ = this.activateRoute.queryParams.pipe(
  //   tap(params=>console.log('params='+JSON.stringify(params))),
  //   map(params => params['name']),
  //   filter((x) => x == undefined),
  //   map(y => {''}));


  // name$ = this.activateRoute.url.pipe(
  //   map(url => url),
  //   map(UrlSegment => { return UrlSegment[0].path})
  // );


  constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }

  btnGoWelcome(name?: string){
    if (name)
      this.router.navigate(['/welcome'], {queryParams: {name: name}});
    else 
      this.router.navigate(['/welcome']);
  }
  
  btnGoProducts(name?: string){
    if (name)
      this.router.navigate(['/products'], {queryParams: {name: name}});
    else
      this.router.navigate(['/products']);
  }  

  btnGoAbout(name?: string){
    if (name)
      this.router.navigate(['/about'], {queryParams: {name: name}});
    else
      this.router.navigate(['/about']);
  }  

  
}

