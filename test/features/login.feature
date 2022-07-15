Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
  
    Given Я на странице логина
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
