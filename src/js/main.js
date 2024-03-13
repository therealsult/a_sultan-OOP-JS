import Province from './Province.js';
import City from './City.js';

document.addEventListener('DOMContentLoaded', function () {
  const provinces = [
    new Province('Alberta', [
      new City('Calgary', 'calgary.jpg', 50, 40, 60, 30, 20, 80, 10, 1500, 100),
      new City('Edmonton', 'edmonton.jpg', 40, 30, 50, 20, 15, 70, 8, 1400, 90),
      new City('Red Deer', 'red-deer.jpg', 35, 25, 45, 15, 10, 60, 5, 1200, 80)
    ]),
    new Province('British Columbia', [
      new City('Vancouver', 'vancouver.jpg', 60, 50, 70, 40, 30, 90, 15, 1800, 200),
      new City('Victoria', 'victoria.jpg', 45, 35, 55, 25, 20, 75, 12, 1600, 150),
      new City('Kelowna', 'kelowna.jpg', 40, 30, 50, 20, 15, 70, 10, 1400, 100)
    ]),
    new Province('Manitoba', [
      new City('Winnipeg', 'winnipeg.jpg', 35, 25, 45, 15, 10, 60, 5, 1000, 50),
      new City('Brandon', 'brandon.jpg', 30, 20, 40, 10, 8, 50, 4, 900, 40),
      new City('Steinbach', 'steinbach.jpg', 25, 15, 35, 8, 6, 40, 3, 800, 30)
    ]),
    new Province('New Brunswick', [
      new City('Fredericton', 'fredericton.jpg', 25, 20, 30, 10, 8, 40, 3, 800, 30),
      new City('Saint John', 'saint-john.jpg', 20, 15, 25, 8, 6, 35, 2, 700, 20),
      new City('Moncton', 'moncton.jpg', 22, 17, 27, 9, 7, 37, 2, 750, 25)
    ]),
    new Province('Newfoundland and Labrador', [
      new City('St. John\'s', 'st-johns.webp', 30, 25, 35, 12, 10, 50, 4, 900, 40),
      new City('Corner Brook', 'corner-brook.jpg', 27, 22, 32, 11, 9, 45, 3, 850, 35),
      new City('Mount Pearl', 'mount-pearl.png', 28, 23, 33, 11, 9, 46, 3, 870, 36)
    ]),
    new Province('Nova Scotia', [
      new City('Halifax', 'halifax.jpg', 40, 35, 50, 20, 15, 70, 6, 1100, 60),
      new City('Dartmouth', 'dartmouth.jpg', 37, 32, 47, 18, 13, 67, 5, 1050, 55),
      new City('Sydney', 'sydney.jpg', 33, 28, 43, 16, 11, 63, 4, 1000, 50)
    ]),
    new Province('Ontario', [
      new City('Toronto', 'toronto.webp', 70, 60, 80, 40, 35, 100, 18, 2000, 150),
      new City('Ottawa', 'ottawa.jpg', 60, 50, 70, 35, 30, 90, 15, 1800, 120),
      new City('Mississauga', 'mississauga.webp', 65, 55, 75, 38, 33, 95, 17, 1900, 130)
    ]),
    new Province('Prince Edward Island', [
      new City('Charlottetown', 'charlottetown.jpg', 20, 15, 25, 8, 6, 35, 2, 700, 20),
      new City('Summerside', 'summerside.jpg', 18, 13, 23, 7, 5, 30, 2, 680, 18),
      new City('Stratford', 'stratford.jpg', 19, 14, 24, 8, 6, 32, 2, 690, 19)
    ]),
    new Province('Quebec', [
      new City('Montreal', 'montreal.jpg', 65, 55, 75, 35, 30, 95, 16, 1900, 130),
      new City('Quebec City', 'quebec-city.jpg', 50, 45, 60, 30, 25, 80, 12, 1700, 110),
      new City('Laval', 'laval.jpg', 58, 48, 68, 33, 28, 88, 15, 1850, 125)
    ]),
    new Province('Saskatchewan', [
      new City('Regina', 'regina.jpg', 30, 20, 40, 15, 10, 50, 5, 900, 40),
      new City('Saskatoon', 'saskatoon.jpg', 35, 25, 45, 20, 15, 60, 6, 1000, 50),
      new City('Prince Albert', 'prince-albert.webp', 32, 22, 42, 17, 12, 55, 6, 950, 45)
    ])
  ];

  const provinceSelect = document.getElementById('province');
  const cityContainer = document.getElementById('city-container');

  provinceSelect.addEventListener('change', function () {
    const selectedProvinceName = provinceSelect.value;
    const selectedProvince = provinces.find(province => province.name === selectedProvinceName);

    if (selectedProvince) {
      cityContainer.innerHTML = '';
      selectedProvince.cities.forEach(city => {
        cityContainer.innerHTML += city.getCardHTML();
      });
    } else {
      cityContainer.innerHTML = '';
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 1000); 
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); 
}


gsap.to(".hero-heading", { duration: 1, opacity: 1, delay: 0.5 });
