import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from "./Header/Header"
import {Wrapper, Footer, DashboardContainer, MainContainer, ContentContainer} from "../../styles/Style"
import {SideMenu} from "./SideMenu/SideMenu"
import {Content} from "./Content/Content"
import {Game1} from "./Content/Game1"
import {Game2} from "./Content/Game2"
import {Game3} from "./Content/Game3"
import {Test} from "./Content/Test"


export class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            authorized: true
        }
    }

    componentDidMount(){
    }

    render(){
        return(
            <React.Fragment>
                <Wrapper>
                    <DashboardContainer>
                        <Header avatar={this.props.avatar}
                                firstName={this.props.firstName}
                                logOut={this.props.logOut}/>
                        {this.state.authorized
                            ?<MainContainer>
                                <SideMenu avatar={this.props.avatar}
                                          firstName={this.props.firstName}
                                          lastName={this.props.lastName}
                                          level={this.props.level}/>
                                <ContentContainer>
                                    <Switch>
                                        <Route exact path='/' component={Content}/>
                                        <Route exact path='/Game1' component={Game1}/>
                                        <Route exact path='/Game2' component={Game2}/>
                                        <Route exact path='/Game3' component={Game3}/>
                                        <Route exact path='/Test' render={()=><Test getLevel={this.props.getLevel}/>}/>
                                    </Switch>
                                </ContentContainer>
                              </MainContainer>
                            : <MainContainer>
                                <ContentContainer>
                                </ContentContainer>
                            </MainContainer>
                        }
                    </DashboardContainer>
                    <Footer/>
                </Wrapper>
            </React.Fragment>
        )
    }
}