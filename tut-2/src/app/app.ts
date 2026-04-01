import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from './Store/counter.selector';
import { decrement, increment, reset } from './Store/counter.action';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

  store = inject(Store);

  count = toSignal(this.store.select(selectCount),{ initialValue: 0 });


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
