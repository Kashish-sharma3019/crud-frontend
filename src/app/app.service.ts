import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import{HttpErrorResponse,HttpParams} from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public allUsers
 private baseUrl ='http://localhost:3000/api/v1'

  constructor(public http :HttpClient) { }
  public getUserInfoFromLocalStorage =()=>
  {
    return JSON.parse(localStorage.getItem('userInfo'))
  }

  public setUserInfoInLocalStorage =(data)=>
  {
    localStorage.setItem('userInfo',JSON.stringify(data))
  }

    
  public signupFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    //.set('apiKey',data.apiKey)
    return this.http.post(`${this.baseUrl}/users/signup`,params)
  }
 
 
  public signinFunction(data):Observable<any>{
   const params = new HttpParams()
   .set('email',data.email)
   .set('password',data.password)
   return this.http.post(`${this.baseUrl}/users/login`,params)
 }
 public sendResetLinkFunction(data): Observable<any> {
  return this.http.get(`${this.baseUrl}/${data.email}/users/forgotPassword`);

}
public resetPassword(data): Observable<any> {

  const params = new HttpParams()
  .set('userId', data.userId)
  .set('password', data.password);

  return this.http.post(`${this.baseUrl}/users/resetPassword`, params) 
 }
 public changePassword(data): Observable<any> {

  const params = new HttpParams()
  .set('email', data.email)
  .set('password', data.password)
  .set('newPassword', data.newPassword);
  return this.http.post(`${this.baseUrl}/users/changePassword`, params) 
 }

 public getAllUsers():any{
  let myResponse= this.http.get(`${this.baseUrl}/users/view/all`);
  console.log(myResponse,"hd")
  return myResponse;
  
 }

 public deleteUsers(userId):any{
  let data = {userId:userId}
  console.log("ssssssssssss",data)
  let myResponse = this.http.post(`${this.baseUrl}/users/:userId/delete`, data);
  
  console.log(myResponse)
  return myResponse;
 }


 public editUsers(userId,firstName,lastName,email):any{
  let data = {userId:userId,
              firstName:firstName,
              lastName:lastName,
              email:email
      }
  console.log("llllllllllllllll",data)
  let myResponse = this.http.put(`${this.baseUrl}/users/:userId/edit`, data);
  
  console.log(myResponse)
  return myResponse;
 }






 public logout(): Observable<any> {

  const params = new HttpParams()
    .set('authToken', Cookie.get('authtoken'))

    let myResponse =  this.http.post(`${this.baseUrl}/users/logout`, params);
      return myResponse
} // end logout function

private handleError(err: HttpErrorResponse) {

  let errorMessage = '';

  if (err.error instanceof Error) {

    errorMessage = `An error occurred: ${err.error.message}`;

  } else {

    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

  } // end condition *if

  console.error(errorMessage);

  return Observable.throw(errorMessage);

}  // END handleError

}