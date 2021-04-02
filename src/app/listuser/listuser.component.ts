import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }
  userid:any
  UserDetails:any=[];

  ngOnInit(): void {

    if(!this.userservice.isLoggedIn()){
      this.router.navigateByUrl('/');
    }

    this.userid=this.userservice.getUseriId();
    this.userservice.getselectedUser(this.userid).subscribe((data)=>{
      this.UserDetails=data;
      console.log(data);
      })

}

deleted(){
  this.userservice.deleteduser(this.userid).subscribe((res)=>{
    alert("user is deleted from database");
    this.userservice.removetoken();
    this.router.navigate(['home']);
  })
}

update(){
  this.router.navigate(['/update'],{"queryParams":{id:this.userid}});

}

logout(){
  this.userservice.logout();
  this.router.navigate(['/home']);
  alert("you successfully logout");
}
}






