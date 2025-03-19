const charities = [
    {
        id: 1,
      name: "Tkiyet Um Ali",
      location: "Amman, Jordan",
      phone: "+962 6 490 0900",
      email: "info@tua.jo",
      website: "https://www.tua.jo",
      activities: [
       "Iftar Meal Program for Jordan and Gaza",
       "Ramadan Expiation Program",
       "Monthly Food Parcel Program"] ,
  
  image: "images/Iftar_Meal_Program_for_Jordan_and_Gaza.jpeg",
  
      description: "Tkiyet Um Ali is a leading humanitarian organization focused on eradicating hunger and food insecurity across Jordan. They provide food assistance and nutritional support to families in need, as well as organizing seasonal campaigns to provide food during Ramadan and other important events. Tkiyet Um Ali also empowers communities by partnering with local organizations to improve health, education, and economic conditions for underserved populations, fostering long-term self-reliance."
  },
     
      {
        id: 2,
          name: "Jordan River Foundation",
          location: "Amman, Jordan",
          phone: "+962 6 566 7401",
          email: "info@jordanriver.jo",
          website: "https://www.jordanriver.jo",
          activities: ["Protect a Child", "Support Local Women in Our Community"],
  
          image: "images/Protect_a_Child.jpg",
  
          description: "Jordan River Foundation works towards community development and empowerment. Support a child by participating in social and psychological empowerment activities at the Queen Rania Family and Child Center, including awareness programs on protection and abuse prevention, self-confidence building, life skills, emotional stability, and financial literacy. This is achieved through 20 interactive sessions featuring sports, arts, and cultural activities, supervised by child protection experts. Empower a woman by providing her with the necessary training to support her family and generate income. This includes professional and technical training in life skills, entrepreneurship, handicrafts, and culinary arts over a 30-day preparation period to equip her for the job market."
      },
  
  {
    id: 3,
      name: "Sanahya Karaman Charity Association",
      location: "Amman, Jordan",
      phone: "+962 6 553 3112",
      email: "info@sanahyakaraman.org",
      website: "https://www.sanahyakaraman.org",
      activities: ["Clothing Project", "Food Support Project.jpg"],
           image: "images/Clothing_Project.jpg",
  
      description: "Sanahya Karaman Charity Association is a non-profit organization based in Jordan that focuses on supporting underprivileged families by providing essential humanitarian aid. The association organizes seasonal campaigns such as 'Winter Mercy' to distribute warm clothing, blankets, and heating supplies to those in need. Additionally, it offers food packages to ensure a better quality of life for vulnerable communities. Through its dedicated initiatives, Sanahya Karaman empowers individuals and fosters a culture of giving. Volunteers and donors are encouraged to contribute and make a meaningful impact."
  }
  
  ];

  // send local storage
  localStorage.setItem('charities', JSON.stringify(charities));

const opportunitiesContainer = document.getElementById("opportunitiesContainer");

charities.forEach(charity => {
    const card = document.createElement("div");
    card.classList.add("opportunity-card");
    card.setAttribute("data-id", charity.id); 

    let activitiesList = charity.activities.map(activity => `<li>${activity}</li>`).join("");

    card.innerHTML = `
        <div class="card-img">
            <img src="${charity.image || 'img/default.jpg'}" alt="${charity.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="card-content">
            <h3>${charity.name}</h3>
            <ul>${activitiesList}</ul>
        </div>
        <div class="card-footer">
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <span >${charity.location}</span>
            </div>
            <div class="contact">
                <a href="mailto:${charity.email}">Contact</a>
            </div>
        </div>
    `;

    card.addEventListener("click", function () {
        window.location.href = `../views/charity-details.html?id=${charity.id}`;
    });

    opportunitiesContainer.appendChild(card);
});


