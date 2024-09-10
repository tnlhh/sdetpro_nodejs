import BankingAccounts from "./BankingAccounts";

export default class CheckingAccount extends BankingAccounts {

    overdraftLimit: number = 50;
    accountBalance: number = 0;

    constructor(balance: number) {
        super();
        this.accountBalance = balance;
    }

    deposit(amount: number) {
        this.accountBalance = this.accountBalance + amount;
    }
    withdraw(amount: number) {
        if (this.verifyBalance(amount)) {
            if (this.accountBalance - amount >= this.overdraftLimit) {
                this.accountBalance = this.accountBalance - amount;
            } else
                console.log("Unable to withdraw");
        }
    }
    getBalance(): number {
        return this.accountBalance;
    }


}