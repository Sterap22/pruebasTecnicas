import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export interface Teacher {
  id: number;
  document: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private apiUrl = 'https://localhost:44375/api/Teachers';

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<ApiResponse<Teacher[]>> {
    return this.http.get<ApiResponse<Teacher[]>>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getTeacher(id: number): Observable<ApiResponse<Teacher>> {
    return this.http.get<ApiResponse<Teacher>>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createTeacher(teacher: Teacher): Observable<ApiResponse<Teacher>> {
    return this.http.post<ApiResponse<Teacher>>(this.apiUrl, teacher)
      .pipe(catchError(this.handleError));
  }

  updateTeacher(id: number, teacher: Teacher): Observable<ApiResponse<Teacher>> {
    return this.http.put<ApiResponse<Teacher>>(`${this.apiUrl}/${id}`, teacher)
      .pipe(catchError(this.handleError));
  }

  deleteTeacher(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
