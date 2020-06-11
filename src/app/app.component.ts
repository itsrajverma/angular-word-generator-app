import { Component } from '@angular/core';
import arrayWords from  "../utils/words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Word generator App';

  count = 10;
  words = '';

  handleSlideChange(newLimit){
    this.count = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0,this.count).join(" ");
  }

}
