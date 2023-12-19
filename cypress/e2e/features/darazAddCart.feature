Feature: Daraz - Add To Cart Feature

    Scenario: Verify Add To Cart Feature in Daraz
    Given I am on Logged in Dashboard after Login
    When I Search for a Product
    When I click on Product via Search
    Then Product details are shown with Add To Cart button
    When I click on Add To Cart button and Navigate to Shopping Cart
    Then Product is added in Shoppting Cart