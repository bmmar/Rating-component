const thankYou = document.querySelector(".thank-you");
const submitBtn = document.querySelector("#submit-button")
const thankText = thankYou.innerHTML;
const ratingSection = document.querySelector(".rating-section");
// const btn1 = document.querySelector("button:nth-child(1)")
// const btn2 = document.querySelector("button:nth-child(2)")
// const btn3 = document.querySelector("button:nth-child(3)")
// const btn4 = document.querySelector("button:nth-child(4)")
// const btn5 = document.querySelector("button:nth-cild(5)")
const ratings = document.getElementsByName('rating');
let rating = document.querySelector("#rating");

thankYou.style.display = "none";

submitBtn.addEventListener('click', () => {
    for (let i = 0; i < ratings.length; i++)
        
    if (ratings[i].checked) {
        ratingSection.style.display = "none"
        thankYou.style.display = "block";
        rating.innerText = (i + 1).toString();
    }
})

// btn1.addEventListener('click', () => { 
//     rating.innerText = '1';
// })
// btn2.addEventListener('click', () => { 
//     rating.innerText = "2";
// })
// btn3.addEventListener('click', () => { 
//     rating.innerText = "3";
// })
// btn4.addEventListener('click', () => { 
//     rating.innerText = "4";
// })
// btn5.addEventListener('click', () => { 
//     rating.innerText = "5";
// })
