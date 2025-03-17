// استرجاع معرف الجمعية من `URL`
const urlParams = new URLSearchParams(window.location.search);
const charityId = parseInt(urlParams.get("id"), 10); // تحويل `id` إلى رقم

// استرجاع قائمة الجمعيات من `localStorage` أو البيانات الأصلية
const charities = JSON.parse(localStorage.getItem("charities")) || [];

// البحث عن الجمعية المحددة
const charity = charities.find(charity => charity.id === charityId);

if (charity) {
    document.getElementById("charityImage").src = charity.image || "img/default.jpg";
    document.getElementById("charityName").innerText = charity.name;
    document.getElementById("charityDescription").innerText = charity.description;
    document.getElementById("charityLocation").innerText = charity.location;
    document.getElementById("charityPhone").innerText = charity.phone;
    document.getElementById("charityPhone").href = `tel:${charity.phone}`;
    document.getElementById("charityEmail").innerText = charity.email;
    document.getElementById("charityEmail").href = `mailto:${charity.email}`;
    document.getElementById("charityWebsite").innerText = charity.website;
    document.getElementById("charityWebsite").href = charity.website;

    let activitiesList = charity.activities.map(activity => `<li>${activity}</li>`).join("");
    document.getElementById("charityActivities").innerHTML = activitiesList;
} else {
    document.body.innerHTML = "<h2>Charity not found!</h2><a href='index.html'>Go Back</a>";
}
