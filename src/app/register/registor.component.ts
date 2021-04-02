import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';


const uri = 'http://localhost:3000/pic';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent implements OnInit {

 public uploader:FileUploader = new FileUploader({url:uri,itemAlias:'file'});

  constructor(public userservice:UserService,private router:Router,public http:HttpClient) { }
values:any='';
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file)=>{file.withCredentials=false};
  }
  onsubmit(F:NgForm){
    this.userservice.addnewuser(F.value).subscribe((res)=>{

      this.uploader.onCompleteItem=(item:any,response:any,status:any,headers:any)=>{
      this.values = item;
      console.log(this.values);

      }
      this.router.navigate(['login']);


    },
    (err)=>{
      console.log(err);
    })



  }
}

