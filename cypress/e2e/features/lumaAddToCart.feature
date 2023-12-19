Feature: Luma - Add To Cart Feature

    Scenario: Verify Add To Cart Feature in Luma
    Given I Logged in and landed on Home Dashboard
    When I verified content on Home Dashboard
    Then I Search for a required Product
    When I click on Product appears on Search
    When I select color, size, quantity and click on Add To Cart button
    Then I Navigate to Shopping Cart
    Then Selected Product is added in Shoppting Cart

    Scenario: Verify Add To Cart Feature in Luma
    Given I Logged in and landed on Home Dashboard
    When I verified content on Home Dashboard
    Then I Search for a required Product
    When I click on Product appears on Search
    When I select color, size, quantity and click on Add To Cart button
    Then I Navigate to Shopping Cart
    Then Selected Product is added in Shoppting Cart
    When I click on Proceed to Checkout
    Then Navigated to Payment and Shipping page
    When I select payment method and click Next button
    Then Navigated to Order Summary page
    When I click on Place Order button
    Then Navigated to Thank you page