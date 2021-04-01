import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any="";
  UserDetails:any=[];
  constructor(public userservice:UserService,private router:Router) { }

  ngOnInit(): void {

    this.id=this.userservice.getUseriId();
    this.userservice.getselectedUser(this.id).subscribe((res)=>{
         this.UserDetails=res;

    })
  }
  onupdate(F:NgForm){
     this.userservice.updateuser(this.id,F.value).subscribe((res=>{
        this.router.navigate(['/profile'],{"queryParams":{id:this.id}})

})
    )
  }



}




