import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bonusi',
  templateUrl: './bonusi.component.html',
  styleUrls: ['./bonusi.component.css']
})
export class BonusiComponent implements OnInit {

  getEmpData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const header = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlciIsInBhc3dvcmQiOiJ1c2VyMTIzIn0sImlhdCI6MTU0NDcyNTM3Mn0.1b1Lq3sec6ZJ9wLSJPMwcDChN5XNMr9OHePhWEmuwz8');
    
    this.http.get('http://localhost:3000/racuni/getkorisnici', {headers: header})
    .subscribe(
      (data) => {
        this.getEmpData = data;
      }
    );
  }


  updateBonus()
  {
    let inputBonus: string;
    console.log('rrr');
    console.log(inputBonus);
  }

}
