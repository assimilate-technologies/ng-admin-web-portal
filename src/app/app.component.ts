import { Component, OnInit } from '@angular/core';
import { PageTitleService } from './shared/services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Assimilate - Admin Portal';
  constructor(private pageTitle: PageTitleService) {

  }

  ngOnInit(): void {
    this.pageTitle.setTitle({ title: 'Admin Portal', smallTitle: "", isVisible: true});
  }
}
