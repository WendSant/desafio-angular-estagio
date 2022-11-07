import { Component, OnInit } from '@angular/core';
import {NoticesServiceService} from "../../services/notices/notices-service.service";
import {INotice} from "../../interface/notice";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  emptyNotice: INotice = {
    createdAt: "",
    image: "",
    title: "",
    body: "",
    id: ""
  }

  formNotice :  FormGroup = new FormGroup({
    title: new FormControl("",Validators.required),
    image: new FormControl("",Validators.required),
    body: new FormControl("",Validators.required),
  })

  constructor(private noticeService: NoticesServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  salvarPost(){
    const notice: INotice = this.formNotice.value;
    let test = null;
    this.noticeService.createNewPost(notice).subscribe(res=>{
      this.router.navigate([`/details/${res.id}`]);
    })

  }

}
