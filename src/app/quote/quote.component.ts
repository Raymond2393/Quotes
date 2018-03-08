import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes=[
        new Quote(1,'Dont cry because its over,smile because it happened.','Dr.Seuss',new Date(2018,3,14)),
        new Quote(2,'Be yourself, everyone else is taken.','Oscar Wilde',new Date(2018,2,15)),
        new Quote(3,'two things are infinite:The universe and human stupidity,and am not sure about the universe.','Albert Einstein',new Date(2018,6,9)),
        new Quote(4,'You only leave once,but if you do it right,once is enough.','Mae West',new Date(2018,1,12)),
        new Quote(5,'Be the change that you wish to see in the world.','Mahatma Gandhi',new Date(2018,0,18)),
        new Quote(6,'Dont walk in front of me...i may not follow. Dont walk behind me...i may not lead.Walk beside me..just be my friend.','Albert Camus',new Date(2018,2,14)),

      ]


      removeQuote(isRemove,index){
        if (isRemove){
          this.quotes.splice(index,1);
        }
      }

      addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

  constructor() { }

  ngOnInit() {
  }

}
