import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicao-aluno',
  templateUrl: './edicao-aluno.component.html',
  styleUrls: ['./edicao-aluno.component.css']
})
export class EdicaoAlunoComponent implements OnInit {

  formulario!: FormGroup;
  aluno: any = {};
  editar = false;
  index: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idade: [null, [Validators.required, Validators.min(1)]],
      matricula: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['index']) {
        this.index = +params['index'];
        this.aluno = this.alunoService.getAluno(this.index);
        this.formulario.setValue({ ...this.aluno });
        this.editar = true;
      }
    });
  }

  async onSubmit() {
    if (this.formulario.valid) {
      this.aluno = { ...this.aluno, ...this.formulario.value };

      try {
        if (this.editar) {
          await this.alunoService.editarAluno(this.index!, this.aluno);
        } else {
          await this.alunoService.adicionarAluno(this.aluno);
        }

        this.router.navigate(['/listar']);
      } catch (error) {
        console.error('Erro! Verifique novamente!', error);
      }
    } else {
      console.error('Erro! Verifique novamente!');
    }
  }
}
