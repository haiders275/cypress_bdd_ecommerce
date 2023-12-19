Feature: New User Registration Feature

    Scenario: Verify Registration Feature with valid input data
    Given I open Registration Page and Verify Title
    When I Enter valid inputs in all mandatory fields
    When I click on Submit button
    Then I should get Registration success message

    Scenario: Verify Registration Feature with invalid input data
    Given I open Registration Page and Verify Title
    When I Enter inputs not in all mandatory fields
    When I click on Submit button without FirstName
    Then I should get Registration error message
