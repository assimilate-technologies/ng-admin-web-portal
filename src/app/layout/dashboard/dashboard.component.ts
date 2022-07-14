import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private pageTitle: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitle.setTitle({ title: 'Dashboard', smallTitle: "", isVisible: true, isHideHomeLink:true});
  }

}
