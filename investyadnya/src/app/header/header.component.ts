import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  large_cap_array: any = [];
  mid_cap_array: any = [];
  small_cap_array: any[] = [];

  stock_books:any[]=[];
  mf_books:any[]=[];
  inc_tax_books:any[]=[];
  fin_planning_books:any[]=[];
  constructor(private serviceCall: ApiCallService) { }

  ngOnInit(): void {
    this.serviceCall.getCatchedCompanyDetails1().subscribe(data=>{
      if(data){
        for(let i=0;i<data['Small cap'].length; i++){
          this.small_cap_array.push(data['Small cap'][i]);
        }
        for(let i=0;i<data['Large Cap'].length; i++){
          this.large_cap_array.push(data['Large Cap'][i]);
        }
        for(let i=0;i<data['Mid cap'].length; i++){
          this.mid_cap_array.push(data['Mid cap'][i]);
        }
      }
    });

    this.serviceCall.getDemoApi().subscribe(data=> {
      if(data !== null){
        for(let book_index=0; book_index<data['booksList'].length; book_index++){
          if(data.booksList[book_index].bookType == 'Mutual Fund'){
            this.mf_books.push(data.booksList[book_index])
          }
          else if(data.booksList[book_index].bookType == 'Stocks'){
            this.stock_books.push(data.booksList[book_index])
          }
          else if(data.booksList[book_index].bookType == 'Income Tax'){
            this.inc_tax_books.push(data.booksList[book_index])
          }
          else if(data.booksList[book_index].bookType == 'Financial Planning'){
            this.fin_planning_books.push(data.booksList[book_index])
          }
        }
      }
    })
  }

}
