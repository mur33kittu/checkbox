import { Component, AfterViewInit, ViewChild, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'ang7';
  @ViewChild('dropDownMenu') dropDownMenu;
  @ViewChild('checkmark') checkmark;
  el: Element;
  toggleClass = false;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    // console.log(this.eRef.nativeElement);
    let part = this.el.querySelector('checkbox');
    // this.renderer.setAttribute(part, 'checked', 'false');
  }

  constructor(public eRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.el = this.dropDownMenu.nativeElement;
  }

  show() {
    // console.log(this.toggleClass);
    if (this.toggleClass === true) {
      this.el.classList.toggle('show', false);
    } else {
      this.el.classList.toggle('show', true);
    }
    this.toggleClass = !this.toggleClass;
  }

  clearAll() {
    let part = this.el.getElementsByTagName('input');
    for (let i = 0; i < part.length; i++) {
      part[i].removeAttribute('checked');
      part[i].nextElementSibling.classList.remove('checkmark');
      // part[i].nextElementSibling.classList.remove('checkmar-bg');
    }
  }

  selectAll() {
    let part = this.el.getElementsByTagName('input');
    for (let i = 0; i < part.length; i++) {
      part[i].setAttribute('checked', 'checked');
      part[i].nextElementSibling.classList.add('checkmark');      
      // part[i].nextElementSibling.classList.add('checkmar-bg');
      console.log(part[i].nextElementSibling);
    }
  }
}
