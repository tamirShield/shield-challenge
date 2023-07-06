import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Trivia} from "../../shared/models";
import {Store} from "@ngrx/store";
import {addTrivia, TriviaState} from "../../store";

@Component({
    selector: 'app-trivia-form',
    templateUrl: './trivia-form.component.html',
    styleUrls: ['./trivia-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaFormComponent implements OnInit {

    formGroup!: FormGroup

    constructor(private readonly store: Store<TriviaState>) {
    }

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

    readonly submit = () => {
        this.store.dispatch(addTrivia({payload: this.formGroup.value as Trivia}))
    }
}
