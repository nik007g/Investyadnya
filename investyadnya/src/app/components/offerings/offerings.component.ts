import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})
export class OfferingsComponent implements OnInit {

  constructor(private  rendered : Renderer2) { }

  ngOnInit(): void {
  }
  cardClick(event: any){
    this.rendered.addClass(event.target, 'active');
  }
}
