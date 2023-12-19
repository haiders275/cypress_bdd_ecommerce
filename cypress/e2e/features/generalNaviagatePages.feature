Feature: General Ecommerce Test - Navigate Pages

    Scenario: Navigate to different Pages from Menu and Verify Contents
    Given I open eCommerce Page and Verify Title
    When I Click on Store Menu-1
    Then I verify Title and Content on What New Page
    When I Click on Store Menu-Women
    Then I verify Title and Content on Women Page
    When I Click on Store Menu-Men
    Then I verify Title and Content on Men Page
    When I Click on Store Menu-Gear
    Then I verify Title and Content on Gear Page
    When I navigate to Home Page
    Then I verify Title and Content on Home Page