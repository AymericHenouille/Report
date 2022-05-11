import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { RepportInfo } from 'src/app/core/models/repport.model';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-repport.component.html',
  styleUrls: ['./create-repport.component.scss']
})
export class CreateRepportDialog implements OnInit {

  @ViewChild(MatMenuTrigger)
  public menu!: MatMenuTrigger;
  public form!: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateRepportDialog>) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      emoji: new FormControl(undefined, [Validators.required]),
    });
  }

  public createReport(): void {
    if (this.form.valid) {
      const repport: RepportInfo = {
        id: 0,
        ...this.form.value,
        repport: {}
      }
      this.dialogRef.close(repport);
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
