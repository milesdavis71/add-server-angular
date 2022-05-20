import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName = 'Pitju szerver';
  allowNewServer = false;
  serverCreationStatus = 'Nincs szerver';
  serverCreated = false;
  servers = ['Pitjuszerver1', 'Pitjuszerver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onAddServer() {
    this.serverCreationStatus = `Van szerver, a neve ${this.serverName}.`;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Új szerver létrehozva, neve: ${this.serverName}`;
  }
}
