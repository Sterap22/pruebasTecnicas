import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentsService, Student } from '../../core/services/students/students.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-Students',
  templateUrl: './Students.component.html',
  styleUrls: ['./Students.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsComponent implements OnInit {

  Students: Student[] = [];
  StudentForm: FormGroup;
  editing: boolean = false;
  currentId: number | null = null;

  searchTerm: string = '';
  showCreateModal: boolean = false;

  currentPage = 1;
  itemsPerPage = 5;


  constructor(
    private fb: FormBuilder,
    private StudentsService: StudentsService,
    private router: Router
  ) {
    this.StudentForm = this.fb.group({
      document: ['', Validators.required],
      name: ['', Validators.required]
    });
  }


  get paginatedNotes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.Students.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.Students.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.StudentsService.getStudents().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.Students = response.data;
        }
      },
      error: (err) => console.error('Error cargar estudiantes', err)
    });
  }

  save(): void {
    if (this.StudentForm.invalid) return;

    const StudentData = this.StudentForm.value as Student;

    if (this.editing && this.currentId) {
      StudentData.id = this.currentId;

      this.StudentsService.updateStudent(this.currentId, StudentData).subscribe({
        next: (response) => {
          alert(response.message || 'Estudiante actualizado correctamente');
          window.location.reload(); // 🔄 refrescar la página
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al actualizar el estudiante';
          alert(backendMessage);
          console.error('Error actualizando estudiante', err);
        }
      });
    } else {
      this.StudentsService.createStudent(StudentData).subscribe({
        next: (response) => {
          alert(response.message || 'Estudiante registrado correctamente');
          window.location.reload(); // 🔄 refrescar la página
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al registrar el estudiante';
          alert(backendMessage);
          console.error('Error creando estudiante', err);
        }
      });
    }
  }

  edit(Student: Student): void {
    this.editing = true;
    this.currentId = Student.id;
    this.StudentForm.patchValue(Student);
    this.showCreateModal = true;
  }

  delete(id: number): void {
    if (confirm('¿Estás seguro de eliminar este estudiante?')) {
      this.StudentsService.deleteStudent(id).subscribe({
        next: (response) => {
          alert(response.message || 'Estudiante eliminado correctamente');
          window.location.reload(); // 🔄 refrescar la página
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al eliminar el estudiante';
          alert(backendMessage);
          console.error('Error eliminando el estudiante', err);
        }
      });
    }
  }

  resetForm(): void {
    this.StudentForm.reset();
    this.editing = false;
    this.currentId = null;
    this.showCreateModal = false;
  }

  filteredStudents(): Student[] {
    if (!this.searchTerm) return this.Students;
    return this.Students.filter(t =>
      t.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      t.document.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openCreateModal(): void {
    this.resetForm();
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  goToNotes(): void {
    this.router.navigate(['/']);
  }
}
