import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allPosts = [
    {
        id: 'jk123hkj12',
        body: 'Mam fajnego psa!',
        author: {
            name: 'Ciocia Krysia'
        },
        images: [
            "https://picsum.photos/200/50"
        ]
    },
    {
        id: 'asd56d78',
        body: 'Mam fajnego kota!',
        author: {
            name: 'Wujek Zbyszek'
        },
        images: [
            "https://picsum.photos/200/50"
        ]
    }
]

  constructor() { }

  ngOnInit() {
  }

}
