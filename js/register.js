document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;
    const phone = document.getElementById('phone').value;

    // التحقق من صحة البيانات
    if (!firstName || !lastName || !email || !password || !phone) {
        alert("Please fill in all required fields!");
        return;
    }

    if (password !== repassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    let givehandsData = JSON.parse(localStorage.getItem('givehands')) || {};

    if (!givehandsData.users) {
        givehandsData.users = [];
    }

    if (givehandsData.users.some(user => user.email === email)) {
        alert("This email is already registered. Please log in.");
        return;
    }

    
    let userData = {
        firstName,
        lastName,
        email,
        password, 
        phone,
        registrationDate: new Date().toISOString()
    };

    // إضافة المستخدم الجديد إلى `users`
    givehandsData.users.push(userData);

    // تحديث `givehands` في LocalStorage
    localStorage.setItem('givehands', JSON.stringify(givehandsData));

    // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل الناجح
    alert("You have successfully registered! Please log in to continue.");
    window.location.href = "login.html";
});
