Feature: Search Functionality in eCommerce Website

    Scenario: Search for a product with price visibility verification
    Given I open ECommerce Page and Verify page Title
    When I search for a Product
    When I click on a Products
    Then Product Price shown and Add To Cart available