Feature: Using Header menu to navigate
  As a user of Secpood
  I should be able to use Header menu
  to navigate to different pages in the site

  @demo
  Scenario: Landing at the Home page
    Given I open Secpood
    Then I should be landing at the Home page

  @demo
  Scenario: Navigate to List page from Home page
    Given I am at the Home page
    And Clicked List All on the Header menu
    Then I should navigate to List page

  @demo
  Scenario: Navigate to Home page from List page
    Given I am at the List page
    And Clicked Security Podcast Directory on the Header menu
    Then I should navigate to Home page

  @demo
  Scenario: Navigate to non-existing route inside Secpod
    Given I am at the Home page
    And Entered invalid path in the address-bar
    Then I should land on the error page