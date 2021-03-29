import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(public userservice:UserService,private router:Router ) { }
resdata:any=[];
id:string='';
userid:any='';
  ngOnInit(): void {
  }

  onlogin(F:NgForm){
   this.userservice.login(F.value).subscribe((res)=>{
     this.resdata=res;
     this.userservice.settoken(this.resdata.token);
     this.userid=this.resdata.data._id;

     this.userservice.setUserId(this.userid);
     this.id=this.userid;


     if(this.userservice.loginIn()){
      this.router.navigate(['/profile'],{"queryParams":{id:this.id}})


     }

     //

   },
   (err)=>{
     console.log(err);
   }
   )

  }

}
