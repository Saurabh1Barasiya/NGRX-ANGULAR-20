import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectCount } from '../Store/counter.selector';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { 
  store = inject(Store)

  count = toSignal(this.store.select(selectCount),{initialValue:0})
}
