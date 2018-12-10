import { Component, OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-racuni',
  templateUrl: './racuni.component.html',
  styleUrls: ['./racuni.component.css']
})
export class RacuniComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/getRacuni/65')
    .subscribe(
      (data) => {
        console.log(data);
      }
    );

}
