export default abstract class BankingAccounts {

    protected accountBalance: number = 0;

    abstract deposit(amount: number) : void;
    abstract withdraw(amount: number) : void;
    abstract getBalance(): number;

    verifyBalance(amount: number): boolean {
        if (amount < 0) {
            console.log("Amount must be > 0");
            return false;
        }
        return true;
    }}