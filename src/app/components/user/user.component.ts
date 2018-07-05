import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 name:string;
 color:string;
 age:number;
 address:Address;
 hobbies:string[];
 posts:Post[];
 isEdit:boolean = false;
  constructor(private dataService : DataService) { 

  }

  ngOnInit() {
    this.name ="Mary";
    this.color="pink";
    this.age=29;
    this.address={
      street:"Baseline",
      city:"Hillsboro",
      state:"OR"
    }
    this.hobbies=['watch movies','yoga'];
    this.dataService.getPosts().subscribe((posts) => {
      this.posts =posts;

    });
  }
  onClick(){
    console.log("hello");
  }
  addHobby(hobby){
    //this.hobbies.push(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length;i++){
      if(this.hobbies[i]== hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
  toggleEdit(){
    this.isEdit = ! this.isEdit;
  }

}
interface Address{
  street:string,
   city:string,
   state:string

} 
interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
