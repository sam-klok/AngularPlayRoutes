import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
  }

  btnClear(){
    // we already on products page
    // this should clear text input
    this.router.navigate(['/products']);  
  }

}
