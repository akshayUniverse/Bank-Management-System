
document.getElementById("login-form")?.addEventListener("submit", async function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if( !email || !password ){
        alert("Please enter both Email and Password");
    } else{
        
        const response = await fetch('http://localhost:5000/api/users/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify({ email , password }),
            credentials : 'include'
        });

        if(!response.ok){
            throw new Error('Failed to register');
        }

        const data = await response.json();
        if(data.message === 'Login successful'){
            alert('Login successful');
        } else{
            alert(data.message || 'Login failed');
        }
    }

});


document.getElementById("register-form")?.addEventListener("submit",async function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(!username || !email || !password || !confirmPassword){
        alert("Please fill in all fields");
    } else if(password !== confirmPassword){
        alert("Passwords do not match.");
    } else{
        const response = await fetch('http://localhost:5000/api/users/register',{
            method:'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ username , email , password }),
            credentials : 'include'

        });

        const data = await response.json();
        if(data.message === 'User registered successfully'){
            alert('Registration successful!');
        } else {
            alert(data.error || 'Registration failed');
        }
    }
});

function toggleSection(sectionClass){
    const section = document.querySelector(`.${sectionClass}`);
    section.style.display = section.style.display === "none" ? "block" : "none";
}
