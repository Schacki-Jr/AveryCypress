Feature: BedruckteAufkleber

  

  Scenario: Bedruckte Aufkleber öffnen
    Given Öffne Seite Aufkleber drucken lassen
    Then Dann steht "Aufkleber drucken lassen" im Titel
  

  Scenario: Testet die Seite
    Then Testet Defaults  