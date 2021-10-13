import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  constructor(private http: HttpClient) { }
  createGroup(groupName: any): Observable<any> {
    return this.http.post('/api/createGroup', groupName);
  }
  createChannel(groupName: any, channelName: any): Observable<any> {
    return this.http.post('/api/createChannel', [groupName, channelName]);
  }
  removeGroup(groupName: any): Observable<any> {
    return this.http.post('/api/removeGroup', groupName);
  }
  removeChannel(groupName: any, channelName: any): Observable<any> {
    return this.http.post('/api/removeChannel', [groupName, channelName]);
  }
  addUserToGroup(groupName: any, userName: any): Observable<any> {
    return this.http.post('/api/addUserToGroup', [groupName, userName]);
  }
  addAssisToGroup(groupName: any, userName: any): Observable<any> {
    return this.http.post('/api/addAssisToGroup', [groupName, userName]);
  }
  removeUserToGroup(groupName: any, userName: any): Observable<any> {
    return this.http.post('/api/removeUserToGroup', [groupName, userName]);
  }
  removeAssisToGroup(groupName: any): Observable<any> {
    return this.http.post('/api/removeAssisToGroup', groupName);
  }
  createRole(userName: any, role: any): Observable<any> {
    return this.http.post('/api/createRole', [userName, role]);
  }
  deleteRole(userName: any, role: any): Observable<any> {
    return this.http.post('/api/deleteRole', userName, role);
  }
  removeUser(userName: any): Observable<any> {
    return this.http.post('/api/removeUser', userName);
  }
  updateUser(prevUserName: any, userName: any, email: any): Observable<any> {
    return this.http.post('/api/updateUser', [prevUserName, userName, email]);
  }
  readAllUsers(): Observable<any> {
    return this.http.get('/api/readAllUsers');
  }
  createNewUser(userName: any, email: any): Observable<any> {
    return this.http.post('/api/createNewUser', [userName, email]);
  }
  readAllGroups(): Observable<any> {
    console.log("hello");
    return this.http.get('/api/readAllGroups');
  }
}
