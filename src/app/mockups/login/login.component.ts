import { Component, OnInit } from '@angular/core';
import { faEye, faKey, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faTrash = faTrash
  faKey = faKey
  faEye = faEye
  constructor() { }

  ngOnInit(): void {
  }

}
