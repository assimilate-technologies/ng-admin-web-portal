import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageTitleModel, PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title?: string;
  @Input() smallTitle?: string;
  isVisible!: boolean;
  pageTitle!: PageTitleModel;
  pageTitleSubscriber!: Subscription;
  
  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
     this.pageTitleSubscriber = this.pageTitleService.listenToPageTitle().subscribe(data => {
      this.pageTitle = data;
    });
  }

}
