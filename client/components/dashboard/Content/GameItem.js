import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {GameWrapper} from "../../../styles/Style";

export const GameItem = ({color, logoColor, shadow, insetShadow, img, logo, name, left=false, right=false}) =>
            <GameWrapper color={color}
                         logoBorderColor={logoColor}
                         shadow={shadow}
                         insetShadow={insetShadow}>
                <div className={left ? 'card left' : right ? 'card right' : 'card'}>
                    <div className='card-info-top'>
                        <div className='card-info-logo-wrapper'>
                            <img className='card-info-logo' src={logo}/>
                        </div>
                        <span className='card-info-name'>{name}</span>
                    </div>
                    <div className='card-info-bottom'>
                        <Link to={name === 'SCORE! HERO' ? '/Game1' : name === 'Moto Rider' ? '/Game2' : '/Game3'}
                              className='card-info-learn-more'>Играть</Link>
                    </div>
                    <img className='card-img' src={img}/>
                </div>
            </GameWrapper>
