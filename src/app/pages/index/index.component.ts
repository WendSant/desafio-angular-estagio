import { Component, OnInit } from '@angular/core';
import {NoticesServiceService} from "../../services/notices-service.service";
import {INotice} from "../../interface/notice";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  search: string ="";
  searchList: INotice[]= [];
  listAllNews: INotice[] = []
  constructor(private noticeService: NoticesServiceService) { }

  ngOnInit(): void {
   this.listAll()
  }

  searchOnChange(e:any){
   this.search = e.target.value
    this.search = this.search.toLowerCase()
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
          console.log(arg.title)
          if (this.search === "") {
            return arg;
          } else if (arg.title.toLowerCase().startsWith(this.search)) {
            return arg;
          }
          return 0;
        })
        console.log(this.searchList.length )
      }
    if(this.search.length === 0){
      this.ngOnInit()
      this.search = ""
    }
  }

  bleubleu(){
    console.log("clicou em adicionar")
  }

}
