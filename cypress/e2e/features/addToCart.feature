Feature: Add To Cart - Product

    Scenario: Select Product, Add To Cart and Verify in Buying Cart
    Given I open ECommerce Page and Verify Title
    When I select a Product via Search
    Then I select Size, Color and Quantity
    Then I Click Add to Cart Button
    When I navigate to Shopping Cart
    Then Product details are Stored in Shopping Cart