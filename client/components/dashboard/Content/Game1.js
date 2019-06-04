import React, { Component } from 'react'


export class Game1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            words: false
        }
    }

    shuffle = (arr) => {
      arr.sort((a, b) =>{
        return Math.random() - 0.5;
      })
      return arr;
    }

    handleNext = () => {
      let arr = this.shuffle(this.state.words);
      let words = this.getRandom(arr, 4);
      let learnWord = words[Math.floor(Math.random() * 3)];
      learnWord = learnWord.word_id !== this.state.selectedWord ? learnWord :
        words[0].word_id !== this.selectedWord ? words[0] : words[1];
      this.setState({
        learnWords: words,
        learnWord: learnWord,
        endStep: false,
        selectedWord: null,
      })
    }

    selectWord = (id) => {
      this.setState({
        selectedWord: id,
        endStep: true
      })
    }

    startLearn = () => {
      let words = this.getRandom(this.state.words, 4);
      this.setState({
        start: true,
        learnWords: words,
        learnWord: words[Math.floor(Math.random() * 3)]
      });
    }

    getRandom = (arr, n) => {
      let result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError('Больше элементов, чем есть требуется');
      while (n--){
        let x  = Math.floor(Math.random() * len);
        if (result.includes(arr[taken[x]])){
          taken[x] = --len;
          result[n] = arr[x in taken ? taken[x] : x];
        } else {
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
      }
      return result;
    }

    startGame = () =>{
        fetch('/games/game1', {
            method: 'GET'
        })
          .then(response => {
            if (response.status === 200) return response.json();
            throw new Error("failed to get the words");
          })
          .then(responseJson => {
            this.setState({
              words: responseJson
            });
          })
    }

  render() {
    const {words, start, learnWords, learnWord, selectedWord, endStep} = this.state;
    return (
      <React.Fragment>
        {!words ?
          <div className='table-container'>
            <button className='button button_start' onClick={this.startGame}>
              Начать игру
            </button>
          </div>:
          !start ?
            <div className='table-container'>
                <table className='table_words'>
                    <thead>
                        <tr className='table__row'>
                          <th className='table__header'>Слово</th>
                          <th className='table__header'>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                    {words.map((item) =>{
                      return [
                        <tr key={item.word_id} className='table__row'>
                          <td className='table__item'>{item.word}</td>
                          <td className='table__item'>{item.word_translation}</td>
                        </tr>
                        ]
                      })}
                    </tbody>
                </table>
                <button className='button' onClick={this.startLearn}>Выучить эти слова</button>
            </div> :
            <div className='game-container'>
              <div className='game-top'>
                <div className='game__learn-word'>{learnWord.word_translation}</div>
                {endStep ? <button className='next-button' onClick={this.handleNext}>Далее</button> :''}
                <div className='game__hint'>Выберите верное слово</div>
              </div>
              <div className={endStep ? 'words words_end' : 'words'}>
                {learnWords.map((item, index) =>{
                  return [
                     <div key={item.word_id}
                          className={selectedWord === learnWord.word_id &&
                                      selectedWord === item.word_id || endStep && learnWord.word_id === item.word_id ?
                            'word word_right ' :
                            selectedWord !== learnWord.word_id && selectedWord === item.word_id ? 'word word_wrong':
                            'word'
                          }
                          onClick={() => this.selectWord(item.word_id)}>
                       <span className='word__index'>{index + 1}.</span>
                       <span className='word__val'>{item.word}</span>
                     </div>
                    ]
                })}
              </div>
            </div>
        }

      </React.Fragment>
    )
  }
}