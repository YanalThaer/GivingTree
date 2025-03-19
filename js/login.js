document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        console.log('User already logged in:', userData);
        // Uncomment this to redirect to dashboard automatically
        // window.location.href = 'dashboard.html';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // استرجاع بيانات المستخدمين من `givehands`
    const givehandsData = JSON.parse(localStorage.getItem('givehands')) || {};
    const users = givehandsData.users || [];

    // البحث عن المستخدم بالبريد الإلكتروني
    const user = users.find(u => u.email === email);

    if (user) {
        // التحقق من صحة كلمة المرور
        if (user.password === password) {
            // تخزين بيانات المستخدم المسجل في `logined`
            const loggedInUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('logined', JSON.stringify(loggedInUser));

            alert('You have successfully logged in!');

            window.location.href = '../index.html';
        } else {
            alert('The password is incorrect. Try again.');
        }
    } else {
        alert('The user does not exist. Please register first.');
    }
});
