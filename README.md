1. 


B: ReferenceError: greetign is not defined

Explanation: In the code, you attempted to assign an empty object to a variable called "greetign" (note the typo in the variable name), but you mistakenly misspelled the variable name as "greetign" instead of "greeting." As a result, JavaScript treats "greetign" as an undeclared variable, leading to a ReferenceError.

2. 
A: NaN

Explanation: In the provided code, the sum function is designed to add two numbers. However, when you call sum(1, "2"), you are attempting to add a number (1) to a string ("2"). JavaScript performs type coercion in this case and converts the number 1 to a string to perform the concatenation operation, resulting in the string "12". When you try to add a number and a string together, the result is not a valid numeric calculation, and JavaScript returns NaN (Not-a-Number).

3.
A: ['🍕', '🍫', '🥑', '🍔']

Explanation: The code assigns the value of the first element of the food array ("🍕") to the info.favoriteFood property. Later, it updates the info.favoriteFood property to "🍝". However, this change does not affect the original food array. Therefore, when you log the food array, it remains unchanged, containing the original elements: ['🍕', '🍫', '🥑', '🍔'].

4. 
B: Hi there, undefined

Explanation: The sayHi function expects an argument name, but when you call sayHi() without providing any argument, name inside the function becomes undefined. As a result, the function returns "Hi there, undefined," where undefined is the value of the name parameter in this context.

5.
C: 3

Explanation: The code uses the forEach method to iterate through the nums array and increments the count variable by 1 for each non-zero value in the array. Since there are three non-zero values in the array (1, 2, and 3), the count variable is incremented three times, resulting in a final value of 3.




Five different features:
1. user can register and login
2. user can find suitable services
3. user have to push valid email and password
4. user can see service details when only logged in
5. user can sign out when they want


github link : https://github.com/programming-hero-web-course-4/b8a9-event-management-princesaha007

live link: https://react-project-with-auth.web.app/
