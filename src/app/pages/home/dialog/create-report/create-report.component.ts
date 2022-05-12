import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ReportInfo } from 'src/app/core/models/report.model';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportDialog implements OnInit {

  @ViewChild(MatMenuTrigger)
  public menu!: MatMenuTrigger;
  public form!: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateReportDialog>) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      emoji: new FormControl(undefined, [Validators.required]),
    });
  }

  public createReport(): void {
    if (this.form.valid) {
      const report: ReportInfo = {
        id: Date.now(),
        ...this.form.value,
        report: {}
      }
      this.dialogRef.close(report);
    }
  }

  public get emoji(): string {
    return this.form.get('emoji')?.value;
  }

  public set emoji(value: string) {
    if (value) {
      this.form.get('emoji')?.setValue(value);
      this.menu.closeMenu();
    }
  }

}
