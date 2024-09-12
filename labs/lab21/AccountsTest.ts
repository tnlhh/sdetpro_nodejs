import BankingAccounts from "./BankingAccounts";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingsAccount";



let savingAccount = new SavingAccount(100);
savingAccount.deposit(500);
savingAccount.withdraw(800);
console.log(`Saving balance : ${savingAccount.getBalance()}`);

let checkingAccount= new CheckingAccount(100);
checkingAccount.deposit(100);
checkingAccount.withdraw(-100);
console.log(`Checking balance: ${checkingAccount.getBalance()}`);

