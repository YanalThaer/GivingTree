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
        alert("يرجى ملء جميع الحقول المطلوبة!");
        return;
    }

    if (password !== repassword) {
        alert("كلمتا المرور غير متطابقتين!");
        return;
    }

    // استرجاع بيانات `givehands` من LocalStorage أو إنشاء كائن جديد
    let givehandsData = JSON.parse(localStorage.getItem('givehands')) || {};

    // إذا لم يكن هناك مفتاح `users`، قم بإنشائه كمصفوفة فارغة
    if (!givehandsData.users) {
        givehandsData.users = [];
    }

    // التحقق مما إذا كان البريد الإلكتروني مسجلًا مسبقًا
    if (givehandsData.users.some(user => user.email === email)) {
        alert("البريد الإلكتروني مستخدم بالفعل، الرجاء استخدام بريد آخر أو تسجيل الدخول.");
        return;
    }

    // إنشاء كائن بيانات المستخدم
    let userData = {
        firstName,
        lastName,
        email,
        password, // ⚠️ يجب تشفير كلمة المرور في تطبيق حقيقي
        phone,
        registrationDate: new Date().toISOString()
    };

    // إضافة المستخدم الجديد إلى `users`
    givehandsData.users.push(userData);

    // تحديث `givehands` في LocalStorage
    localStorage.setItem('givehands', JSON.stringify(givehandsData));

    // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل الناجح
    alert("تم التسجيل بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول.");
    window.location.href = "login.html";
});
