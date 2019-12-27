import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers hold services and instructs the dependency injector to give what its asking for
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  /*
    this constructor is using dependency injection. angular will inject an instance of this logging class with this constructor definition.

    the scope of the angular injector changes depending on where its defined (instances dont propagate up):
      1. AppModule - service is available application wide
      2. AppComponent - service is available component wide (but not for other services)
      3. Any other Component - service is available for this component and only its children components. this will override the scoping set from the AppComponent
  */
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
