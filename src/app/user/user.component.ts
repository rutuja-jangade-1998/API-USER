import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.warn(data)
      this.apiData=data;
      })

  }

}
