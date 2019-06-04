import React, {Component} from 'react'


export class Counter extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let counter = document.getElementById('counter').getContext('2d')
        let gradient = counter.createLinearGradient(0, 0, 170, 0)
        gradient.addColorStop(0, '#a23cc3')
        gradient.addColorStop(1, '#abe6ea')
        let words = this.props.total - this.props.words
        let no = 0
        let result = words / this.props.total
        let pointToFill = 4.72
        let cw = counter.canvas.width
        let ch = counter.canvas.height
        let diff

        const fillCounter = () =>{
            diff = ((no/100) * Math.PI*2*10)

            counter.clearRect(0,0,cw,ch)

            counter.lineWidth = 15

            counter.fillStyle = '#737474'

            counter.strokeStyle = gradient

            counter.textAlign = 'center'

            counter.font = '25px monospace'

            counter.fillText(`${words}/${this.props.total}`,100,110)

            counter.beginPath()
            counter.arc(100, 100, 90, pointToFill, diff/10+pointToFill)
            counter.stroke()

            if (no.toFixed(2) >= this.props.persentage){
                clearTimeout(fill)
            }
            no += result

        }
        let fill = setInterval(fillCounter, 5)
    }

    render(){
        return(
            <React.Fragment>
                <div className='circle'></div>
                <canvas height="200" width="200" id="counter"/>
            </React.Fragment>
        )
    }
}