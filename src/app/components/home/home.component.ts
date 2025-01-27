import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];
  Mydata: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadJsonData();
  }

  // carga json y setea la informacion en la variable data
  private loadJsonData(): void {
    this.http.get<any>('assets/data/dataClassroom.json').subscribe({
      next: (response) => {
        this.data = response.courses;
      },
      error: (err) => {
        console.error('Error loading JSON data:', err);
      }
    });
  }

  // Agregar favorito
  FavoriteAdd(id: number): void {
    // falta tipeo del arreglo o interfaz para el response
    let myDataTemp:[] = this.Mydata.filter((x:any)=> x.ID === id)
    if (myDataTemp.length > 0) {
      return alert('Clase anteriormente agregada')
    }
    let tempData = this.data.filter((x:any)=> x.ID === id)
    if (!!tempData) {
      this.Mydata.push(tempData[0])
    }
  }

  // navegacion con parametros
  goToScreen(id: number): void {
    this.router.navigate(['/classDetail', id]);
  }
}
