# Number-guessing-game

![image](https://user-images.githubusercontent.com/91209683/229521107-07873e2f-bd01-4710-bac1-568fc590fdfe.png)


Number guessing game with Vanilla JavaScript

I practiced basics of JavaScript like conditionals and methods like Math.random and Math.floor

Math.random() -> gives a decimal number between 0 and 1 (but 1 is not inclusive)
Math.random() *10 -> gives a decimal number between 0 and 10 (but 10 is not inclusive)
Math.random() *10 + 1 -> gives a decimal number between 1 and 11 (but 11 is not inclusive)
Math.floor(Math.random() *10+1) -> will round down the decimal number to the nearest integer, so the result will be between 1 and 10

With this knowledge we can build a Number guessing game.

Goal:
-	Accept an input from the user
-	Check if the input and the number is the same or not
-	Give feedback if the input and the number is the same, or the input is less or more than the number
-	Do not accept NaN
-	Give an option to play again
