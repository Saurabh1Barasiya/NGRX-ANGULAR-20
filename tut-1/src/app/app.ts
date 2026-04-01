import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './store/counter.selectors';
import { CommonModule } from '@angular/common';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';

  count$:Observable<number>;
  constructor(private store:Store){
   this.count$ = this.store.select(selectCount);
  }

  Inc(){
    this.store.dispatch(increment());
  }

  Dec(){
    this.store.dispatch(decrement());
  }

  Res(){
    this.store.dispatch(reset());
  }
}
