import {
    Component, ViewChild, ViewChildren,
    ElementRef, OnInit, AfterViewInit,
    ContentChild, QueryList,
} from '@angular/core';
import { ChildComponent } from './child';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    // #tpl1
    @ViewChild('tpl1')
    tpl1: ElementRef;

    // by component class
    @ViewChild(ChildComponent)
    tpl2: ChildComponent;

    // by component class
    @ViewChild('tpl3', { read: ChildComponent })
    tpl3: ChildComponent;

    // by component class
    @ViewChild(ChildComponent, { read: ElementRef })
    tpl4: ElementRef;

    // view children，多个
    @ViewChildren(ChildComponent)
    tpls2: QueryList<ChildComponent>;

    result1: string;
    result2: string;

    ngOnInit() {
        if (this.tpl1) {
            this.result1 = this.tpl1.nativeElement.innerText;
        }
        if (this.tpl2) {
            this.result2 = this.tpl2.text;
        }
        if (this.tpl3) {
            console.log(this.tpl3.text);
        }
        console.log(this.tpls2); // 空的
    }

    ngAfterViewInit() {
        console.log(this.tpls2);
    }
}
