import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ea-industries',
  templateUrl: './ea-industries.component.html',
  styleUrls: ['./ea-industries.component.css']
})
export class EaIndustriesComponent implements OnInit {

  constructor() { }


  industries = [
    {
      image: 'healthcare.jpeg',
      title: 'Primary Care Practice',
      bio: 'Process Reingeneering',
      link: 'twitter'
    },
    {
      image: 'code.jpeg',
      title: 'Fortune 100',
      bio: 'Enterprise Application',
      link: 'twitter'
    },
    {
      image: 'analytics.jpg',
      title: 'NASDAQ Listed Company',
      bio: 'Automated Reporting',
      link: 'twitter'
    }
  ];

  ngOnInit() {
  }

}
