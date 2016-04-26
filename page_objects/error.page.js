'use strict';

module.exports = {
    lblTitle: element(by.id('errTitle'))
  , imgErr: element(by.id('errImg'))

  , isErrTitleShown: function(){
    return this.lblTitle.isDisplayed();
  }

  , isErrImageShown: function(){
    return this.imgErr.isDisplayed()
  }
};