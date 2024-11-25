document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('http://localhost:5000/api/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`
            },
            credentials: 'include'
        });

        if (!response.ok) throw new Error('Failed to fetch user information');

        const userData = await response.json();
        document.getElementById('username').innerText = userData.name;
        document.getElementById('name').innerText = userData.name;
        document.getElementById('email').innerText = userData.email;
        document.getElementById('dob').innerText = userData.dob || "Not Available";
        document.getElementById('contact').innerText = userData.contact || "Not Available";
        document.getElementById('accountNumber').innerText = userData.accountNumber || "Not Available";
        document.getElementById('bankName').innerText = userData.bankName || "Not Available";
        document.getElementById('balance').innerText = userData.balance || "0.00";
    } catch (error) {
        console.error(error);
        alert('Error loading user information');
    }

    // Logout Button
    document.getElementById('logoutButton').addEventListener('click', () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = 'login.html';
    });
    
    // Animate info boxes on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slideIn 0.6s forwards";
            }
        });
    });

    document.querySelectorAll('.info-box').forEach(box => {
        observer.observe(box);
    });
});

// Helper function to retrieve JWT token from cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
