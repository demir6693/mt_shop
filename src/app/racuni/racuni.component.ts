import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getDnevniIznos = 0;
    this.getDnevniZarada = 0;
    this.http.get('http://localhost:3000/racuni/getdnevni')
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

    this.http.get('http://localhost:3000/racuni/getmesecni')
    .subscribe(
      (data) => {
        this.getMesecniZarada = parseInt(data[0]['(SUM(iznos)- SUM(iznos_nabavna))']);
        this.getMesecniIznos = parseInt(data[0]['SUM(iznos)']);
      }
    );

    this.http.get('http://localhost:3000/racuni/getgodisnji')
    .subscribe(
      (data) => {
        this.getGodisnjiZarada = parseInt(data[0]['(SUM(iznos)- SUM(iznos_nabavna))']);
        this.getGodisnjiIznos = parseInt(data[0]['SUM(iznos)']);
      }
    );
    }
}
