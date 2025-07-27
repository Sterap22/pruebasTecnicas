import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

// Interface para la respuesta de la API
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

// Interface para las notas (ajusta según tu modelo real)
export interface Note {
  id: number;
  valor: number;
  name: string;
  idTeacher: number;
  idStudent: number;
  teacher?: Teacher;
  student?: Student;
}

// Interfaces adicionales (ajustar según tus modelos)
export interface Teacher {
  id: number;
  name: string;
}

export interface Student {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = 'https://localhost:44375/api/Notes';

  constructor(private http: HttpClient) { }

  // Obtener todas las notas
  getNotes(): Observable<ApiResponse<Note[]>> {
    return this.http.get<ApiResponse<Note[]>>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener una nota por ID
  getNote(id: number): Observable<ApiResponse<Note>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ApiResponse<Note>>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear una nueva nota
  createNote(note: Note): Observable<ApiResponse<Note>> {
    return this.http.post<ApiResponse<Note>>(this.apiUrl, note)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar una nota existente
  updateNote(id: number, note: Note): Observable<ApiResponse<Note>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ApiResponse<Note>>(url, note)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar una nota
  deleteNote(id: number): Observable<ApiResponse<void>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ApiResponse<void>>(url)
      .pipe(
        catchError(this.handleError)
      );
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
