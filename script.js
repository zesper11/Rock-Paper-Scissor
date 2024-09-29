
//0-1 = Rock
//1-2 = Paper
//2-3 = Scissor

document.querySelector('.Rock').addEventListener('click', function() {
    let randomnum = Math.random() * 3;
    if(randomnum > 0 && randomnum <= 1){
        let user = 'Rock'
        let rbt = 'Rock'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Tie`)
    }
    else if (randomnum > 1 && randomnum <= 2){
        let user = 'Rock'
        let rbt = 'Paper'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for computer`)
    }
    else{
        let user = 'Rock'
       let rbt = 'Scissor' 
       alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for you`)
    }
});

document.querySelector('.Paper').addEventListener('click', function() {
    let randomnum = Math.random() * 3;
    if(randomnum > 0 && randomnum <= 1){
        let user = 'Paper'
        let rbt = 'Rock'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for you`)
    }
    else if (randomnum > 1 && randomnum <= 2){
        let user = 'Paper'
        let rbt = 'Paper'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Tie`)
    }
    else{
        let user = 'paper'
       let rbt = 'Scissor' 
       alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for computer`)
    }
});

document.querySelector('.Scissor').addEventListener('click', function() {
    let randomnum = Math.random() * 3;
    if(randomnum > 0 && randomnum <= 1){
        let user = 'Scissor'
        let rbt = 'Rock'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for computer`)
    }
    else if (randomnum > 1 && randomnum <= 2){
        let user = 'Scissor'
        let rbt = 'Paper'
        alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Win for you`)
    }
    else{
        let user = 'Scissor'
       let rbt = 'Scissor' 
       alert(`Computer Choosed ${rbt} you choosed ${user} soo its a Tie`)
    }
});
