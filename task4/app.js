let num = prompt("Enter a number: ");

function isPalindrome(num) {
    num = Number(num); 
    if (num < 0) {
       
        console.log("The number is not a palindrome.");
        let p = document.createElement("p");
        p.style.color = "red";
        p.textContent = "Negetive number is not a palindrome.";
        document.body.appendChild(p);
        return;
    }
    let reversed = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (reversed === original) {
        console.log("The number is a palindrome.");
        let p = document.createElement("p");
        p.style.color = "green";
        p.textContent = "The number is a palindrome.";
        document.body.appendChild(p);
    } else {
        console.log("The number is not a palindrome.");
        let p = document.createElement("p");
        p.style.color = "red";
        p.textContent = "The number is not a palindrome.";
        document.body.appendChild(p);
    }
}
isPalindrome(num);
