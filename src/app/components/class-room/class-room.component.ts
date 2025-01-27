import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-room',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './class-room.component.html',
  styleUrl: './class-room.component.scss'
})
export class ClassRoomComponent implements OnInit{
  id: Number | null = null;
  data: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  // Obtener el parámetro
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadJsonData(this.id)
  }

  // carga json y setea la informacion en la variable data
  private loadJsonData(id: Number): void {
    this.http.get<any>('assets/data/students.json').subscribe({
      next: (response) => {
        this.data = response.students.filter((x: any) => x.classes.includes(id));
      },
      error: (err) => {
        console.error('Error loading JSON data:', err);
      }
    });
  }
}
