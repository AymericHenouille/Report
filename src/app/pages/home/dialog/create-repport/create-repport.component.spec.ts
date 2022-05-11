import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTestDialogOpenerModule } from '@angular/material/dialog/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRepportDialog } from './create-repport.component';


describe('CreateRepportComponent', () => {
  let component: CreateRepportDialog;
  let fixture: ComponentFixture<CreateRepportDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepportDialog ],
      imports: [ SharedModule, MatTestDialogOpenerModule, ReactiveFormsModule ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepportDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
