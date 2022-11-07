import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {INotice} from "../interface/notice";

@Injectable({
  providedIn: 'root'
})
export class NoticesServiceService {
  api = environment.api;
  constructor(public http: HttpClient) { }

  listAllNotices(){
    return this.http.get<INotice[]>(`${this.api}`)
  }

  getDetailsNotice(notice: INotice){
    return this.http.get<INotice>(`${this.api}/${notice.id}`)
  }
  getDetailsNoticeById(id: string){
    return this.http.get<INotice>(`${this.api}/${id}`)
  }

}
