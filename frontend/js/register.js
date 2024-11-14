// Event listener for the registration form
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data from the registration form
    const formData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        contactNumber: document.getElementById('contactNumber').value,
        accountNumber: document.getElementById('accountNumber').value,
        bankName: document.getElementById('bankName').value,
        bankBalance: parseFloat(document.getElementById('bankBalance').value) || 0
    };

    // Perform basic validation to ensure all required fields are filled
    if (!formData.name || !formData.username || !formData.email || !formData.dob || !formData.contactNumber || !formData.accountNumber || !formData.bankName) {
        alert("Please fill in all required fields.");
        return;
    }

    try {
        // Send form data to the backend API for registration
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            // If registration is successful, display success message
            alert('Registration successful');
            // Optionally, reset form fields
            document.getElementById('registerForm').reset();
            // Redirect or perform other post-registration actions here
        } else {
            // If there's an error, display the error message
            alert('Error: ' + (data.message || 'Registration failed'));
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
    }
});
