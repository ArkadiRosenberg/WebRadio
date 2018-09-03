import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  title: string;
  subscription: Subscription;

  constructor(private messageService: MessageServiceService) {
    this.subscription = messageService.getMessage().subscribe(message => {
      // if(message !!= null) 
      this.title = message.text; 
      });
  }

  ngOnInit() {

  }
}
