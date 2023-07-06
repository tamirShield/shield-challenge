import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Trivia} from "../../models";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaComponent {
  @Input() trivia!: Trivia;
}
