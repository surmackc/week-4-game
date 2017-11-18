$(document).ready(function() {
// make sure our document is loaded and then generate random # at start of game b/w 19-120.
      var numberToGet = Math.floor((Math.random() * 120) + 19);

$('#score').text(numberToGet);
// apply our random number to the score div id


// set our random crystal numbers
      var crystalNumber1 = Math.floor((Math.random() * 12) + 1);
      var crystalNumber2 = Math.floor((Math.random() * 12) + 1);
      var crystalNumber3 = Math.floor((Math.random() * 12) + 1);
      var crystalNumber4 = Math.floor((Math.random() * 12) + 1);
// set our players score and wins/loses to zero
      var playersScore = 0;
      var wins = 0;
      var losses = 0;



// our winner function, if our player's score equals our number to get we increase our wins by one, 
// add the win to the win counter and alert the player "You won!" and we run our game reset function
function winner(){
  if (playersScore === numberToGet);
  wins++;
  $('#wins').text("Wins: " + wins);
  alert('You won!');
  reset();
}

// our loser function, if the player's score is greater than our number to get, they lose!  And we run our game reset function
function loser(){
  if (playersScore > numberToGet);
  losses++;
  $('#losses').text("Losses: " + losses);
  alert('You lose!');
  reset();
}

//our click event for our crystals, on click we take the crystal number and continue adding it to player's score.
// if our players score equals number to get we run our winner function, else if their score goes over, they lose!
  $('#crystal-1').on('click', function(){
    playersScore = playersScore + crystalNumber1;
    $('#players-score').text(playersScore);

      if (playersScore === numberToGet) {
        winner();
      }

      else if (playersScore > numberToGet){
        loser();
      }
      console.log(crystalNumber1);

  })

  $('#crystal-2').on('click', function(){
    playersScore = playersScore + crystalNumber2;
    $('#players-score').text(playersScore);

      if (playersScore === numberToGet) {
        winner();
      }

      else if (playersScore > numberToGet){
        loser();
      }

  })

  $('#crystal-3').on('click', function(){
    playersScore = playersScore + crystalNumber3;
    $('#players-score').text(playersScore);

      if (playersScore === numberToGet) {
        winner();
      }

      else if (playersScore > numberToGet){
        loser();
      }

  })

  $('#crystal-4').on('click', function(){
    playersScore = playersScore + crystalNumber4;
    $('#players-score').text(playersScore);

      if (playersScore === numberToGet) {
        winner();
      }

      else if (playersScore > numberToGet){
        loser();
      }

  })

// our reset function, we generate new random numbers as well as reset our players score but not our wins/losses scoreboard
  function reset(){
  numberToGet = Math.floor((Math.random() * 120) + 19);
  $('#score').text(numberToGet);
  crystalNumber1 = Math.floor((Math.random() * 12) + 1);
  crystalNumber2 = Math.floor((Math.random() * 12) + 1);
  crystalNumber3 = Math.floor((Math.random() * 12) + 1);
  crystalNumber4 = Math.floor((Math.random() * 12) + 1);
  playersScore = 0;
  $('#players-score').text(playersScore);
  
  }

  


});








