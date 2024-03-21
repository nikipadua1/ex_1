import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  getLoan = (loanValue: number): void => {
   if(loanValue > 10000 && loanValue <= 15000) {
    this.balance += loanValue;
    console.log(`Você pegou um empréstimo no valor de ${loanValue}`)
   } else {
    console.log(`Não foi possível o empréstimo no valor de ${loanValue}`)
   }
  }
}
