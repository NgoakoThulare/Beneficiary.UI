import { Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from './endpoints';
import { Beneficiary } from './Model/beneficiary';

@Injectable({
    providedIn: 'root'
  })

export class BeneficiaryService {

    constructor(private http : HttpClient) { }

    listEndpoint: string = "https://localhost:44389/api/Beneficiary/List";
    createEndpoint: string = "https://localhost:44389/api/Beneficiary/Create";
    viewEndpoint: string = "https://localhost:44389/api/Beneficiary/View/";
    editEndpoint: string = "https://localhost:44389/api/Beneficiary/Edit/";
    deleteEndpoint: string = "https://localhost:44389/api/Beneficiary/Delete/";

    list() {
        return this.http.get<Beneficiary[]>(this.listEndpoint);
      }

    create(data: any) {
        this.http.post(this.createEndpoint, data).subscribe((data)=> {
          return data;
        })
      }
    
    view(id: number) {
       return this.http.get<Beneficiary>(this.viewEndpoint + id);
    }

    edit(id: number, data: any) {
      return this.http.patch(this.editEndpoint + id, data).subscribe((data)=> {
        return data;
      })
    }

    delete(id: number) {
      debugger;
      return this.http.delete(this.deleteEndpoint + id)
    }
}