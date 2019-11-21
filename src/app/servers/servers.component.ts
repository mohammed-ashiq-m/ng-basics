import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  /*template:`
    <app-server><app-server>
    <app-server><app-server>`,*/
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="no server created" ;
  serverName='Testserver';
  serverCreated=false;
  servers=['TestServer','TestServer 2'];

  constructor() {
    setTimeout(() =>{
    this.allowNewServer=true;
    },3000)
  }

  ngOnInit() {
  }
    onCreatServer(){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus="server was  created  as the name:-" + this.serverName;
    }
  onServername(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
