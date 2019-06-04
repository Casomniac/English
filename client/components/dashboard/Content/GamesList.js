import React, {Component} from 'react'
import {GamesListContainer} from "../../../styles/Style";
import {GameItem} from "./GameItem";
import imgOne from '../../../images/rugby.png'
import imgTwo from '../../../images/moto.png'
import imgThree from '../../../images/car.png'
import logoOne from '../../../images/ScoreHero.png'
import logoTwo from '../../../images/MotoRider.png'
import logoThree from '../../../images/RacingFever.png'

export class GamesList extends Component {
    render() {
        return (
            <React.Fragment>
                <GamesListContainer>
                    <GameItem img={imgOne}
                              logo={logoOne}
                              name={'SCORE! HERO'}
                              left={true}
                              color={'#03a9f4'}
                              logoColor={'#7cdef3'}
                              shadow={'0, 200, 252, 0.24'}
                              insetShadow={'156, 253, 229, 0.9'}/>
                    <GameItem img={imgTwo}
                              logo={logoTwo}
                              name={'Moto Rider'}
                              color={'#7c4dff'}
                              logoColor={'#d3abff'}
                              shadow={'124, 77, 225, 0.24'}
                              insetShadow={'203, 133, 254, 0.9'}/>
                    <GameItem img={imgThree}
                              logo={logoThree}
                              name={'Racing Fever'}
                              right={true}
                              color={'#3d5ffe'}
                              logoColor={'#88befe'}
                              shadow={'61, 90, 254, 0.24'}
                              insetShadow={'61, 151, 252, 0.9'}/>
                </GamesListContainer>
            </React.Fragment>
        )
    }
}