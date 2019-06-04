import React, {Component} from 'react'
import {GamesList} from "./GamesList"
import '../../../style.css'

export class Content extends Component{
    render(){
        return(
           <React.Fragment>
               <p className='content-subheading'>Не упустите</p>
               <p className='content-heading'>Словарные тренировки</p>
               <GamesList/>
           </React.Fragment>
        )
    }
}