import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  department: any;
  productList: Product[]

  constructor(private _httpClient:HttpClient, private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.department = this._route.snapshot.paramMap.get('department');

    this._httpClient.get<Product[]>('http://localhost:8080/products/products').subscribe(result => {
      this.productList = result;
      console.log(this.productList);
    }, error => {
      console.log(error);
    })
  }

}
