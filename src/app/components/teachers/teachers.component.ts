import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeachersService, Teacher } from '../../core/services/teachers/teachers.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  teacherForm: FormGroup;
  editing: boolean = false;
  currentId: number | null = null;

  searchTerm: string = '';
  showCreateModal: boolean = false;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(
    private fb: FormBuilder,
    private teachersService: TeachersService,
    private router: Router
  ) {
    this.teacherForm = this.fb.group({
      document: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teachersService.getTeachers().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.teachers = response.data;
        }
      },
      error: (err) => console.error('Error cargar profesor', err)
    });
  }

  get paginatedNotes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.teachers.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.teachers.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  save(): void {
    if (this.teacherForm.invalid) return;

    const teacherData = this.teacherForm.value as Teacher;

    if (this.editing && this.currentId) {
      teacherData.id = this.currentId;

      this.teachersService.updateTeacher(this.currentId, teacherData).subscribe({
        next: (response) => {
          alert(response.message || 'Profesor actualizado correctamente');
          window.location.reload(); // 🔄 refresca la página tras actualizar
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al actualizar el profesor';
          alert(backendMessage);
          console.error('Error actualizar profesor', err);
        }
      });
    } else {
      this.teachersService.createTeacher(teacherData).subscribe({
        next: (response) => {
          alert(response.message || 'Profesor registrado correctamente');
          window.location.reload(); // 🔄 refresca la página tras crear
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al registrar el profesor';
          alert(backendMessage);
          console.error('Error creacion profesor', err);
        }
      });
    }
  }

  edit(teacher: Teacher): void {
    this.editing = true;
    this.currentId = teacher.id;
    this.teacherForm.patchValue(teacher);
    this.showCreateModal = true;
  }

  delete(id: number): void {
    if (confirm('¿Estás seguro de eliminar este profesor?')) {
      this.teachersService.deleteTeacher(id).subscribe({
        next: (response) => {
          alert(response.message || 'Profesor eliminado correctamente');
          window.location.reload(); // 🔄 refresca la página tras eliminar
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al eliminar el profesor';
          alert(backendMessage);
          console.error('Error eliminar profesor', err);
        }
      });
    }
  }

  resetForm(): void {
    this.teacherForm.reset();
    this.editing = false;
    this.currentId = null;
    this.showCreateModal = false;
  }

  filteredTeachers(): Teacher[] {
    if (!this.searchTerm) return this.teachers;
    return this.teachers.filter(t =>
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
