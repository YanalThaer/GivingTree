document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.querySelector('.nav-links li a.login-link');
    const isLoggedIn = localStorage.getItem("logined");

    if (isLoggedIn === "true") {
        // إذا كان المستخدم مسجل الدخول
        loginLink.textContent = "Profile";
        loginLink.href = "../views/profile.html"; // رابط صفحة الملف الشخصي
    } else {
        // إذا لم يكن مسجل الدخول
        loginLink.textContent = "Login";
        loginLink.href = "../views/login.html" // إخفاء الرابط إذا لم يكن مسجل الدخول
    }
});
