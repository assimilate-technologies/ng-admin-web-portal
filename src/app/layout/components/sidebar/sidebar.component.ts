import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = MenuItem
  isActive!: boolean;
  collapsed!: boolean;
  showMenu!: string;
  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  navigateToPage(routeObj: any) {
    this.router.navigate([routeObj.routerLink]);
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

}
