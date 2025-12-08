let score = JSON.parse(localStorage.getItem('score'));

        if (!score) {
        score = {Win: 0, Losses: 0, Ties: 0};
        }
        updatescore();

                
     
        function computermove(){
            const randomno=Math.random();
            let computer='';

            if(randomno>=0 && randomno<1/3){
                computer='Rock';
            }
            else if(randomno>=1/3 && randomno<2/3){
                computer='Paper';
            }
            else if(randomno>=2/3 && randomno<=1){
                computer='Scissor';
            }
            return computer;
        }
        function playgame(usermove){
            const comp=computermove();
            let result='';
            let moves='';
            if (usermove===comp){
                score.Ties++;
             
                result="Tie."
                
            }
            else if(usermove==='Rock'&& comp==='Scissor'|| usermove==='Paper'&& comp==='Rock'||
                    usermove==='Scissor'&& comp==='Paper')
                    {
                      score.Win++;
                    
                      result="You win."
                    }
            else{
                 score.Losses++;
               
                result="You lose."
            }
            localStorage.setItem('score',JSON.stringify(score));
            updatescore();
            document.querySelector('.result').innerHTML=`${result}`;
            moves=`You <img src="icons/${usermove}-emoji.png"> <img src="icons/${comp}-emoji.png"> Computer`;
            document.querySelector('.moves').innerHTML=`${moves}`;


        
           

        }
         function updatescore(){
            localStorage.setItem('score',JSON.stringify(score));
             document.querySelector('.scoreboard').innerHTML=`Win: ${score.Win}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }
        function Reset(){
            score.Losses=0;
            score.Ties=0;
            score.Win=0;
            localStorage.removeItem('score');
             document.querySelector('.scoreboard').innerHTML=`Win: ${score.Win}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }
