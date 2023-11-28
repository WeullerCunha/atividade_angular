import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { EdicaoAlunoComponent } from './edicao-aluno/edicao-aluno.component';

const routes: Routes = [
  { path: 'listar', component: ListarAlunosComponent },
  { path: 'editar/:index', component: EdicaoAlunoComponent },
  { path: 'adicionar', component: EdicaoAlunoComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
