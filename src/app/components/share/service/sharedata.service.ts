import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  matSnavStatus: BehaviorSubject<any>;
  constructor() {
    this.matSnavStatus = new BehaviorSubject(false);
  }

}
