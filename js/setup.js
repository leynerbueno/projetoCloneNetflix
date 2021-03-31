// let series = [
//     {
//         nome: "Vikings",
//         img: "../resourses/img/series/vikings.jpg"
//     },
//     {
//         nome: "Breaking Bad",
//         img: "../resourses/img/series/breakingbad.jpg"
//     },
//     {
//         nome: "Cobra Kai",
//         img: "../resourses/img/series/cobrakai.jpg"
//     },
//     {
//         nome: "Jessica Jones",
//         img: "../resourses/img/series/jessicajones.jpg"
//     },
// ]

// $(window).on ("load",function () {
//     let divContainer = document.getElementById("div-container");
//     let divItem;
//     series.forEach(serie => {
//         console.log("rodou");
//         divItem = document.createElement("div");
//         divItem.setAttribute("class", "item");
//         divItem.innerHTML = `<img class="box-video" src= ${serie.img}>`
//         divContainer.appendChild(divItem);
//     })
// });


//Carrousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


