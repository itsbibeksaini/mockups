import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskboards-dashboard',
  templateUrl: './taskboards-dashboard.component.html',
  styleUrls: ['./taskboards-dashboard.component.scss']
})
export class TaskboardsDashboardComponent implements OnInit {

  faTrash = faTrash

  dataSource = ["1","2","1","2","1","2","1","2"];
  constructor() { }

  ngOnInit(): void {
  }

}
