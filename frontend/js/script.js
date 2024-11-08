document.getElementById("login-form")?.addEventListener("submit",function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username || !password){
        alert("please enter both Username and Password");
    }
    else{
        alert("Login successful!");
    }
});

document.getElementById("register-form")?.addEventListener("submit",function(event){
    event.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("comfirm-password").value;

    if(password !== confirmPassword){
        alert("passwords do not match.");
    }
    else{
        alert("Registration successful!");
    }
});

function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }