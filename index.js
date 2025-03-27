window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


// document.getElementById("agreeBtn").addEventListener("click", function () {
//     document.getElementById("disclaimer").style.display = "none";
// });



// const text = "Business Law & Compliance";
// const dynamicElement = document.querySelector(".dynamic");
// let index = 0;
// let deleting = false;

// function typeEffect() {
//     if (!deleting) {
//         dynamicElement.textContent = text.substring(0, index++);
//         if (index > text.length) {
//             deleting = true;
//             setTimeout(typeEffect, 1000); // Pause before deleting
//             return;
//         }
//     } else {
//         dynamicElement.textContent = text.substring(0, index--);
//         if (index === 0) {
//             deleting = false;
//         }
//     }

//     setTimeout(typeEffect, deleting ? 50 : 100); // Adjust speed for typing and deleting
// }

// typeEffect();