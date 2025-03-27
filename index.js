window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


const colorThemes = [
    { bg: "orange", title: "#721c24", tag: "#d9534f" },
    { bg: "#7070df", title: "#0c5460", tag: "#5bc0de" },
    { bg: "#5eaf5e", title: "#155724", tag: "#28a745" }
];

document.querySelectorAll(".card").forEach((card, index) => {
    const theme = colorThemes[index % colorThemes.length];
    card.style.borderLeft = `5px solid ${theme.bg}`;
});

let idx = 0;
let toChange = 2;
document.querySelectorAll(".tags span").forEach((tag, index) => {
    toChange--;
    const theme = colorThemes[idx % colorThemes.length];
    tag.style.color = theme.tag;
    if (toChange == 0) {
        toChange = 2;
        idx++;
    }
});