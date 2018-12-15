import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-racuni',
  templateUrl: './racuni.component.html',
  styleUrls: ['./racuni.component.css']
})
export class RacuniComponent implements OnInit {

  getRacuniData: any = [];
  getDnevniIznos: number;
  getDnevniZarada: number;
  getMesecniIznos: number;
  getMesecniZarada: number;
  getGodisnjiIznos: number;
  getGodisnjiZarada: number;
  token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlciIsInBhc3dvcmQiOiJ1c2VyMTIzIn0sImlhdCI6MTU0NDcyNTM3Mn0.1b1Lq3sec6ZJ9wLSJPMwcDChN5XNMr9OHePhWEmuwz8";
  
  header = new HttpHeaders().set('Authorization', this.token);

  header_post = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.getDnevniIznos = 0;
    this.getDnevniZarada = 0;
    this.http.get('http://5.79.70.193:3000/racuni/getdnevni', { headers: this.header})
    .subscribe(
      (data) => {
        this.getRacuniData = data;

        for(var i = 0; i < this.getRacuniData.length; i++)
        {
          this.getDnevniIznos += parseInt(this.getRacuniData[i].iznos);
          this.getDnevniZarada += parseInt(this.getRacuniData[i].iznos_nabavna);
        } 

        this.getDnevniZarada = this.getDnevniIznos - this.getDnevniZarada;
      }
    );

    this.http.get('http://5.79.70.193:3000/racuni/getmesecni', { headers: this.header})
    .subscribe(
      (data) => {
        this.getMesecniZarada = parseInt(data[0]['(SUM(iznos)- SUM(iznos_nabavna))']);
        this.getMesecniIznos = parseInt(data[0]['SUM(iznos)']);
      }
    );

    this.http.get('http://5.79.70.193:3000/racuni/getgodisnji', { headers: this.header})
    .subscribe(
      (data) => {
        this.getGodisnjiZarada = parseInt(data[0]['(SUM(iznos)- SUM(iznos_nabavna))']);
        this.getGodisnjiIznos = parseInt(data[0]['SUM(iznos)']);
      }
    );
    }
}
