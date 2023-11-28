import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})

export class ListarAlunosComponent implements OnInit, OnDestroy {
  alunos: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.alunoService.getAlunosSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe(alunosAtualizados => {
        this.alunos = alunosAtualizados;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  adicionarAluno() {
    this.router.navigate(['/adicionar']);
  }

  excluirAluno(index: number) {
    this.alunoService.excluirAluno(index);
  }

  editarAluno(index: number) {
    this.router.navigate(['/editar', index]);
  }
}
