class Account {
  constructor(username) {
  this.username = username;
  this.balance = 0;
  }
}

class Transfer {
  constructor (account, amount) {
    this.account = account;
    this.amount = amount;
  }
}

class Withdrawal extends Transfer{
  commit() {
    if(this.account.balance < this.amount){
      return ('Insufficient Balance')
    } else {
      this.account.balance -= this.amount;
    }
  }
}

class Deposit extends Transfer{
  commit() {
    this.account.balance += this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('MajorChe');
t1 = new Deposit(myAccount,50.25);
t1.commit();
console.log('Updated account info of myAccount: ', myAccount);

t2 = new Withdrawal(myAccount,119.99);
t2.commit();
//console.log('Updated account info of myAccount: ', myAccount);

