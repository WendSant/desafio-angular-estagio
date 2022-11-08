import { Component, OnInit } from '@angular/core';
import {NoticesServiceService} from "../../services/notices/notices-service.service";
import {INotice} from "../../interface/notice";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  search: string ="";
  searchList: INotice[]= [];
  listAllNews: INotice[] = []
  constructor(private noticeService: NoticesServiceService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Pagina Inicial")
   this.listAll()
  }

  searchOnChange(e:any){
   this.search = e.target.value
    this.search = this.search.toLowerCase()
  }

  goToTop(){
    window.scrollTo(0,0);
  }

  listAll(){
    this.noticeService.listAllNotices().subscribe((result:INotice[])=>{
    this.listAllNews = result;
    this.searchList = result;
    })
  }

  searchFunc(){
    if(this.search.length > 0){
        this.listAllNews = this.searchList.filter((arg:INotice)=>{
          if (this.search === "") {
            return arg;
          } else if (arg.title.toLowerCase().match(this.search)) {
            return arg;
          }
          return 0;
        })
      }
    if(this.search.length === 0){
      this.ngOnInit()
      this.search = ""
    }
  }

}
