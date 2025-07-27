import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

// Interface para la respuesta de la API
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

// Interface para Student
export interface Student {
  id: number;
  document: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'https://localhost:44375/api/Students';

  constructor(private http: HttpClient) { }

  // Obtener todos los estudiantes
  getStudents(): Observable<ApiResponse<Student[]>> {
    return this.http.get<ApiResponse<Student[]>>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener un estudiante por ID
  getStudent(id: number): Observable<ApiResponse<Student>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ApiResponse<Student>>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear un nuevo estudiante
  createStudent(student: Student): Observable<ApiResponse<Student>> {
    return this.http.post<ApiResponse<Student>>(this.apiUrl, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar un estudiante existente
  updateStudent(id: number, student: Student): Observable<ApiResponse<Student>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ApiResponse<Student>>(url, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar un estudiante
  deleteStudent(id: number): Observable<ApiResponse<void>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ApiResponse<void>>(url)
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  // Manejo centralizado de errores
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
