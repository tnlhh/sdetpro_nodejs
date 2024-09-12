import BankingAccounts from "./BankingAccounts";

export default class SavingAccount extends BankingAccounts {

    constructor(balance: number) {
        super();
        if (balance <= 0)
            throw new Error("Saving balance must be > 0");
        this.accountBalance = balance;
    }

    deposit(amount: number) {
        if (this.verifyBalance(amount)) {
            this.accountBalance = this.accountBalance + amount;
        }
    }
    withdraw(amount: number) {
        if (this.verifyBalance(amount)) {
            if (this.accountBalance - amount >= 0)
                this.accountBalance = this.accountBalance - amount;
            else
                console.log("Unable to withdraw");
        }
    }
    getBalance(): number {
        return this.accountBalance;
    }


}