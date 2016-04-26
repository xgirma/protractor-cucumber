'use strict';

var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var expect            = chai.expect;
var navBar            = require('./../page_objects/header.nav');
var errPage           = require('./../page_objects/error.page');
var url               = require('./../helpers/url.json');

chai.use(chaiAsPromised);

module.exports = function () {
  this.Given(/^I open Secpood$/, function (next) {
    browser.get(browser.baseUrl);
    next();
  });

  this.Then(/^I should be landing at the Home page$/, function (next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url.home);
    next();
  });

  this.Given(/^I am at the Home page$/, function (next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url.home);
    next();
  });

  this.Given(/^Clicked List All on the Header menu$/, function (next) {
    navBar.navToList();
    next();
  });

  this.Then(/^I should navigate to List page$/, function (next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url.list);
    next();
  });

  this.Given(/^I am at the List page$/, function (next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url.list);
    next();
  });

  this.Given(/^Clicked Security Podcast Directory on the Header menu$/, function (next) {
    navBar.navToHome();
    next();
  });

  this.Then(/^I should navigate to Home page$/, function (next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url.home);
    next();
  });

  this.Given(/^Entered invalid path in the address\-bar$/, function (next) {
    browser.get(url.invalid);
    next();
  });

  this.Then(/^I should land on the error page$/, function (next) {
    expect(errPage.isErrTitleShown()).to.eventually.equal(true);
    expect(errPage.isErrImageShown()).to.eventually.equal(true);
    next();
  });
};