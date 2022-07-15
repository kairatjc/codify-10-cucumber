Feature: Add Remove Elements

    @regression @smoke @admin
    Scenario: Add element
        Given I opened addremove page
        When I click on add element button
        Then Delete button appeared

    @regression @skip
    Scenario: Remove element
        Given I opened addremove page
        When I click on add element button
        And I click on Delete button
        Then Delete button disappeared
