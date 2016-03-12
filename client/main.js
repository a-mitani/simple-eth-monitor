Template.nodeStatusComponent.helpers({
//  accounts: accountsData
  currentProvider: function(){
    return web3.currentProvider.host;
  },
  isMining: function(){
    return web3.eth.mining;
  },
  currentHashrate: function(){
    return web3.eth.hashrate;
  },
  currentPeerCount: function(){
    return web3.net.peerCount;
  }
});
