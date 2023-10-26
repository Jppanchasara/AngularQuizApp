import { Component ,OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  @ViewChild('name') naemkey!:ElementRef;
  ngOnInit(): void {
    
  }
  constructor(){}
  startQuiz(){
    localStorage.setItem('name',this.naemkey.nativeElement.value)
  }

}
