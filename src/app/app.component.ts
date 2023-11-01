import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observables';

  callSomethingOnParent(arg: any, arg2:any){
    arg.innerHTML = '<h3>Hello World !</h3>';
  }
  outEvent(arg: any, arg2:any){
    arg.innerHTML = `<h3>${arg2} !</h3>`;
  }
}
