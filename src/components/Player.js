
import React, {PureComponent} from 'react';
import Counter from './Counter';
import Highscore from './Highscore';

class Player extends PureComponent {
  render(){
    const {
      name,id,score,index,removePlayer,changeScore,highScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick = {() => removePlayer(id)}>✖</button>
          <Highscore 
          highScore ={highScore} />
          { name }
        </span>
  
        <Counter 
        index={index}
        score={score}
        changeScore = {changeScore}
        /> 
      </div>
    );

  }

}


 
  

  export default Player;
  