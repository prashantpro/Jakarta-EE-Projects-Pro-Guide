import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    range(1, 4).pipe(
      filter(x => x % 2 === 0),
      map(x => x + x)
    ).subscribe(x => console.log(x));

    // const sub$ = range(1, 4).pipe(
    //   filter(x => x % 2 === 0),
    //   map(x => x + x)
    // );

    // sub$.subscribe(x => console.log('A ', x));
    // sub$.subscribe(x => console.log('B ', x));
  }

}
