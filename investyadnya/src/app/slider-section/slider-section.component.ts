import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css']
})
export class SliderSectionComponent implements OnInit {

  constructor() { }
  pauseOnFocus = true;
  pauseOnHover = true;
  showNavigationArrows = true;
  sliderData = [
    {
      mainImg: '../../assets/Images/slide1.svg',
      logoImg: '../../assets/Images/mp-logo.png',
      mainHeading:'Ready-made portfolios to fit your investment goals',
      mainSubHeading: null,
      subheading: 'You can now invest directly in Model Portfoli stocks.' ,
      link: 'How it works?',
      sectionOneCount: '10',
      sectionOneText: 'Portfolios',
      sectionTwoCount: '200+',
      sectionTwoText: 'Premium Research Articles',
      buttonText: 'Know More'
    },
    {
      mainImg: '../../assets/Images/stock-o-meter.svg',
      logoImg: '../../assets/Images/Text-Stock-o-meter.png',
      mainHeading:'Yadnya\'s FIVE-G Framework',
      mainSubHeading: 'Analysis by',
      subheading: 'Equity Research Tool & Stock Fundamental Analysis using Yadnya\'s FIVE-G Framework' ,
      link: null,
      sectionOneCount: '225+',
      sectionOneText: 'Companies Ratings',
      sectionTwoCount: '500+',
      sectionTwoText: ' Premium ideas & Articles',
      buttonText: 'Search Company'
    },
    {
      mainImg: '../../assets/Images/mutual-fund.svg',
      logoImg: '../../assets/Images/Fundometer-Logo.svg',
      mainHeading:'Simplest Mutual Fund Information Bank',
      mainSubHeading: null,
      subheading: null,
      link: null,
      sectionOneCount: '220+',
      sectionOneText: 'Fund Reviews',
      sectionTwoCount: null,
      sectionTwoText: null,
      buttonText: 'Search Fund'
    },
    {
      mainImg: '../../assets/Images/Financial-planning-advisory.png',
      logoImg: '../../assets/Images/ic_financialadv.svg',
      mainHeading:'Financial Planning Advisory made Simple & Smart',
      mainSubHeading: null,
      subheading: null,
      link: null,
      sectionOneCount: '100k+',
      sectionOneText: 'Premium Report Downloads',
      sectionTwoCount: null,
      sectionTwoText: null,
      buttonText: 'Create Free Financial Plan'
    },
  ]
  ngOnInit(): void {
  }

}
