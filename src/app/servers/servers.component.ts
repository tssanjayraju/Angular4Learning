import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  servers = ['Server 1','Server 2'];
  serverName = '';

  userName = '';

  constructor() {
    setTimeout(() => {
this.allowNewServer = true;
    },3000);
   }

  ngOnInit() {
  }
  onUserReset(){
this.userName = '';
  }
  onServerAdd(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

}
