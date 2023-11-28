import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: any[] = [];
  private alunosSubject = new BehaviorSubject<any[]>(this.alunos);

  getAlunos() {
    return this.alunosSubject.value;
  }

  getAluno(index: number) {
    return this.alunosSubject.value.find((_, i: number) => i === index);
  }

  getAlunosSubject() {
    return this.alunosSubject.asObservable();
  }

  adicionarAluno(aluno: any) {
    const alunosAtuais = [...this.alunosSubject.value, aluno];
    this.alunosSubject.next(alunosAtuais);
    console.log('Aluno adicionado ao serviço:', aluno);
  }

  editarAluno(index: number, aluno: any) {
    const alunosAtuais = this.alunosSubject.value.slice();
    if (index >= 0 && index < alunosAtuais.length) {
      alunosAtuais[index] = aluno;
      this.alunosSubject.next(alunosAtuais);
    } else {
      console.error('Índice inválido para edição.');
    }
  }

  excluirAluno(index: number) {
    const alunosAtuais = this.alunosSubject.value.slice();
    if (index >= 0 && index < alunosAtuais.length) {
      alunosAtuais.splice(index, 1);
      this.alunosSubject.next(alunosAtuais);
    } else {
      console.error('Índice inválido para exclusão.');
    }
  }
}

