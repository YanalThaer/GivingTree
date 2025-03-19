document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById('dylog');
    const isLoggedIn = localStorage.getItem("logined");

    if (isLoggedIn) {
        // إذا كان المستخدم مسجل الدخول
        loginLink.textContent = "Profile";
        loginLink.href = "../views/profile.html";
    } else {
        // إذا لم يكن مسجل الدخول
        loginLink.textContent = "Login";
        loginLink.href = "../views/login.html" // إخفاء الرابط إذا لم يكن مسجل الدخول
    }
});
