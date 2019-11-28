import React, { Component } from 'react';


class Local extends Component {
        person = { user: '',
        rememberMe: false
      };
      state = {person: this.person};

      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        const {person} = this.state;
        this.setState({person:{ ...person , [input.name]: value }});
      };
     
      handleFormSubmit = () => {
        // const { user, rememberMe } = this.state.person;
        localStorage.setItem('person', JSON.stringify(this.state.person));
      
      // localStorage.setItem('rememberMe', rememberMe);
      // localStorage.setItem('user', rememberMe ? user : '');
    };
     //get from local stoage
    componentDidMount() {
      const person = JSON.parse(localStorage.getItem('person'));
      this.setState({person});

        // const rememberMe = localStorage.getItem('rememberMe') === 'true';
        // const user = rememberMe ? localStorage.getItem('user') : '';
        // this.setState({person:{ user, rememberMe }});
      }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    User: <input name="user" value={this.state.person.user} onChange={this.handleChange} />
                </label>
                <label>
                    <input name="rememberMe" checked={this.state.person.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
      </label>
                <button type="submit">Sign In</button>
                <h1 name = 'user'> Hello  {this.state.person.user} ! </h1>
            </form>

        );
    }
}



export default Local;
