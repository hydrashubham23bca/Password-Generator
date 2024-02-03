const generatePassword = () => {
    const length = document.getElementById("password-length").value;
    const passwordDisplay = document.getElementById("password-display");

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    passwordDisplay.textContent = password;
};

const copyToClipboard = () => {
    const passwordDisplay = document.getElementById("password-display");
    const textarea = document.createElement("textarea");
    textarea.value = passwordDisplay.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
};
