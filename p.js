
class Pendu extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick(this)
      this.state = {
        word: null,
        result: new Map(),
        clavier: [
          {letter: 'A', checked: false},
          {letter: 'B', checked: false},
          {letter: 'C', checked: false},
          {letter: 'D', checked: false},
          {letter: 'E', checked: false},
          {letter: 'F', checked: false},
          {letter: 'G', checked: false},
          {letter: 'H', checked: false},
          {letter: 'I', checked: false},
          {letter: 'J', checked: false},
          {letter: 'K', checked: false},
          {letter: 'L', checked: false},
          {letter: 'M', checked: false},
          {letter: 'N', checked: false},
          {letter: 'O', checked: false},
          {letter: 'P', checked: false},
          {letter: 'Q', checked: false},
          {letter: 'R', checked: false},
          {letter: 'S', checked: false},
          {letter: 'T', checked: false},
          {letter: 'U', checked: false},
          {letter: 'V', checked: false},
          {letter: 'W', checked: false},
          {letter: 'X', checked: false},
          {letter: 'Y', checked: false},
          {letter: 'Z', checked: false}
        ]
      }
    }
    
    render() {
      let wordToFind = this.state.word;
      let clavierToDisplay = this.state.clavier;
  
      if(wordToFind === null) {
        wordToFind = getWord();
        this.state.word = wordToFind;
        var chars = wordToFind.split('');
        console.log(chars);    
      }
      
      var letters = chars.map((item, i) => {
        return (
          <span key={i} value={item}>
            {item}
          </span>
        );
      });
      
      handleClick (i) {
        //console.log(e.target);
        //let letterCurrentInd = e.target.id;
        //console.log(letterCurrentInd);
        //change l'état local de clavier
        //this.state.clavier[i]['checked'] = true;
      }
      
      const clav = clavierToDisplay.map((item, i) => {
          return (
              <span id={item.i} onClick={() => this.handleClick(i)} className="addSpaceBetweenLetters" key={i} value={item.letter}>
                  {item.letter}
                  {i === 12 && <br />}
              </span>
          )
      });
  
      return (
        <div>    
          <h4>Mot à trouver !</h4>
          {computeDisplay(this.state.word, this.state.result)}
          <div className="margeduhaut">{clav}</div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Pendu />,
    document.getElementById('root')
  );
  
   function getWord() {
      var words = ['ROCK', 'PAPER', 'SCISSOR'];
      var word = words[Math.floor(Math.random()*words.length)];
      return word;
    }
  
  function computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : ' _ ')
    )
  }