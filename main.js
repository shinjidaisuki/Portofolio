const btnNav = document.querySelector(".btn-nav");
const nav2 = document.querySelector(".nav2");
const container = document.querySelector(".container");
const gantiBG = document.querySelector(".gantiBG");
const cotext = document.querySelector(".Cotext");
const body = document.body;
const table = document.querySelector(".table");
const reset = document.querySelector(".reset");
const main = document.querySelector(".main");
const imgu = document.querySelector(".imgu");
const viewer = document.querySelector(".viewer");
const btnx = document.querySelector(".btnx");

btnNav.addEventListener("click", function () {
    nav2.classList.toggle("off");
    btnNav.classList.toggle("btn-navk");
});

gantiBG.addEventListener("click", function () {
    let rW = Math.round(Math.random() * 150 + 1);
    let gW = Math.round(Math.random() * 150 + 1);
    let bW = Math.round(Math.random() * 150 + 1);
    // let rgb = [ rW, gW , bW ]
    let r2 = Math.round(Math.random() * 130 + 1);
    let g2 = Math.round(Math.random() * 130 + 1);
    let b2 = Math.round(Math.random() * 130 + 1);
    let r3 = Math.round(Math.random() * 170 + 1);
    let g3 = Math.round(Math.random() * 170 + 1);
    let b3 = Math.round(Math.random() * 170 + 1);
    container.classList.remove("bglinear");
    container.style.background =
        "linear-gradient(to top,rgb(" +
        rW +
        "," +
        gW +
        "," +
        bW +
        "),rgb(" +
        r2 +
        "," +
        g2 +
        "," +
        b2 +
        "),rgb(" +
        r3 +
        "," +
        g3 +
        "," +
        b3 +
        "))";
    // container.style.background = ' linear-gradient (rgb('+rW+','+gW+','+bW+'))'
});

cotext.addEventListener("click", function () {
    container.classList.toggle("blacktext");
    container.classList.toggle("whitetext");
    table.classList.toggle("blacktext");
    table.classList.toggle("whitetext");
});

reset.addEventListener("click", function () {
    location.reload();
});

imgu.addEventListener("click", function () {
    viewer.classList.remove("off");
    imgu.classList.add("imgu2");
    viewer.classList.add("fade");
});
btnx.addEventListener("click", function () {
    viewer.classList.add("off");
    imgu.classList.remove("imgu2");
});
