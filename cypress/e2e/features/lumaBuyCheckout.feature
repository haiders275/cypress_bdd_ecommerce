Feature: Luma - Add To Cart Feature

    Scenario: Verify Add To Cart Feature in Luma
    Given I Logged in and landed on Home Dashboard
    When I verified content on Home Dashboard
    Then I Search for a required Product
    When I click on Product appears on Search
    When I select color, size, quantity and click on Add To Cart button
    Then I Navigate to Shopping Cart
    Then Selected Product is added in Shoppting Cart