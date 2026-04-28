
const cardRating = document.getElementById('rating-state');
const cardThankYou = document.getElementById('thank-you-state');
const submitBtn = document.getElementById('submit-btn');
const ratingBtns = document.querySelectorAll('.rating-btn');
const scoreDisplay = document.getElementById('selected-rating');

let pickedRating = 0;


ratingBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        ratingBtns.forEach(function(el) {
            el.classList.remove('active');
        });

        btn.classList.add('active');

        pickedRating = btn.textContent;
    });
});



const errorMsg = document.getElementById('error-msg');

submitBtn.addEventListener('click', function() {
    if (pickedRating > 0) {
        scoreDisplay.textContent = pickedRating;
        cardRating.classList.add('hidden');
        cardThankYou.classList.remove('hidden');
    } else {
        
        errorMsg.classList.remove('hidden');
        
       
        setTimeout(function() {
            errorMsg.classList.add('hidden');
        }, 3000);
    }
});


const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', function() {
    cardThankYou.classList.add('hidden');

    cardRating.classList.remove('hidden');
    
    pickedRating = 0;

    ratingBtns.forEach(function(el) {
        el.classList.remove('active');
    });
});