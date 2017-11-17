import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-card',
  templateUrl: './ea-card.component.html',
  styleUrls: ['./ea-card.component.css']
})
export class EaCardComponent implements OnInit {

  constructor() { }

  team = [
    {
      image: 'will.png',
      title: 'William Dyess',
      bio: 'CEO',
      linked: 'linkedin.png'
    },
    {
      image: 'sebastian.png',
      title: 'Sebastian Kropp',
      bio: 'CTO',
      linked: 'linkedin.png'
    },
    {
      image: 'des.png',
      title: 'Desiree Ponti',
      bio: 'COO',
      linked: 'linkedin.png'
    }
  ];


  directors = [
    {
      image: 'bill.png',
      title: 'Bill Longbrake',
      bio: 'CEO',
      linked: 'linkedin.png'
    },
    {
      image: 'mark.png',
      title: 'Mark Mazak',
      bio: 'CTO',
      linked: 'linkedin.png'
    }
  ];


  advisors = [
    {
      image: 'kenyon.png',
      title: 'Dept. Director of CHIDS',
      bio: 'Kenyon Crowley',
      linked: 'linkedin.png'
    },
    {
      image: 'paul.png',
      title: 'EY 2012 Entrep. of the Year',
      bio: 'Paul Capriolo',
      linked: 'linkedin.png'
    },
    {
      image: '',
      title: 'President of ECB Group',
      bio: 'Jean Assuncao',
      linked: 'linkedin.png'
    },
    {
      image: 'alejandro.png',
      title: 'Healthcare Entrepreneur',
      bio: 'Alejandro Roman',
      linked: 'linkedin.png'
    },
    {
      image: 'les.png',
      title: 'CEO of Healthcare Council',
      bio: 'Les Pitton',
      linked: 'linkedin.png'
    },
    {
      image: 'mike.png',
      title: 'Chrm. of Healthcare Council',
      bio: 'Mike Barch',
      linked: 'linkedin.png'
    }
  ];

  ngOnInit() {
  }

}
