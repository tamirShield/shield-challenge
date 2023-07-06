import {Injectable} from "@angular/core";
import {Trivia} from "../../models";
import {Observable, of, tap} from "rxjs";
import {shibaTrivia} from "../../../utils";

@Injectable()
export class TriviaService {

    constructor() {
        sessionStorage.setItem('trivia', JSON.stringify([shibaTrivia]))
    }

    getTrivia(): Observable<Trivia[]> {
        return of(
            this.getTriviaFromSessionStorage()
        )
    }

    saveTrivia(trivia: Trivia): Observable<Trivia> {
        this.saveTriviaToSessionStorage(trivia);
        return of(trivia).pipe(tap(() => console.log('saveTrivia', trivia)));
    }

    private getTriviaFromSessionStorage(): Trivia[] {
        return JSON.parse(sessionStorage.getItem('trivia') ?? '[]') as Trivia[]
    }

    private saveTriviaToSessionStorage(trivia: Trivia) {
        sessionStorage.setItem('trivia', JSON.stringify([...this.getTriviaFromSessionStorage(), trivia]))
    }
}
