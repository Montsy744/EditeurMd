import React from 'react';
import './App.css';
import { marked } from 'marked';

import { sampleText } from './sampleTexte';

class App extends React.Component {
  state = {
    text: sampleText,
  }

  componentDidMount() {
    const text = localStorage.getItem('text');
    if (!text) {
      this.setState({ text: sampleText });
    } else {
      this.setState({ text });
    }
  }

  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem('text', text);
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  renderText = texte => {
    const __html = marked(texte, {sanitize: true});
    return { __html };
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Markdown Previewer</h1>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <textarea
            onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35"
            >

          </textarea>
        </div>

          <div className="col-sm-6">
            <div 
            id='preview'
            dangerouslySetInnerHTML={this.renderText(this.state.text)} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
