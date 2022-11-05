import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-card',
  templateUrl: './notice-card.component.html',
  styleUrls: ['./notice-card.component.css']
})
export class NoticeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testeConsole(){
    console.log("Tsteteste")
  }

}
