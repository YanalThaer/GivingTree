document.getElementById("donationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let donorName = document.getElementById("donorName").value;
    let location = document.getElementById("location").value;
    let notes = document.getElementById("notes").value;
    let imageFile = document.getElementById("clothesImage").files[0];

    if (!donorName || !location) {
        alert("يرجى ملء جميع الحقول المطلوبة.");
        return;
    }

    let donation = {
        donorName,
        location,
        notes,
        imageUrl: "" // سيتم تعيين الرابط بعد قراءة الصورة
    };

    if (imageFile) {
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function(event) {
            donation.imageUrl = event.target.result; // حفظ الصورة كـ Data URL في LocalStorage

            // حفظ التبرع في LocalStorage
            let donations = JSON.parse(localStorage.getItem("donations")) || [];
            donations.push(donation);
            localStorage.setItem("donations", JSON.stringify(donations));

            // توجيه المستخدم إلى صفحة "donations.html"
            window.location.href = "donations.html";
        };
    } else {
        // إذا لم يتم رفع صورة، احفظ التبرع مباشرة
        let donations = JSON.parse(localStorage.getItem("donations")) || [];
        donations.push(donation);
        localStorage.setItem("donations", JSON.stringify(donations));

        window.location.href = "donations.html";
    }
});
