import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs';
//import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
   
  faqs: Array<any> | undefined;
  constructor(private http: HttpClient) { 
    //  this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    //   .pipe(map((response: { json: () => any; }) => response.json())
    //   .subscribe(((res: any[] | undefined) => this.faqs = res)
    
  }

  ngOnInit(): void {
     
    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .map(response => response.json())
    // .subscribe(res => this.faqs = res);
  }

}
