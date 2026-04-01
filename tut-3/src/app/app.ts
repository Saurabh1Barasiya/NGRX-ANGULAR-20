import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from './Store/counter.selector';
import { decrement, increment, reset } from './Store/counter.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-3';

  private store = inject(Store);

  count = toSignal(this.store.select(selectCount));

  Inc(){
    this.store.dispatch(increment({value:2}))
  }

  Dec(){
    this.store.dispatch(decrement({value:-1}))
  }

  Res(){
    this.store.dispatch(reset())
  }
}
