'use strict';

module.exports = {
    lnkHome : element(by.id('brand'))
  , lnkList : element(by.id('list'))

  , navToHome: function(){
    this.lnkHome.click();
  }

  , navToList: function(){
    this.lnkList.click();
  }
};