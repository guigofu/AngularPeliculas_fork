import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Detecta los cambios de pantalla, si coincide con la búsqueda (en este caso HandsetPortrait),
  // true, de lo contrario false
  isPhone: Observable<Boolean> = this.breakPointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(
      //
      map(x => x.matches)
    );

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
