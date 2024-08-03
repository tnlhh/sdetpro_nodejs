const readline = require('readline-sync');
const teoAccount = {
    accountName: 'teo',
    accountNumber: '123456789',
    routingNumber: '12345',
    balance: 111111
};

const tiAccount = JSON.parse(JSON.stringify(teoAccount));
teoAccount.accountName = 'ti';
teoAccount.accountNumber = '987654321';

const bankAccounts = [teoAccount, tiAccount];
printGameMenu();
let option = readline.question('Your option: ');
switch (option) {
    case "1":
        let accountNumber = readline.question("Please input your account number: ");
        findAccountNumber(accountNumber, bankAccounts);
        break;
    case "2":
        let yourAccountNumber = readline.question("Please input your account number: ");
        let withdrawBalance = readline.question("Please input your balance which wants to withdraw: ");
        withdrawMoney(withdrawBalance, yourAccountNumber, bankAccounts);
        break;
    case "0":
        return;                                                                                         
    default:
        break;
}

function printGameMenu() {
    console.log("=== Banking application===");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program");
}
function findAccountNumber(accountNumber, bankAccounts) {
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber) {
            console.log(`The account is existing. Account Name: ${bankAccount.accountName}, Balance:${bankAccount.balance} `);
            return bankAccount;
        }
    }
    console.log("AccountNumber is not existing.")
}
function withdrawMoney(withdrawBalance, accountNumber, bankAccounts) {
    const currentAccount = findAccountNumber(accountNumber, bankAccounts);
    if (withdrawBalance <= 0) {
        console.log("Only accept positive number");
        return;
    }
    if (currentAccount) {
        if (withdrawBalance <= currentAccount.balance) {
            currentAccount.balance = currentAccount.balance - withdrawBalance;
            console.log(`You withdrew successfully. Your current balance is ${currentAccount.balance}`);
        }
        else {
            console.log(`Your balance is lower than this. Your current balance is ${currentAccount.balance}`);
        }
    }
}