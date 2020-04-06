import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../shared/services/register.service';
import { User } from '../shared/model/User';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user: User = {
    userName: '',
    password: '',
    token: ''
  };

  constructor(private registerService: RegisterService,
    private location: Location) { }

  ngOnInit(): void {
  }

  save() {
    if (this.user.userName.length > 0 && this.user.password.length > 0)
      this.registerService.save(this.user);
  }

  goBack(): void {
    this.location.back();
  }

}
