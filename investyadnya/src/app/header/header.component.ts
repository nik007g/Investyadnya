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
        // console.log(data);
      }
    })
  }

}
