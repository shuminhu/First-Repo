import { MessagesService } from './messages.service';
import { Step } from './migration-step';
import { STEPS } from './steps';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigratingService {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private MessagesService: MessagesService) { }

  getMigratingSteps(): Observable<Step[]>{
    this.MessagesService.add('MigratingService: fetched migrating steps');
    return of (STEPS);
  }

}
