import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

// this means another service can be injected into this service. this is needed because angular doesnt know this class is injectable because services dont have an annotation (i.e. @Component, @Directive). error will occur without this annotation   
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}