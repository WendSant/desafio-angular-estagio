import {Component, Input, OnInit} from '@angular/core';
import {INotice} from "../../interface/notice";
import {NoticesServiceService} from "../../services/notices-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  notice: INotice = {
    createdAt: "",
    image: "",
    title: "",
    body: "",
    id: ""
  }

  constructor(private noticeService: NoticesServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.noticeService.getDetailsNoticeById(id).subscribe((result:INotice)=>{
        this.notice = result
      })
    }

  }

}
