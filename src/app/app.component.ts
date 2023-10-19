  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {

    title = 'hackaton';
    observable = new Observable (observer => {
      observer.next('Start Processing...');
      setTimeout(()=>observer.next('Still Processing...'), 3000);
      setTimeout(()=>observer.complete(), 5000);
    })

    ngOnInit(){
      this.observable.subscribe(
        data=> console.log(data),
        error=> console.log(error),
        ()=> console.log('Process Completed!'),
      )
    }

  }
