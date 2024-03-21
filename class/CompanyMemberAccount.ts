import { DioAccount } from "./DioAccount";

export class CompanyMemberAccount extends DioAccount {
        doc_id: number;
        isClubMember?: boolean;

    constructor(doc_id: number, name: string, accountNumber: number, isClubMember: boolean){
        super(name, accountNumber)
        this.doc_id = doc_id;
        this.isClubMember = isClubMember;
    }

    checkClubMembership(): boolean {
        return this.isClubMember ?? false;
    }

    deposit = (depositedValue: number): void => {
        if(depositedValue >= 10 && this.isClubMember === true){
          this.balance += depositedValue + 10;
          console.log(`Você depositou ${depositedValue} e ganhou os R$10 de bônus`)
        } else if (depositedValue < 10 && depositedValue >= 1){ 
          this.balance += depositedValue;
          console.log(`Você depositou ${depositedValue}! Deposite mais de R$10 para ganhar um bônus.`)
        } else if (depositedValue >= 10 && this.isClubMember === false) {
            this.balance += depositedValue;
            console.log(`Você depositou ${depositedValue}. Seja membro e ganhe R$10 bônus a cada depósito maior que R$10.`)
        } else {
            console.log('Valor não depositado')
        }
      }


}