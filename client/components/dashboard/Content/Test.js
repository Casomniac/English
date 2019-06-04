import React, { Component } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Counter} from "./Counter"
import {TestWrapper,ScrollWrapper, ResultWrapper} from "../../../styles/Style"


export class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            complete: false,
            count: 0,
        }
        this.selectWord = this.selectWord.bind(this)
        this.endTest = this.endTest.bind(this)
    }

    componentDidMount(){
        let words = document.getElementsByClassName('word').length
        this.setState({words})
        this.getList()
    }

    getList = () => {
        //     .then(res => res.json())
        //     .then(list => {
        //         let arr = list.split('\n')
        //         let newArr = arr.map((item, index)=>{
        //             return item.split(' ')
        //         })
        //         newArr.splice(0, 1)
        //         let resultArr = newArr.map((item,index)=>{
        //             item.splice(1, 1)
        //             item.forEach((it, ind)=>{
        //                 if (it ==='!NEW!' || it ==='(TR!)') {
        //                     item.splice(ind, ind)
        //                 }
        //             })
        //             let english = item.splice(0,1)
        //             let str = item.join(' ')
        //             english.push(str)
        //
        //             return english
        //         })
        //         return resultArr
        //     })
        //     .then(result => {
        //         fetch('/test',{
        //             method: 'POST',
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(result)
        //         })
        //             .then(response =>{
        //             return response.text()
        //         })
        //             .then(myJson=>{
        //                 console.log(myJson)
        //             })
        //     })
    }

    selectWord(e){
        let text = document.querySelector('.text')
        let item = e.target
        if (item !== text){
            if (item.innerText.charAt(0) === '['){
                item.classList.remove('chosen')
                item.innerText = item.innerText.slice(1, -1)
                this.setState(prevState => {
                    return {count: prevState.count - 1}
                })
            } else {
                item.classList.add('chosen')
                item.innerText = `[${item.innerText}]`
                item.dataset.text = item.innerText
                this.setState(prevState => {
                    return {count: prevState.count + 1}
                })
            }
        }
    }

    endTest(){
        let unKnown = (this.state.count / this.state.words * 100).toFixed(2)
        let known = 100 - unKnown
        let result, level
        if (known <= 80){
            result = (1000/80 * (80 - known)).toFixed(0)
            result = (Math.round(result / 50) * 50)
            result < 1000 ? level='Beginner' : level='Elementary'
        }else if (known > 80 && known <= 95){
            result = (2000/15 * (known - 80) + 1000).toFixed(0)
            result = (Math.round(result / 50) * 50)
            level = 'Intermediate'
        } else if (known > 95 && known <= 98) {
            result = (2000/3 * (known - 95) + 3000).toFixed(0)
            result = (Math.round(result / 50) * 50)
            level = 'Upper-intermediate'
        } else if (known > 98 && known <= 99) {
            result = (5000 * (known - 98) + 5000).toFixed(0)
            result = (Math.round(result / 50) * 50)
            level = 'Advanced'
        } else {
            result = 10000
            level = 'Proficiency'
        }

        this.setState({
            complete: true,
            result: result,
            persentage: known
        },
          this.props.getLevel(level)
        )

    }
    render() {
        return (
            <React.Fragment>
                {!this.state.complete
                    ? <TestWrapper>
                        <ScrollWrapper>
                            <PerfectScrollbar>
                                <p onClick={this.selectWord} className="text"><span className="word">Blood</span> <span
                                    className="word">and</span> <span className="word">Earth</span>
                                    <span className="word"> In</span> <span className="word">his</span> <span
                                        className="word">book</span> <span className="word">Blood</span> <span
                                        className="word">and</span> <span className="word">Earth</span>,
                                    <span className="word"> Kevin</span> <span className="word">Bales</span> <span
                                        className="word">speaks</span> <span className="word">with</span> <span
                                        className="word">Ibrahim</span>,
                                    <span className="word"> a</span> <span className="word">23-year-old</span> <span
                                        className="word">slave</span> <span className="word">who</span>
                                    <span className="word"> has</span> <span className="word">worked</span> <span
                                        className="word">in</span> <span className="word">a</span> <span
                                        className="word">gold</span> <span className="word">mine</span>
                                    <span className="word"> since</span> <span className="word">he</span> <span
                                        className="word">was</span> <span className="word">nine</span>.
                                    <span className="word"> He</span> <span className="word">is</span> <span
                                        className="word">dying</span>.
                                    <span className="word"> His</span> <span className="word">lungs</span> <span
                                        className="word">are</span> <span className="word">filled</span>
                                    <span className="word"> with</span> <span className="word">liquid</span> <span
                                        className="word">caused</span> <span className="word">by</span>
                                    <span className="word"> the</span> <span className="word">dust</span> <span
                                        className="word">and</span> <span className="word">bacteria</span>
                                    <span className="word"> in</span> <span className="word">the</span> <span
                                        className="word">mine</span>.
                                    <span className="word"> As</span> <span className="word">their</span> <span
                                        className="word">conversation</span> <span className="word">ends</span>,
                                    <span className="word"> Ibrahim</span> <span className="word">turns</span> <span
                                        className="word">to</span> <span className="word">Kevin</span> <span
                                        className="word">Bales</span>
                                    <span className="word"> and</span> <span className="word">says</span>,'
                                    <span className="word"> I</span> <span className="word">want</span> <span
                                        className="word">to</span> <span className="word">be</span> <span
                                        className="word">remembered</span>.
                                    <span className="word"> When</span> <span className="word">my</span> <span
                                        className="word">story</span> <span className="word">is</span>
                                    <span className="word"> written</span> <span className="word">and</span> <span
                                        className="word">your</span> <span className="word">book</span>
                                    <span className="word"> is</span> <span className="word">ready</span>, <span
                                        className="word">will</span> <span className="word">you</span>
                                    <span className="word"> send</span> <span className="word">me</span> <span
                                        className="word">a</span> <span className="word">copy</span>?
                                    <span className="word"> I</span> <span className="word">want</span> <span
                                        className="word">to</span> <span className="word">show</span>
                                    <span className="word"> it</span> <span className="word">to</span> <span
                                        className="word">others</span>, <span className="word">to</span>
                                    <span className="word"> show</span> <span className="word">them</span> <span
                                        className="word">that</span> <span className="word">I</span>
                                    <span className="word"> am</span> <span className="word">not</span> <span
                                        className="word">completely</span> <span className="word">useless</span>.
                                    <span className="word"> I</span> <span className="word">just</span> <span
                                        className="word">want</span> <span className="word">to</span>
                                    <span className="word"> show</span> <span className="word">that</span> <span
                                        className="word">something</span> <span className="word">good</span>
                                    <span className="word"> can</span> <span className="word">come</span> <span
                                        className="word">out</span> <span className="word">of</span>
                                    <span className="word"> my</span> <span className="word">life</span>.'

                                    <span className="word"> So</span> <span className="word">what's</span> <span
                                        className="word">the</span> <span className="word">connection</span> <span
                                        className="word">to</span> <span className="word">you</span>?
                                    <span className="word"> As</span> <span className="word">you</span> <span
                                        className="word">read</span> <span className="word">this</span> <span
                                        className="word">article</span>,
                                    <span className="word"> you</span> <span className="word">are</span> <span
                                        className="word">probably</span> <span className="word">using</span> <span
                                        className="word">a</span> <span className="word">smartphone</span>,
                                    <span className="word"> tablet</span>, <span className="word">or</span> <span
                                        className="word">laptop</span>.
                                    <span className="word"> Each</span> <span className="word">device</span> <span
                                        className="word">requires</span> <span className="word">minerals</span> – <span
                                        className="word">including</span> <span className="word">gold</span>.
                                    <span className="word"> Perhaps</span> <span className="word">the</span> <span
                                        className="word">gold</span> <span className="word">in</span> <span
                                        className="word">your</span>
                                    <span className="word"> electronic</span> <span className="word">device</span> <span
                                        className="word">was</span> <span className="word">mined</span> <span
                                        className="word">by</span> <span className="word">slaves</span>.

                                    <span className="word"> Slavery</span> <span className="word">today</span>
                                    <span className="word"> According</span> <span className="word">to</span> <span
                                        className="word">the</span> <span className="word">Global</span> <span
                                        className="word">Slavery</span>
                                    <span className="word"> Index</span> <span className="word">2018</span>, <span
                                        className="word">over</span> <span className="word">40</span> <span
                                        className="word">million</span> <span className="word">people</span>
                                    <span className="word"> are</span> <span className="word">victims</span> <span
                                        className="word">of</span> <span className="word">modern</span> <span
                                        className="word">slavery</span>,
                                    <span className="word"> and</span> <span className="word">of</span> <span
                                        className="word">these</span>,
                                    <span className="word"> 15</span> <span className="word">million</span> <span
                                        className="word">are</span> <span className="word">in</span> <span
                                        className="word">forced</span> <span className="word">marriage</span>.
                                    <span className="word"> Slavery</span> <span className="word">involves</span> <span
                                        className="word">violence</span>,
                                    <span className="word"> physical</span> <span className="word">or</span> <span
                                        className="word">psychological</span>, <span className="word">and</span> <span
                                        className="word">control</span>–
                                    <span className="word"> often</span> <span className="word">in</span> <span
                                        className="word">the</span> <span className="word">form</span> <span
                                        className="word">of</span>
                                    <span className="word"> threats</span> <span className="word">in</span> <span
                                        className="word">order</span> <span className="word">to</span> <span
                                        className="word">generate</span> <span className="word">profit</span>.
                                    <span className="word"> To</span> <span className="word">quote</span> <span
                                        className="word">Kevin</span> <span className="word">Bales</span>,'
                                    <span className="word"> Slavery</span> <span className="word">is</span> <span
                                        className="word">when</span> <span className="word">one</span> <span
                                        className="word">person</span> <span className="word">controls</span>
                                    <span className="word"> another</span>, <span className="word">uses</span> <span
                                        className="word">violence</span> <span className="word">to</span> <span
                                        className="word">maintain</span>
                                    <span className="word"> that</span> <span className="word">control</span> <span
                                        className="word">and</span> <span className="word">exploits</span> <span
                                        className="word">them</span> <span className="word">economically</span>.'
                                    <span className="word"> This</span> <span className="word">violence</span> <span
                                        className="word">may</span> <span className="word">be</span> <span
                                        className="word">physical</span> <span className="word">and</span>/
                                    <span className="word"> or</span> <span className="word">psychological</span>, <span
                                        className="word">and</span> <span className="word">the</span> <span
                                        className="word">control</span> <span className="word">may</span>
                                    <span className="word"> be</span> <span className="word">verbal</span> <span
                                        className="word">threats</span>–
                                    <span className="word"> but</span> <span className="word">at</span> <span
                                        className="word">the</span> <span className="word">heart</span> <span
                                        className="word">of</span>
                                    <span className="word"> slavery</span> <span className="word">is</span> <span
                                        className="word">exploitation</span> <span className="word">and</span> '<span
                                        className="word">ownership</span>'
                                    <span className="word"> of</span> <span className="word">another</span> <span
                                        className="word">human</span> <span className="word">being</span> <span
                                        className="word">for</span> <span className="word">profit</span>.
                                    <span className="word"> Forms</span> <span className="word">of</span> <span
                                        className="word">modern</span> <span className="word">slavery</span> <span
                                        className="word">include</span>
                                    <span className="word"> forced</span> <span className="word">labour</span>, <span
                                        className="word">human</span> <span className="word">trafficking</span>,
                                    <span className="word"> commercial</span> <span className="word">sexual</span> <span
                                        className="word">exploitation</span>,
                                    <span className="word"> domestic</span> <span className="word">servitude</span>
                                    <span className="word">and</span> <span className="word">forced</span> <span
                                        className="word">marriage</span>.

                                    <span className="word"> You</span> <span className="word">might</span> <span
                                        className="word">be</span> <span className="word">surprised</span>
                                    <span className="word"> to</span> <span className="word">see</span> <span
                                        className="word">forced</span> <span className="word">marriage</span>
                                    <span className="word"> included</span> <span className="word">above</span>.
                                    <span className="word"> Sadly</span>, <span className="word">forced</span> <span
                                        className="word">marriage</span> <span className="word">involves</span>
                                    <span className="word"> the</span> <span className="word">same</span> <span
                                        className="word">lack</span> <span className="word">of</span> <span
                                        className="word">choice</span>,
                                    <span className="word"> power</span> <span className="word">imbalance</span>, <span
                                        className="word">coercion</span> <span className="word">and</span>
                                    <span className="word"> labour</span> <span className="word">exploitation</span>
                                    <span className="word">as</span> <span className="word">other</span>
                                    <span className="word"> forms</span> <span className="word">of</span> <span
                                        className="word">slavery</span>.
                                    <span className="word"> This</span> <span className="word">also</span> <span
                                        className="word">includes</span> <span className="word">forced</span>
                                    <span className="word"> child</span> <span className="word">marriage</span> –
                                    <span className="word"> usually</span> <span className="word">of</span> <span
                                        className="word">girls</span>, <span className="word">of</span>
                                    <span className="word"> 17</span> <span className="word">years</span> <span
                                        className="word">or</span> <span className="word">younger</span>.

                                    <span className="word"> Slavery</span> <span className="word">behind</span> <span
                                        className="word">closed</span> <span className="word">doors</span>
                                    <span className="word"> Another</span> <span className="word">form</span> <span
                                        className="word">of</span> <span className="word">slavery</span>
                                    <span className="word"> is</span> <span className="word">domestic</span> <span
                                        className="word">servitude</span>. <span className="word">Across</span> <span
                                        className="word">the</span>
                                    <span className="word"> globe</span>, <span className="word">domestic</span> <span
                                        className="word">workers</span>, <span className="word">mostly</span> <span
                                        className="word">women</span>,
                                    <span className="word"> migrate</span> <span className="word">abroad</span> <span
                                        className="word">to</span> <span className="word">support</span>
                                    <span className="word"> their</span> <span className="word">families</span> <span
                                        className="word">back</span> <span className="word">home</span>.
                                    <span className="word"> Employment</span> <span className="word">agents</span> <span
                                        className="word">in</span> <span className="word">their</span> <span
                                        className="word">country</span>
                                    <span className="word"> of</span> <span className="word">origin</span> <span
                                        className="word">promise</span> <span className="word">a</span> <span
                                        className="word">generous</span>
                                    <span className="word"> salary</span> <span className="word">and</span> <span
                                        className="word">good</span> <span className="word">working</span> <span
                                        className="word">conditions</span>
                                    <span className="word"> with</span> <span className="word">a</span> <span
                                        className="word">caring</span> <span className="word">host</span> <span
                                        className="word">family</span>.
                                    <span className="word"> This</span>, <span className="word">however</span>, <span
                                        className="word">may</span> <span className="word">be</span> <span
                                        className="word">far</span>
                                    <span className="word"> from</span> <span className="word">reality</span>.
                                    <span className="word"> Domestic</span> <span className="word">workers</span> <span
                                        className="word">are</span> <span className="word">sometimes</span> <span
                                        className="word">forced</span>
                                    <span className="word"> to</span> <span className="word">work</span> <span
                                        className="word">long</span> <span className="word">hours</span> <span
                                        className="word">and</span>
                                    <span className="word"> their</span> <span className="word">passports</span> <span
                                        className="word">and</span> <span className="word">mobile</span> <span
                                        className="word">phones</span>
                                    <span className="word"> are</span> <span className="word">taken</span> <span
                                        className="word">away</span>.
                                    <span className="word"> In</span> <span className="word">extreme</span> <span
                                        className="word">cases</span>,
                                    <span className="word"> behind</span> <span className="word">closed</span> <span
                                        className="word">doors</span> <span className="word">of</span>
                                    <span className="word"> private</span> <span className="word">homes</span>, <span
                                        className="word">they</span> <span className="word">are</span> <span
                                        className="word">locked</span>
                                    <span className="word"> up</span>, <span className="word">starved</span>, <span
                                        className="word">deprived</span> <span className="word">of</span>
                                    <span className="word"> sleep</span> <span className="word">and</span> <span
                                        className="word">often</span> <span className="word">physically</span> <span
                                        className="word">and</span>
                                    <span className="word"> sexually</span> <span className="word">abused</span>. <span
                                        className="word">They</span> <span className="word">are</span> <span
                                        className="word">trapped</span>,
                                    <span className="word"> scared</span> <span className="word">and</span> <span
                                        className="word">unfamiliar</span> <span className="word">with</span> <span
                                        className="word">their</span>
                                    <span className="word"> new</span> <span className="word">surroundings</span>.
                                    <span className="word"> Domestic</span> <span className="word">servitude</span>
                                    <span className="word">happens</span>
                                    <span className="word"> globally</span>, <span className="word">including</span>
                                    <span className="word">in</span> <span className="word">the</span> <span
                                        className="word">UK</span>.

                                    <span className="word"> The</span> <span className="word">power</span> <span
                                        className="word">of</span> <span className="word">consumer</span> <span
                                        className="word">choice</span>
                                    <span className="word"> Every</span> <span className="word">item</span> <span
                                        className="word">we</span> <span className="word">buy</span> <span
                                        className="word">has</span>
                                    <span className="word"> a</span> <span className="word">back</span> <span
                                        className="word">story</span>. <span className="word">From</span> <span
                                        className="word">electronics</span>
                                    <span className="word"> to</span> <span className="word">textiles</span>, <span
                                        className="word">from</span> <span className="word">handmade</span> <span
                                        className="word">carpets</span>
                                    <span className="word"> to</span> <span className="word">coffee</span>, <span
                                        className="word">tea</span> <span className="word">and</span> <span
                                        className="word">chocolate</span>,
                                    <span className="word"> each</span> <span className="word">of</span> <span
                                        className="word">these</span> <span className="word">products</span> <span
                                        className="word">might</span>
                                    <span className="word"> include</span> <span className="word">child</span> <span
                                        className="word">or</span> <span className="word">adult</span> <span
                                        className="word">slavery</span>.
                                    <span className="word"> Consider</span> <span className="word">a</span> <span
                                        className="word">product</span> <span className="word">as</span> <span
                                        className="word">innocent</span>
                                    <span className="word"> as</span> <span className="word">chocolate</span>.
                                    <span className="word"> While</span> <span className="word">the</span> <span
                                        className="word">chocolate</span> <span className="word">bar</span> <span
                                        className="word">itself</span>
                                    <span className="word"> may</span> <span className="word">have</span> <span
                                        className="word">been</span> <span className="word">produced</span>
                                    <span className="word"> in</span> <span className="word">your</span> <span
                                        className="word">country</span>,
                                    <span className="word"> the</span> <span className="word">cocoa</span> <span
                                        className="word">in</span> <span className="word">the</span>
                                    <span className="word"> chocolate</span> <span className="word">probably</span>
                                    <span className="word">came</span> <span className="word">from</span>
                                    <span className="word"> West</span> <span className="word">Africa</span>, <span
                                        className="word">where</span> <span className="word">60</span> <span
                                        className="word">per</span>
                                    <span className="word"> cent</span> <span className="word">of</span> <span
                                        className="word">the</span> <span className="word">world's</span> <span
                                        className="word">cocoa</span>
                                    <span className="word"> is</span> <span className="word">produced</span>. <span
                                        className="word">As</span> <span className="word">you</span> <span
                                        className="word">read</span>
                                    <span className="word"> this</span>, <span className="word">thousands</span> <span
                                        className="word">of</span> <span className="word">children</span>
                                    <span className="word"> and</span> <span className="word">adults</span> <span
                                        className="word">live</span> <span className="word">in</span> <span
                                        className="word">slave-like</span>
                                    <span className="word"> conditions</span> <span className="word">on</span> <span
                                        className="word">cocoa</span> <span className="word">farms</span>.
                                    <span className="word"> Unknowingly</span>, <span className="word">your</span> <span
                                        className="word">purchase</span> <span className="word">might</span>
                                    <span className="word"> support</span> <span className="word">slavery</span>. <span
                                        className="word">However</span>, <span className="word">consumer</span>
                                    <span className="word"> demand</span> <span className="word">for</span> <span
                                        className="word">ethically-sourced</span> <span className="word">products</span>
                                    <span className="word"> and</span> <span className="word">services</span> <span
                                        className="word">can</span> <span className="word">send</span> <span
                                        className="word">a</span>
                                    <span className="word"> powerful</span> <span className="word">message</span> <span
                                        className="word">to</span> <span className="word">producers</span>.
                                    <span className="word"> Imagine</span> <span className="word">if</span> <span
                                        className="word">we</span> <span className="word">all</span> <span
                                        className="word">refused</span>
                                    <span className="word"> to</span> <span className="word">purchase</span> <span
                                        className="word">goods</span> <span className="word">that</span> <span
                                        className="word">have</span>
                                    <span className="word"> a</span> <span className="word">back</span> <span
                                        className="word">story</span> <span className="word">of</span> <span
                                        className="word">slavery</span>.
                                    <span className="word"> Company</span> <span className="word">sales</span>,
                                    <span className="word"> and</span> <span className="word">therefore</span> <span
                                        className="word">profits</span>, <span className="word">would</span> <span
                                        className="word">fall</span>.
                                    <span className="word"> Look</span> <span className="word">around</span> <span
                                        className="word">at</span> <span className="word">items</span> <span
                                        className="word">in</span>
                                    <span className="word"> your</span> <span className="word">home</span> <span
                                        className="word">and</span> <span className="word">workplace</span>
                                    <span className="word"> and</span> <span className="word">ask</span> <span
                                        className="word">yourself</span> <span className="word">the</span> <span
                                        className="word">simple</span>
                                    <span className="word"> question</span>, '<span className="word">Where</span> <span
                                        className="word">did</span>
                                    <span className="word"> this</span> <span className="word">come</span> <span
                                        className="word">from</span><span className="word">and</span>
                                    <span className="word"> who</span> <span className="word">made</span> <span
                                        className="word">it</span>?'

                                    <span className="word"> Why</span> <span className="word">didn't</span> <span
                                        className="word">I</span> <span className="word">learn</span> <span
                                        className="word">about</span>
                                    <span className="word"> modern</span> <span className="word">slavery</span> <span
                                        className="word">at</span> <span className="word">school</span>?
                                    <span className="word"> Did</span> <span className="word">you</span> <span
                                        className="word">ever</span> <span className="word">learn</span> <span
                                        className="word">about</span>
                                    <span className="word"> modern</span> <span className="word">slavery</span> <span
                                        className="word">at</span> <span className="word">school</span>?
                                    <span className="word"> History</span> <span className="word">lessons</span> <span
                                        className="word">may</span> <span className="word">have</span> <span
                                        className="word">included</span>
                                    <span className="word"> the</span> <span className="word">horrific</span> <span
                                        className="word">practice</span> <span className="word">of</span> <span
                                        className="word">slavery</span>,
                                    <span className="word"> however</span>, <span className="word">it</span> <span
                                        className="word">was</span> <span className="word">probably</span> <span
                                        className="word">considered</span>
                                    <span className="word"> something</span> <span className="word">that</span> <span
                                        className="word">was</span> <span className="word">very</span> <span
                                        className="word">much</span>'
                                    <span className="word"> in</span> <span className="word">the</span> <span
                                        className="word">past</span>'. <span className="word">But</span> <span
                                        className="word">slavery</span>
                                    <span className="word"> still</span> <span className="word">exists</span> <span
                                        className="word">and</span> <span className="word">it</span> <span
                                        className="word">is</span>
                                    <span className="word"> the</span> <span className="word">everyday</span> <span
                                        className="word">reality</span> <span className="word">for</span> <span
                                        className="word">millions</span>
                                    <span className="word"> of</span> <span className="word">people</span>. <span
                                        className="word">It</span> <span className="word">takes</span> <span
                                        className="word">brave</span>
                                    <span className="word"> educators</span> <span className="word">to</span> <span
                                        className="word">raise</span> <span className="word">awareness</span>
                                    <span className="word"> of</span> <span className="word">the</span> <span
                                        className="word">difficult</span>, <span className="word">upsetting</span>
                                    <span className="word"> and</span> <span className="word">invisible</span> <span
                                        className="word">reality</span> <span className="word">of</span> <span
                                        className="word">modern</span> <span className="word">slavery</span>.


                                    <span className="word"> The</span> <span className="word">good</span> <span
                                        className="word">news</span> <span className="word">is</span> <span
                                        className="word">that</span>
                                    <span className="word"> thousands</span> <span className="word">of</span> <span
                                        className="word">individuals</span> <span className="word">and</span>
                                    <span className="word"> anti-slavery</span> <span
                                        className="word">organisations</span> <span className="word">are</span> <span
                                        className="word">taking</span> <span className="word">action</span>.
                                    <span className="word"> One</span><span className="word"> such</span> <span
                                        className="word">organisation</span> <span className="word">is</span> <span
                                        className="word">The</span> <span className="word">NO</span> <span
                                        className="word">Project</span>,
                                    <span className="word"> which</span> <span className="word">focuses</span> <span
                                        className="word">specifically</span> <span className="word">on</span> <span
                                        className="word">the</span>
                                    <span className="word"> education</span> <span className="word">of</span> <span
                                        className="word">youth</span> <span className="word">and</span> <span
                                        className="word">young</span> <span className="word">adults</span>.'
                                    <span className="word"> Youth</span> <span className="word">are</span> <span
                                        className="word">the</span> <span className="word">next</span> <span
                                        className="word">generation</span>
                                    <span className="word"> of</span> <span className="word">corporate</span> <span
                                        className="word">leaders</span>, <span className="word">policy</span> <span
                                        className="word">makers</span>
                                    <span className="word"> and</span> <span className="word">consumers</span>,' <span
                                        className="word">says</span> <span className="word">the</span> <span
                                        className="word">founder</span>
                                    <span className="word"> of</span> <span className="word">The</span> <span
                                        className="word">NO</span> <span className="word">Project</span>.'
                                    <span className="word"> How</span> <span className="word">we</span> <span
                                        className="word">choose</span> <span className="word">to</span> <span
                                        className="word">spend</span> <span className="word">our</span>
                                    <span className="word"> money</span> <span className="word">says</span> <span
                                        className="word">a</span> <span className="word">lot</span> <span
                                        className="word">about</span> <span className="word">who</span>
                                    <span className="word"> we</span> <span className="word">are</span>. <span
                                        className="word">So</span>, <span className="word">the</span> <span
                                        className="word">question</span> <span className="word">is</span> –
                                    <span className="word"> who</span> <span className="word">are</span> <span
                                        className="word">we</span>? <span className="word">And</span> <span
                                        className="word">remember</span>,
                                    <span className="word"> another</span> <span className="word">time</span>, <span
                                        className="word">in</span> <span className="word">another</span> <span
                                        className="word">place</span>,
                                    <span className="word"> that</span> <span
                                        className="word">enslaved</span> human<span className="word"> being</span> <span
                                        className="word">could</span> <span className="word">be</span> <span
                                        className="word">you</span>.'</p>
                            </PerfectScrollbar>
                        </ScrollWrapper>
                        <div className='progress-wrapper'>
                            <div className="progress-content">
                                <div className="progress-container">{this.state.count}</div>
                                <button onClick={this.endTest} className='button'>Закончить тест</button>
                            </div>
                        </div>
                    </TestWrapper>
                    : <TestWrapper>
                        <ResultWrapper>
                            <div className="counter-container">
                                <Counter total={this.state.words}
                                         words={this.state.count}
                                         persentage={this.state.persentage}/>
                            </div>
                            <div  className='result'>Уровень Вашего словарного запаса:
                                <div className='result__value'>{this.state.result} слов</div>
                            </div>
                        </ResultWrapper>
                    </TestWrapper>
                }
            </React.Fragment>
        )
    }
}