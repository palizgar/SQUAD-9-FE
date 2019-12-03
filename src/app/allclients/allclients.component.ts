import {Component,OnInit} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import Client from 'src/app/client/client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.scss']
})
export class AllclientsComponent implements OnInit {
  clientData: Client[];


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getList();
  }
  async getList() {
    return await this.http.get('api/v1/clients').subscribe((data: Client[]) => this.clientData = [...data]);
  }
  async deleteById(clientId) {
    return await this.http.delete('api/v1/clients/' + clientId).subscribe(() => this.getList());
  }

  async update(Client) {

    const params = new HttpParams()
      .set('firstname', Client.firstname);
    return await this.http.put('api/v1/clients/' + Client.id, {}, {params}).subscribe(() => this.getList());
  }

  // send current selected client to view layer (html)
  selectedClient: Client;
  onSelect(client: Client): void {
    this.selectedClient = client;
  }
}
