import { Component } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'investyadnya';
  constructor(private serviceCall: ApiCallService ){

  }
  ngOnInit(){
    
    this.serviceCall.getCatchedCompanyDetails().subscribe(data=>{
      console.log(data);
    })
    this.serviceCall.getLatestVideos().subscribe(data=>{
      console.log(data);
    })
    this.serviceCall.getSpecificBook(371).subscribe(data=>{
      console.log(data);
    })
    
    this.serviceCall.getCompanyResearchRating(8185).subscribe(data=>{
      console.log(data);
    })
  }
}
