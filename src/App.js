import React, { Component } from 'react';
import './App.css';
import Twit from "twit";



var T = new Twit({
consumer_key: 's9XnKnMLHYJN1K3WjoARUTMEg',
consumer_secret: 'xsy4stwAMSlpC4Zyh01GIvfFt5gugcMVMh1F4tuGx2K3rAL3sg ',
access_token:         '1052166984333430786-J7QlgW6XyWdNK88gypacrvuMvQq0ul ',
access_token_secret:  'ksfy8ZoXsde0okPau29WOREfreinQHBrTKXVBNrr3nUWQ',
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.  strictSSL:            true,     // optional - requires SSL certificates to be valid.

});

T.get('search/tweets', { q: 'test', count: 1 }, gotData);

function gotData(err, data, response) {
  console.log(data)
return data
};

var x = gotData();
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p> {x}  </p>
        </header>
      </div>
    );
  }
}

export default App;
