// Login form submission handler
document.getElementById("login-form")?.addEventListener("submit", async function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        // Alert user if email or password is missing
        alert("Please enter both Email and Password");
    } else {
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // Include credentials to handle cookies
            });

            if (!response.ok) {
                // Check if response is not OK to display appropriate error
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (data.message === 'Login successful') {
                // Redirect on successful login
                alert('Login successful');
                window.location.href = 'user.html';
            } else {
                // Alert the specific error message from the response
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    }
});

// Register form submission handler
document.getElementById("register-form")?.addEventListener("submit", async function(event){
    event.preventDefault();

    const name = document.getElementById("name").value; // Collect additional fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const dob = document.getElementById("dob").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const bankName = document.getElementById("bankName").value;
    const bankBalance = parseFloat(document.getElementById("bankBalance").value) || 0;

    if (!name || !username || !email || !password || !confirmPassword || !dob || !contactNumber || !accountNumber || !bankName) {
        // Alert user if any required field is missing
        alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
        // Alert if passwords do not match
        alert("Passwords do not match.");
    } else {
        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name,
                    username,
                    email,
                    password,
                    dob,
                    contactNumber,
                    accountNumber,
                    bankName,
                    bankBalance 
                }),
                credentials: 'include'
            });

            const data = await response.json();
            if (data.message === 'User registered successfully') {
                // Redirect on successful registration
                alert('Registration successful!');
                window.location.href = 'user.html';
            } else {
                // Alert specific error message from the response
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration.');
        }
    }
});

// Function to toggle visibility of a section by class
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    section.style.display = section.style.display === "none" ? "block" : "none";
}
