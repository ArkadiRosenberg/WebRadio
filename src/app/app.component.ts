import { Component } from '@angular/core';
import { MessageServiceService } from './services/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'WebRadio';

  constructor(private messageService: MessageServiceService) {
  }

  onActivate(message) {
    this.messageService.sendMessage(message.name);
  }
}

