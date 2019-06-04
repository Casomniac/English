import React, {Component} from 'react'
import {MenuItemContainer} from "../../../styles/Style"
import '../../../style.css'

export const MenuItem = ({icon, text}) => (
    <React.Fragment>
        {icon ? (
            <MenuItemContainer>
                <i className={icon} style={{color: '#1d1d1d',fontSize: '1.25rem', width: '1.5rem'}}/>
                <span className='menu-item-text'>{text}</span>
            </MenuItemContainer>

        ): (
            <MenuItemContainer>
                <span className='menu-item-text' style={{paddingLeft: '2.5rem'}}>{text}</span>
            </MenuItemContainer>
        )}
    </React.Fragment>
)
