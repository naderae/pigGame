

var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice;
// if you create this variable outside, you have access to it every time this event occurs.

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;


    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';

    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    }else if(dice !== 1){
      roundScore += dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore
    }else{
    nextPlayer();
    }
    lastDice = dice;
  }
});




document.querySelector('.btn-hold').addEventListener('click', function(){
if (gamePlaying) {
  scores[activePlayer] += roundScore

  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  var input = document.querySelector('.final-score').value // .value gives you the value that was inputed into the field
  var winningScore;

  if (input) {
    winningScore = input;
  }else{
    winningScore = 100;
  }
  if (scores[activePlayer] >= winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'winner!';
    document.querySelector('.dice1').style.dislplay = 'none';
    document.querySelector('.dice2').style.dislplay = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    nextPlayer();
  }
}


});




function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  // same as if(activePlayer === 0){activePlayer=1}else{activePlayer=0}
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  // with toggle, if active isnt there, it will add, if it is, it will remove it.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice1').style.dislplay = 'none';
  document.querySelector('.dice2').style.dislplay = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);


function init (){
  scores = [0,0]
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-1').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');

  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');




}
