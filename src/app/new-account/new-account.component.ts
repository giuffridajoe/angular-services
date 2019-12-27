import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers (aka services) hold services and instructs the dependency injector to give what its asking for
 // providers: [LoggingService]
})
export class NewAccountComponent {
  // this is dependency injection. angular will inject an instance of this logging class with this constructor definition
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
                this.accountsService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
