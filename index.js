class Account {
  constructor(username) {
  this.username = username;
  this.transactions = [];
  }
  get balance() {
    let balance = 0;
    this.time = new Date();
    for (let item of this.transactions) {
      balance += item;
      if(balance < 0) {
        return "Insufficient balance to perform the withdrawal"
      }
    }
    return balance +" "+ this.time;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transfer {
  constructor (account, amount) {
    this.account = account;
    this.amount = amount;
  }
  commit() {
    //this.account.balance += this.value;
    this.time = new Date();
    this.account.transactions.push(this.value);
  }
}

class Withdrawal extends Transfer{
  get value() {
      return -this.amount;
  }
}

class Deposit extends Transfer{
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('MajorChe');
t1 = new Deposit(myAccount,50.25);
t1.commit();
console.log('Updated account info of myAccount: ', myAccount.balance);

t2 = new Withdrawal(myAccount,11.99);
t2.commit();
console.log('Updated account info of myAccount: ', myAccount.balance);

t1 = new Deposit(myAccount,25.25);
t1.commit();
console.log('Updated account info of myAccount: ', myAccount.balance);

