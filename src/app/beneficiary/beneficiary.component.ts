import { Component, OnInit } from '@angular/core';
import { Beneficiary } from './Model/beneficiary';
import { BeneficiaryService } from './beneficiary-service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

  beneficiaries : Beneficiary[] = [];
  beneficiary : Beneficiary = {} as Beneficiary;
  beneficiaryView: Beneficiary = {} as Beneficiary;

  constructor(private rs : BeneficiaryService) { }

  columns = ["Beneficiary Name","Account Number","Reference"];

  ngOnInit(): void {
    this.rs.list().subscribe
    (
      (response)=>
      {
        this.beneficiaries = response;
        console.log(response);
      },
      (error) => console.log(error)
    )
  }

  createBeneficiary(data: any) {
    this.beneficiary.id = this.beneficiary.id;
    this.beneficiary.name = data.name;
    this.beneficiary.accountNumber = data.accountNumber;
    this.beneficiary.reference = data.reference;
    if(this.beneficiary.id === 0 || this.beneficiary.id === undefined) {
      this.rs.create(this.beneficiary)
      this.beneficiaries.push(this.beneficiary);
    }
    this.editBeneficiary(this.beneficiary.id, this.beneficiary);
  }

  editBeneficiary(id: number, data: any) {
    this.beneficiary.name = data.name;
    this.beneficiary.accountNumber = data.accountNumber;
    this.beneficiary.reference = data.reference;
    this.rs.edit(id, this.beneficiary)
  }

  viewBeneficiary(id: number) {
    this.rs.view(id).subscribe(
      (response)=> {
        this.beneficiary = response;
        console.log(response);
      }
    )
  }

  deleteBeneficiary(id: number) {
    this.rs.delete(id).subscribe((data)=> {
      if(data){
        this.beneficiaries.splice(id);
      }
    });
  }

}
