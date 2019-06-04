import React, { Component } from 'react';
import queryString from 'query-string';
import {Modal} from './components/dashboard/Popup/popup';
import './style.css';
import {Dashboard} from "./components/dashboard";
import {MainBackground} from "./styles/Style";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {open: true}
    }

    componentDidMount(){
      fetch("/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          console.log(responseJson)
          this.setState({
            open: !responseJson.user.authorized,
            img: responseJson.user.img,
            firstName: responseJson.user.userFirstName,
            lastName: responseJson.user.userLastName,
            level: responseJson.user.userLevel,
            userId: responseJson.user.userId
          });
        })
        .catch(error => {
          this.setState({
            open: true
          });
        });
    }

    getEnglishLevel = (result) => {
      fetch(`test/result/?${queryString.stringify({
        userId: this.state.userId,
        level: result,
      })}`, {
        method: "GET",
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({level: responseJson.level})
        })
    }

    handleNotAuthenticated = () => {
      this.setState({open: true})
    }

    handleSignInClick = () => {
      window.open("http://localhost:9000/auth/vkontakte", "_self")
    }

    handleLogOutClick = () =>{
      window.open("http://localhost:9000/auth/logout", "_self");
    }

  render() {
    let {img, firstName, lastName, level} = this.state;
    return (
        <React.Fragment>
            <Modal open={this.state.open}
                   onClick={this.handleSignInClick}
                  />
            <MainBackground>
              <Dashboard avatar={img}
                         firstName={firstName}
                         lastName={lastName}
                         level={level}
                         getLevel={this.getEnglishLevel}
                         logOut={this.handleLogOutClick}/>
            </MainBackground>
          <div className='footer'></div>
        </React.Fragment>
    )
  }
}

export default App
