import {
    Component, ContentChild,
    ElementRef, AfterViewInit,
    ContentChildren, QueryList,
} from '@angular/core';
import { SubComponent } from '../sub';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements AfterViewInit {
    text = '这是子组件里的内容';
    collapsed = true;

    @ContentChild('contents')
    tpl1: ElementRef;
    @ContentChild(SubComponent)
    tpl2: SubComponent;

    @ContentChildren(SubComponent)
    tpls: QueryList<SubComponent>;

    ngAfterViewInit() {
        console.log(this.tpl1);
        console.log(this.tpl2);
        console.log(this.tpls);
    }
}
