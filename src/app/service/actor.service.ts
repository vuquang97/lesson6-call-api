import { Injectable } from '@angular/core';
//import { ListActor } from '../list-actor';
import { Actor } from '../actor';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ActorService {
    private actorURL = 'http://5cd283e5d935aa0014149e0f.mockapi.io/actors';
    //private actorURL = 'http://localhost:3000/products';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getActor(): Observable<Actor[]> {
        // this.messageService.addMessage('add message from actor service');
        // return of(ListActor);
        return this.http.get<Actor[]>(this.actorURL).pipe(
            tap(reseiveActor => console.log(JSON.stringify(reseiveActor))),
            catchError(this.handleError<Actor[]>('getActor', []))
            //catchError(error => of([]))
        )
    }


    getActorById(id: number): Observable<Actor> {
        // return of(ListActor.find(actor => actor.id === id));
        this.messageService.addMessage(`actor: ${id}`);
        const actorUrlId = `${this.actorURL}/${id}`;
        return this.http.get<Actor>(actorUrlId).pipe(
            tap(actor => console.log("get : " + JSON.stringify(actor))),
            catchError(this.handleError<Actor>(`getActor id=${id}`))
           // catchError(error => of(new Actor()))
        )
    }

    updateActor(actor: Actor): Observable<any> {
        const actorUrlId = `${this.actorURL}/${actor.id}`;
        return this.http.put(actorUrlId, actor, this.httpOptions).pipe(
            tap(updateActor => console.log('update : ' + JSON.stringify(updateActor))),
            catchError(this.handleError<any>('updateActor'))
            // catchError(error => of(new Actor()))
        )
    }

    addActor(newActor: Actor): Observable<Actor> {
        return this.http.post<Actor>(this.actorURL, newActor, this.httpOptions).pipe(
            tap((actor: Actor) => console.log('add : ' + JSON.stringify(actor))),
            catchError(this.handleError<Actor>('addActor'))
            // catchError(error => of(new Actor()))
        )
    }

    deleteActor(id: number): Observable<any> {
        const actorUrl = `${this.actorURL}/${id}`;
        return this.http.delete(actorUrl).pipe(
            tap(deleteActor => console.log('delete : ' + JSON.stringify(deleteActor))),
            catchError(this.handleError<any>('deleteActor'))
            // catchError(error => of(new Actor()))
        )
    }

    seacchActor(term: string): Observable<Actor[]> {
        if(!term.trim()) {
            return of([])
        }

        const actorUrlName = `${this.actorURL}?name_like=${term}`;

        return this.http.get<Actor[]>(actorUrlName).pipe(
            tap(_ => this.log(`actor with name: ${term}`),
            ),
            catchError(this.handleError<Actor[]>('searchActor', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

    private log(message: string) {
        this.messageService.addMessage(message);
    }
    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) { }
}
