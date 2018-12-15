import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bonusi',
  templateUrl: './bonusi.component.html',
  styleUrls: ['./bonusi.component.css']
})
export class BonusiComponent implements OnInit {

  getEmpData: any = [];
  getBonusData: any = [];
  token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlciIsInBhc3dvcmQiOiJ1c2VyMTIzIn0sImlhdCI6MTU0NDcyNTM3Mn0.1b1Lq3sec6ZJ9wLSJPMwcDChN5XNMr9OHePhWEmuwz8";
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    const header = new HttpHeaders().set('Authorization', this.token);
    
    this.http.get('http://5.79.70.193:3000/racuni/getkorisnici', {headers: header})
    .subscribe(
      (data) => {
        this.getEmpData = data;
      }
    );
  }


  updateBonus(id, bonus_value)
  {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);

    this.http.put('http://5.79.70.193:3000/racuni/postbonus/' + id,
    JSON.stringify({
      bonus: bonus_value
    }),
      { 
      headers: header
      }
    )
    .subscribe(data => {
      this.getBonusData = data;
      location.reload();
    });
  } 

}
