import styled from 'styled-components'
import img from '../images/mainBackground.png'

export const MainBackground = styled.div` 
    background: url(${img}) center center/cover no-repeat;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 1px 7px 0px rgba(49, 49, 49, 0.08);
    padding: 0.75rem 2rem;
    position: relative;
    
`
export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
`
export const Circle = styled.span`
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: 0 0.25rem;
    background-color: ${props=> props.theme.color};
`
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    
`
export const Avatar = styled.img`
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    border-radius: 50%;
`
export const Wrapper = styled.div`
    max-width: 1400px;
    width: 95%;
`
export const Footer =styled.div`
    flex: 0 0 auto;
`
export const MainContainer = styled.div`
    display:flex;
`
export const DashboardContainer = styled.div`
    height: 541px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 18px 43.07px 15.93px rgba(27, 0, 34, 0.28);
`
export const SideMenuContainer = styled.div`
    display: inline-flex;
    width: 15%;
    max-width: 210px;
    flex-direction: column;
    text-align: center;
    background-color: #f9fbfc;
    padding: 2.25rem 0 2.25rem 0;
`
export const MenuList = styled.nav`
    display: flex;
    flex-direction: column;
    .link_nav{
        text-decoration: none;
    }
`
export const MenuItemContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 3rem 0.75rem 2rem;
    cursor: pointer;
    &::after{
        position: absolute;
        content: '';
        height: 100%;
        width: 0.16rem;
        background-color: transparent;
        left: 0;
        top: 0;
        transition: .3s ease-in-out;
    }
    &::before{
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: transparent;
        width: 0;
        transition: .3s ease-in-out;    
    }
    &:hover {
        ::after{
            background-color: #f50057;
        }
        ::before{
            width: 100%;
            background: linear-gradient(to right, rgba(245,0,87,0.21) 0%,rgba(245,0,87,0.21) 1%,rgba(245,0,87,0.15) 50%,rgba(245,0,87,0.15) 52%,rgba(245,0,87,0.08) 100%)    
        }
    }
`
export const ContentContainer = styled.div`
    width: 85%;
    position: relative;
    max-width: 1190px;
    background-color: #f3f7f9;
    padding: 0 2.25rem;
`
export const TestWrapper = styled.div`
    height: 100%;
    .progress-wrapper{
        display:flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
    }
    .progress-container{
        width: 200px;
        height: 50px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        border-radius: 5px;
        background-color: #e84c3d;
    }
    .progress-content{
        display: flex;
        flex-direction: column;
    }
   .counter-container{
        position: relative;
        width: 200px;
        height: 200px;
   }
   #counter{
       position: relative;
       z-index: 1;
   }
   .circle{
        width: 165px;
        height: 165px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: transparent;
   }
   .result{
        padding-left: 60px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
   }
   .result__value{
    font-size: 20px;
    font-weight: 700;
   }
`
export const ScrollWrapper = styled.div`
    width: 70%;
    padding: 1.5rem 0;
    position: absolute;
    top: 0;
    bottom: 0;
    .text{
        white-space: pre-wrap;
        user-select: none;
        line-height: 1.75;
        padding-right: 1.5rem;
        margin-top: 0;
        .word{
            cursor: pointer;
            display: inline-block;
        }
        .chosen{
            position: relative;
            text-shadow: 0 0 20px #ff005b;
        }
        .chosen::after{
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            color: #ff005b;
        }
        .chosen::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fe3a80;
            opacity: .5;
            filter: blur(40px);
        }
    }
`
export const  ResultWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    margin: 0 auto;
`
export const GamesListContainer = styled.div`
    display: flex;
`
export const GameWrapper = styled.div`
     flex-basis: 33.4%;
    .card{
        position: relative;
        height: 0;
        padding-top: 55.5%;
        background-color: ${props=>props.color};
        box-shadow: 4px 7px 13px 0px rgba(${props=>props.shadow}), inset 4px -50px 70px -30px rgba(${props=>props.insetShadow}); 
        margin: 0 15px
    }
    .card.right{
       margin: 0 0 0 30px;
    }
     .card.left{
        margin: 0 30px 0 0;
    }
    .card-info-top{
        position: absolute;
        top: 0;
        margin-left: 0.9rem;
        margin-top: 1.25rem;
        display: inline-flex;
        align-items: center;
    }
    .card-info-logo-wrapper{
        width: 2.5 rem;
        height: 2.5rem;
        border: 0.125rem solid ${props=>props.logoBorderColor};
        border-radius: 50%;
    }
    .card-info-name{
        padding-left: 0.5rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #ffffff;
    }
    .card-info-bottom{
        position: absolute;
        bottom: 0;
        margin-left: 0.9rem;
        margin-bottom: 1.25rem;
        color: #ffffff;
        font-size: 0.8rem;
    }
    .card-info-learn-more{
        cursor: pointer;
        position: relative;
         color: #ffffff;
        &::after{
            position: absolute;
            bottom: -0.125rem;
            left: 0;
            content: '';
            width: 100%;
            height: 0.08rem;
            background-color: #ffffff;
            transition: .3s
        }
        :hover{
            ::after{
                transform: scaleX(0)
            }
        }
    }
    .card-img{
        position: absolute;
        right: -2rem;
        bottom: 0; 
    }
`
export const ModalPopUp = styled.div`
    .modal__header{
        position: relative;
        background-color: #ffffff;
        box-shadow: 0px 1px 7px 0px rgba(49,49,49,0.08);
        padding: 24px 0px 20px;
        border-radius: 10px 10px 0px 0px;
        
        
        h4{
            color: #000000;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
        }
    }
    .modal-content{
        display: flex;
        justify-content: center;
        background-color: #f3f7f9;
        padding: 36px 0 30px;
        border-radius: 0px 0px 10px 10px;
       
        
        .modal-content__link{
            display: inline-block;
            width: 114px;
            height: 110px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 28px;
            border-radius: 16px;
            padding: 10px 14px;
            cursor: pointer;
            transition: all 0.3s ease 0s
        }
        
        .modal-content__link_vk{
            background: rgb(89, 125, 163);
        }
        
        .modal-content__link:hover{
            box-shadow: none;
        }
        .authorisation__vk{
            width: 100%;
            height: 100%;
            fill: #ffffff
        } 
       
    }
    
`

