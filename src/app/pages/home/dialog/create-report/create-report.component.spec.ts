import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTestDialogOpenerModule } from '@angular/material/dialog/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateReportDialog } from './create-report.component';


describe('CreateReportComponent', () => {
  let component: CreateReportDialog;
  let fixture: ComponentFixture<CreateReportDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportDialog ],
      imports: [ SharedModule, MatTestDialogOpenerModule, ReactiveFormsModule ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
