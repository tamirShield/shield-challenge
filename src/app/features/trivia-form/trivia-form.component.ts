import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaFormComponent implements OnInit {

  formGroup!: FormGroup

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
      avatarSrc: new FormControl(''),
      avatarAlt: new FormControl(''),
      imageSrc: new FormControl(''),
      imageAlt: new FormControl(''),
      description: new FormControl(''),
    })
  }

}
