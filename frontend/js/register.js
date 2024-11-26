
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const formData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        contactNumber: document.getElementById('contactNumber').value,
        accountNumber: document.getElementById('accountNumber').value,
        bankName: document.getElementById('bankName').value,
        
    };

     if (!formData.name || !formData.username || !formData.email || !formData.dob || !formData.contactNumber || !formData.accountNumber || !formData.bankName) {
        alert("Please fill in all required fields.");
        return;
    }

    try {
         const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
             alert('Registration successful');
                  document.getElementById('registerForm').reset();
            
            window.location.href = 'user.html';
        } else {
             alert('Error: ' + (data.message || 'Registration failed'));
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
    }
});
