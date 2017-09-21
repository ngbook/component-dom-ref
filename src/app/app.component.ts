import {
    Component, ViewChild, ViewChildren,
    ElementRef, OnInit, AfterViewInit,
    ContentChild, QueryList, Renderer2,
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

    list = [11, 22, 33, 'a'];

    result1: string;
    result2: string;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2) {
        // pass
    }

    ngOnInit() {
        console.log(1, this.elRef);
        if (this.tpl1) {
            const dom = this.tpl1.nativeElement;
            this.result1 = dom.innerText;
            // 接下去可以使用renderer库对DOM进行操作
            this.renderer.addClass(dom, 'test');
        }
        if (this.tpl2) {
            this.result2 = this.tpl2.text;
        }
        if (this.tpl3) {
            console.log(this.tpl3.text);
        }
        console.log(this.tpls2); // 空的

        // template
        console.log(this.templateRef);
        console.log(this.viewContainer);
    }

    ngAfterViewInit() {
        console.log(2, this.elRef);
        console.log(this.tpls2);
    }
}

/*
Renderer2的基本用法：

createElement(name: string,
    namespace?: string | null)   // 创建元素
createText(value: string)      // 创建文本节点
createComment(value: string)   // 创建HTML注释

destroyNode: (node: any)    // 销毁节点
removeChild(parent: any, oldChild: any) // 删除节点
appendChild(parent: any, newChild: any) // 添加子节点
insertBefore(parent: any,
    newChild: any, refChild: any)   // 在某元素前插入节点

parentNode(node: any) // 取得父节点
nextSibling(node: any) // 取得下一个兄弟节点
// 下方：在Renderer2声明的组件根节点中往下找元素
selectRootElement(selectorOrNode: string) // 返回找到的节点

setAttribute(el: any, name: string, value: string,
    namespace?: string | null) // 设置节点的元素属性
removeAttribute(el: any, name: string,
    namespace?: string | null) // 移除节点的元素属性
setProperty(el: any, name: string,
    value: any) // 设置节点的对象属性
// 上方atrribute是节点上的属性，property是js中操作的对象的属性
setValue(node: any, value: string) // input之类的元素设置值

addClass(el: any, name: string) // 添加class
removeClass(el: any, name: string) // 移除class
setStyle(el: any, style: string, value: any,
    flags?: RendererStyleFlags2) // 给节点添加样式
removeStyle(el: any, style: string,
    flags?: RendererStyleFlags2) // 从节点中移除某个样式

// 事件监听
listen(target: 'window' | 'document' | 'body' | any,
    eventName: string,
    callback: (event: any) => boolean | void)
*/
