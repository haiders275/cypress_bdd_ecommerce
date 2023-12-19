Feature: eCommerce luma Login Feature

    Scenario: Verify luma Login Feature with Valid UserName and Password
    Given I open eCommerce luma Login Page and Verify Title
    When I Enter valid UserName1 and Password
    When I click on luma Login button
    Then I should be landed on luma logged in dashboard