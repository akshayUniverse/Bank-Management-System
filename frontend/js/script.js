
document.getElementById("login-form")?.addEventListener("submit", async function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
       
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
              
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (response.ok && data.token) {
                
                document.cookie = `token=${data.token}; path=/;`;
                window.location.href = 'user.html';
                alert('Login successful');
            } else {
             
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    }
});


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
    

    if (!name || !username || !email || !password || !confirmPassword || !dob || !contactNumber || !accountNumber || !bankName) {
       
        alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
       
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
                    bankName
                    
                }),
                credentials: 'include'
            });

            const data = await response.json();
            if (response.ok && data.token) {

                document.cookie = `token=${data.token}; path=/;`;
                window.location.href = 'user.html';
                alert('Registration successful!');
            } else {
                
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
