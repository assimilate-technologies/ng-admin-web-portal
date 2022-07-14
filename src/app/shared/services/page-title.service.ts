import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface PageTitleModel {
    title?: string;
    isVisible: boolean;
    smallTitle?: string;
    isHideHomeLink?:boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PageTitleService {
    // currentApplicationVersion = environment.appVersion;
    constructor(private tabTitleService: Title) {
    }

    private $pageTitleSubject = new BehaviorSubject<PageTitleModel>({
        isVisible: false
    });

    setTitle(model: PageTitleModel) {
        this.$pageTitleSubject.next(model);
        if (model.isVisible) {
            this.tabTitleService.setTitle(('Assimilate - ' + model.title));
            // this.tabTitleService.setTitle(('Assimilate - ' + model.title as string +' (v-'+this.currentApplicationVersion+')'));
        }
    }

    listenToPageTitle(): Observable<PageTitleModel> {
        return this.$pageTitleSubject.asObservable();;
    }
}