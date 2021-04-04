
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');


//FORM SUBMITTING
formi.addEventListener('submit', e => {
    e.preventDefault();
   

});



//RADIOS BUTTON GETTING VALUE ON CLICK
inputs.addEventListener('click', e => {
    e.preventDefault();
    function getCheckedValue(radios) {
        
    }


    });

    //the window object //scroll on top automatique
    scrollTo(0,0);

   //Code to animate the speed of the Score
    const result = document.querySelector('.result');
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent=`${output}%`;
        if(output === score){

            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 20);

