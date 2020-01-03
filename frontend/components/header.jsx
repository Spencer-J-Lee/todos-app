import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.resetState = this.resetState.bind(this);
  }

  render() {
    return (
      <header className="header">
        <small>Todo App</small>
        
        <button 
          className="reset"
          onClick={this.resetState}>
            Reset
        </button>
      </header>
    );
  }

  resetState(event) {
    event.preventDefault();
    window.localStorage.clear();
    location.reload();
  }
}

export default Header;
