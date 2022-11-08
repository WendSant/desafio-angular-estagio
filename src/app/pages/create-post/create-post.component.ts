import { Component, OnInit } from '@angular/core';
import {NoticesServiceService} from "../../services/notices/notices-service.service";
import {INotice} from "../../interface/notice";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

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

  //Boolean para verificação dos campos
  emptyField: boolean = false;

  formNotice :  FormGroup = new FormGroup({
    title: new FormControl("",Validators.required),
    image: new FormControl("",Validators.required),
    body: new FormControl("",Validators.required),
  })

  constructor(private noticeService: NoticesServiceService,private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Criar Noticia")
  }

  salvarPost(){
    if(this.formNotice.valid) {
      const notice: INotice = this.formNotice.value;
      this.noticeService.createNewPost(notice).subscribe(res=>{
        this.router.navigate([`/details/${res.id}`]);
      })
    }else{
      this.emptyField = true;
    }
  }

}
