import {Injectable} from "@angular/core";
import {Trivia} from "../../models";
import {Observable, of, tap} from "rxjs";
import {shibaTrivia} from "../../../utils";

@Injectable()
export class TriviaService {
  getTrivia(): Observable<Trivia[]> {
    return of(
      [
        shibaTrivia
      ]
    )
  }

  saveTrivia(trivia: Trivia) {
    return of(trivia).pipe(tap(() => console.log('saveTrivia', trivia)));
  }
}
