import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapedSideBar!: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  

}
