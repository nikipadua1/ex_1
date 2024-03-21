export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  depositedValue : number = 0;
  withdrawedValue : number = 0;


  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositedValue: number): void => {
    if(depositedValue > 0){
      this.balance += depositedValue;
      console.log(`Você depositou ${depositedValue}`)
    } else { 
      console.log('Nenhum valor foi depositado.')
    }
  }

  withdraw = (withdrawedValue : number): void => {
    if(withdrawedValue <= this.balance){
      this.balance -= withdrawedValue;
      console.log(`Saldo atual ${this.balance}`)
    } else { 
      console.log('Não foi possível sacar.')
    }
  }

  getBalance = (): void => {
    console.log(`Seu saldo é de ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

