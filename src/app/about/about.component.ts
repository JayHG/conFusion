import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader: Leader;
  leaders: Leader[] = LEADERS;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderservice.getLeaders();
  }

}
