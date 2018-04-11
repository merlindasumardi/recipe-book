import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() loadFeature = new EventEmitter<string>();

    onClickNav(feature: string) {
        this.loadFeature.emit(feature);
    }

}
