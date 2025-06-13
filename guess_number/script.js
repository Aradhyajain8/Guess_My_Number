var number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//display message
const display_msg = function (message){
    document.querySelector('.message').textContent = message;
} 

document.querySelector('#button').addEventListener('click',function check(){
    let user_value = Number(document.querySelector('#input').value);

    // no. is b/w 1 to 20
    if(user_value >0 && user_value <21){
        if(user_value === number){
            display_msg('Correct guess 🥳');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('#question_mark').textContent = number;
            document.querySelector('#question_mark').style.fontSize = '60px';

            if(score >highScore){
                highScore = score;
                document.querySelector('.curr_highscore').textContent = highScore;
            }
            
        }
        else if(user_value !== number) {
            if(score > 1){
            display_msg(user_value < number?'too low' : 'too high');
            score--;
            document.querySelector('.curr_score').textContent = score;
            }
            else{
                display_msg('you lost the game 😢');
                document.querySelector('.curr_score').textContent = 0;
            }
        }
        
    }
    else if(!user_value){
        display_msg('Not a Number');
        return;

    }
    //if number is less than 1 or greater than 20
    else{
        display_msg('Wrong number ☠️');
        document.querySelector('body').style.backgroundColor= '#ff0000';
        return;
    }

//enter button functionality
document.querySelector('#input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#button').click();
    }
});
    
    
});

document.querySelector('#again').addEventListener('click',function startAgain(){
    score=20;
    document.querySelector('.curr_score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = 'rgba(17, 14, 14, 0.831)';
    display_msg('Start guessing...')
    document.querySelector('#question_mark').textContent = '?';
    document.querySelector('#question_mark').style.fontSize = '60px';
    document.querySelector('#question_mark').style.fontWeight = '900';
    document.querySelector('#input').value = '';

});