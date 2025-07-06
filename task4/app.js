let num = prompt("Enter a number: ");

function isPalindrome(num) {
    num = Number(num); 
    if (num < 0) {
        console.log("The number is not a palindrome.");
        let p = document.createElement("p");
        p.style.color = "red";
        p.style.backgroundColor = "#ffe6e6";
        p.style.padding = "10px";
        p.style.fontSize = "18px";
        p.style.borderRadius = "8px";
        p.style.width = "fit-content";
        p.style.margin = "10px auto";
        p.textContent = "Negative number is not a palindrome.";
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
    let p = document.createElement("p");
    p.style.padding = "10px";
    p.style.fontSize = "18px";
    p.style.borderRadius = "8px";
    p.style.width = "fit-content";
    p.style.margin = "10px auto";
    if (reversed === original) {
        console.log("The number is a palindrome.");
        p.style.color = "green";
        p.style.backgroundColor = "#e6ffe6";
        p.textContent = "The number is a palindrome.";
    } else {
        console.log("The number is not a palindrome.");
        p.style.color = "red";
        p.style.backgroundColor = "#ffe6e6";
        p.textContent = "The number is not a palindrome.";
    }
    document.body.appendChild(p);
}
isPalindrome(num);
