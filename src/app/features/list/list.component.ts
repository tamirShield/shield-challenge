import {ChangeDetectionStrategy, Component} from '@angular/core';
import {shibaTrivia} from "../../utils";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

    trivia = shibaTrivia;

}
