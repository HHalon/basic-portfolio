const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error!');
    }
  };
  
  const getCompChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice , compChoice) => {
    if (userChoice === compChoice){
      return 'Game is a tie! Try again!';
    }
    
    if(userChoice === 'rock'){
      if (compChoice === 'paper'){
        return 'Computer won!';
      }else{
        return ' You won!';
      }
    }
    
    if(userChoice === 'paper'){
      if (compChoice === 'scissors'){
        return 'Computer won!';
      }else{
        return ' You won!';
      }
    }
    
     if(userChoice === 'scissors'){
      if (compChoice === 'rock'){
        return 'Computer won!';
      }else{
        return ' You won!';
      }
    }
    
    if(userChoice === 'bomb'){
      if (compChoice === 'rock' || 'paper' || 'scissors')
        return 'You won, but you cheated.'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const compChoice = getCompChoice();
    console.log('You threw ' + userChoice);
    console.log('The computer threw ' + compChoice);
    console.log(determineWinner(userChoice , compChoice));
  };
  
  playGame()