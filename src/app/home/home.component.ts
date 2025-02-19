import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignedUser } from '../user-profile/models/userModel';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 currentUser: SignedUser | null = null;


 constructor(private userService: UserService){
  this.currentUser = this.userService.user
 }

 test(){
  console.log(this.currentUser);
 }
}
