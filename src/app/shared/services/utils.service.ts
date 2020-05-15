import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private showSubject = new BehaviorSubject<boolean>(false);
  showAction$ = this.showSubject.asObservable();

  showForm(value: boolean): void {
    this.showSubject.next(value);
  }
}
