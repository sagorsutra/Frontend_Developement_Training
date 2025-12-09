// User submits form with accidental spaces
function validateEmail(email) {
    const cleanEmail = email.trim();

    if (!cleanEmail.includes("@")) {
        return { valid: false, error: "Invalid email" };
    }

    return {
        valid: true,
        email: cleanEmail.toLowerCase()
    };
}

// Usage
console.log(validateEmail("  USER@EMAIL.COM  "));
// { valid: true, email: "user@email.com" }

console.log(validateEmail("   "));
// { valid: false, error: "Invalid email" }