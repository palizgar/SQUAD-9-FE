import { Component, OnInit } from '@angular/core';
import Client from './client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client : Client = {
    id: '187-234nv-akjskj8-sfd-21',
    payloadhash: 'sample-payload-hash-1234',
    phonenumber: '+440712345677',
    firstname: 'initialFNAME',
    surname: 'initialLNAME'
  };
  constructor() { }

  ngOnInit() {
  }

}
