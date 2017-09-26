import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId = 1;
    serverStatus = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    
    getServerID() {
        return this.serverId  ;

    }
    getServerStatus() {
        return this.serverStatus ;
    }
    getColor() {
        return this.serverStatus === 'Offline' ? 'red' : 'green';
    }
}