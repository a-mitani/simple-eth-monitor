//テンプレート「accountStatusComponent」のヘルパー
Template.accountStatusComponent.helpers({
  //アカウント情報の取得
  accounts: function(){
    return EthAccounts.find({});
  }
});
