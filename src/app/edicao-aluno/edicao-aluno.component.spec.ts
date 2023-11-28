import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicaoAlunoComponent } from './edicao-aluno.component';

describe('EdicaoAlunoComponent', () => {
  let component: EdicaoAlunoComponent;
  let fixture: ComponentFixture<EdicaoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoAlunoComponent]
    });
    fixture = TestBed.createComponent(EdicaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});