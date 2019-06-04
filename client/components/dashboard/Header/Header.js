import React, {Component} from 'react'
import {HeaderContainer, HeaderLeft, Circle, HeaderRight, Avatar} from "../../../styles/Style";
import '../../../style.css'

export const Header = ({avatar, firstName, logOut}) => {
    return(
        <React.Fragment>
            <HeaderContainer>
                <HeaderLeft>
                    <div>
                        <Circle theme={{color:'#7c4dff'}}/>
                        <Circle theme={{color:'#a8a8a8'}}/>
                        <Circle theme={{color:'#1de9b6'}}/>
                    </div>
                    <span className='header_left'>MODERNO</span>
                </HeaderLeft>
                <HeaderRight>
                    <div>
                        <Avatar theme={{width: '2rem', height: '2rem'}} src={avatar} alt='avatar'/>
                    </div>
                  {typeof(firstName) === 'undefined' ?
                    <div>
                        <span className='avatar-greetings'>Привет, незнакомец</span>
                    </div>:
                    <div>
                      <span className='avatar-greetings'>Привет, {firstName}</span>
                      <button className='button button_log-out' onClick={logOut}>
                        <span>Выйти</span>
                      </button>
                    </div>

                  }
                </HeaderRight>
            </HeaderContainer>
        </React.Fragment>
    )
}

