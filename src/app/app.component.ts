import { Component , Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyElementComponent } from './my-element/my-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v8-app';
  constructor(private injector:Injector){

  }
  ngOnInit(){
    let ele = createCustomElement(MyElementComponent,
      {injector:this.injector});
    customElements.define('my-ele',ele);
  }
}
