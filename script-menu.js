const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("class");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});











// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('page1 nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetheight;
        

//         if(top >= offset && top < offset |+ height ) {
//             navlinks.forEach( link => {
//                 links.calsslist.remove('active');
//                 document.querySelector('page1 nav a '[href*= + class]).classList.add
//                 ('active');
//             });
//         };


//     });
// };