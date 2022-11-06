import {Component, Input, OnInit} from '@angular/core';
import {INotice} from "../../interface/notice";

@Component({
  selector: 'app-notice-card',
  templateUrl: './notice-card.component.html',
  styleUrls: ['./notice-card.component.css']
})
export class NoticeCardComponent implements OnInit {
  @Input()
  notice: INotice = {
    createdAt: "",
    image: "",
    title: "",
    body: "",
    id: ""
  }
  constructor() { }

  ngOnInit(): void {

  }

  testeConsole(){
    console.log("Tsteteste")
  }

}
