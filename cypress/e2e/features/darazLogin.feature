Feature: eCommerce Login Feature

    Scenario: Verify Login Feature with Valid UserName and Password
    Given I open eCommerce Login Page and Verify Title
    When I Enter valid UserName and Password
    When I click on Login button
    Then I should be landed on logged in dashboard