import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {SideMenuContainer, Avatar, MenuList} from "../../../styles/Style";
import {MenuItem} from "./MenuItem";


export class SideMenu extends Component{

    render(){
      let {firstName, lastName, level} = this.props;
      console.log(firstName)
        return(
           <SideMenuContainer>
               <div>
                   <Avatar theme={{width: '4rem', height: '4rem'}} src={this.props.avatar} alt='avatar'/>
               </div>
               {typeof(firstName) === 'undefined' ?
                 <span className='side-menu-fullName'>Незнакомец</span> :
                 <span className='side-menu-fullName'>{firstName} {lastName}</span>
               }
              {level ?
                <span className='side-menu-rank'>{level}</span>:
                <span className='side-menu-rank'>Пройдите тест, чтобы узнать свой уровень</span>
              }
               <MenuList>
                   <Link to='/' className='link_nav'>
                        <MenuItem
                                icon='fas fa-gamepad'
                                text='игры'
                        />
                   </Link>
                   <Link to='/Game1' className='link_nav'>
                        <MenuItem text='скорость'/>
                   </Link>
                   <Link to='/Game2' className='link_nav'>
                         <MenuItem text='быстрота'/>
                   </Link>
                   <Link to='/Game3' className='link_nav'>
                        <MenuItem text='еще'/>
                   </Link>
                   <Link to='/Test' className='link_nav'>
                        <MenuItem
                           icon='fas fa-tasks'
                           text='Тест'/>
                   </Link>
               </MenuList>
           </SideMenuContainer>
        )
    }
}