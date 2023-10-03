Feature: The Internet SwagLabs Website

  Scenario: Click the Login Button with Empty Fields and Verify Error Message

    Given I am on the login page
    When I click login with empty username and empty password
    Then I should see and verify the error <message> for empty fields

    Examples:
      | username | password | message                                 |
      |          |          | Epic sadface: Username is required      |