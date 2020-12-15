import { MigratingService } from './../migrating.service';
import { Step } from './../migration-step';
import { STEPS } from './../steps';
import { Component, OnInit } from '@angular/core';
import { Migration } from '../migration';

@Component({
  selector: 'app-msp2rms',
  templateUrl: './msp2rms.component.html',
  styleUrls: ['./msp2rms.component.css']
})
export class Msp2rmsComponent implements OnInit {
  s2t: Migration = {
    source: 'msp',
    target: 'rms',
  };
  // steps = STEPS;
  steps!: Step[];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private MigratingService: MigratingService) { }

  ngOnInit(): void {
    this.getMigratingSteps();
  }

  getMigratingSteps(): void{
    this.MigratingService.getMigratingSteps().subscribe(steps => this.steps = steps);
  }
}
