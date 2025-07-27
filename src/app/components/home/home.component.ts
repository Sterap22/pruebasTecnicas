import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Note, NotesService } from '../../core/services/notes/notes.service';
import { Router } from '@angular/router';
import { Teacher, TeachersService } from '../../core/services/teachers/teachers.service';
import { Student, StudentsService } from '../../core/services/students/students.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allNotes: Note[] = [];
  students: Student[] = [];
  teachers: Teacher[] = [];
  selectedStudent: Student | null = null;
  studentNotes: Note[] = [];
  searchTerm: string = '';

  showCreateModal: boolean = false;
  isEditMode: boolean = false;
  editNoteId: number | null = null;

  newNote: Note = this.initNewNote();

  activeIndex: number | null = null;

  currentPage = 1;
  itemsPerPage = 2;

  constructor(
    private notesService: NotesService,
    private studentsService: StudentsService,
    private teachersService: TeachersService,
    private router: Router
  ) {}



  ngOnInit(): void {
    this.loadNotes();
    this.getAllStudents();
    this.getAllTeachers();
  }

  get paginatedNotes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.allNotes.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.allNotes.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  loadNotes(): void {
    this.notesService.getNotes().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.allNotes = response.data;
        }
      },
      error: (err) => console.error('Error loading notes', err)
    });
  }

  initNewNote(): Note {
    return {
      id: 0,
      name: '',
      valor: 0,
      idStudent: 0,
      idTeacher: 0,
      student: { id: 0, document: '', name: '' },
      teacher: { id: 0, document: '', name: '' }
    };
  }

  getAllStudents(): void {
    this.studentsService.getStudents().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.students = response.data;
        }
      },
      error: (err) => console.error('Error loading students', err)
    });
  }

  getAllTeachers(): void {
    this.teachersService.getTeachers().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.teachers = response.data;
        }
      },
      error: (err) => console.error('Error loading teachers', err)
    });
  }

  getNotesByStudent(studentId: number): Note[] {
    return this.allNotes.filter(n => n.idStudent === studentId);
  }

  getNotes(): Note[] {
    return this.allNotes.filter(s =>
      s.teacher?.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      s.student?.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  closeModal(): void {
    this.selectedStudent = null;
    this.studentNotes = [];
  }

  openCreateModal(note?: Note): void {
    this.showCreateModal = true;
    this.getAllStudents();
    this.getAllTeachers();

    if (note) {
      this.isEditMode = true;
      this.editNoteId = note.id;
      this.newNote = { ...note };
    } else {
      this.isEditMode = false;
      this.editNoteId = null;
      this.newNote = this.initNewNote();
    }
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.newNote = this.initNewNote();
  }

  submitNote(): void {
    const selectedStudent = this.students.find(s => s.id === Number(this.newNote.idStudent));
    const selectedTeacher = this.teachers.find(t => t.id === Number(this.newNote.idTeacher));

    if (!selectedStudent || !selectedTeacher) {
      alert('Estudiante o profesor no encontrado');
      return;
    }

    const noteToSend: Note = {
      ...this.newNote,
      student: selectedStudent,
      teacher: selectedTeacher
    };

    const request = this.isEditMode
      ? this.notesService.updateNote(noteToSend.id, noteToSend)
      : this.notesService.createNote(noteToSend);

    request.subscribe({
      next: (response) => {
        alert(response.message || (this.isEditMode ? 'Nota actualizada' : 'Nota registrada'));
        window.location.reload();
      },
      error: (err) => {
        const backendMessage = err?.error?.message || 'Error al guardar la nota';
        alert(backendMessage);
        console.error(err);
      }
    });
  }

  deleteNote(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta nota?')) {
      this.notesService.deleteNote(id).subscribe({
        next: (response) => {
          alert(response.message || 'Nota eliminada correctamente');
          window.location.reload();
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Error al eliminar la nota';
          alert(backendMessage);
          console.error(err);
        }
      });
    }
  }

  startEditNote(note: Note): void {
    this.openCreateModal(note);
  }
}
