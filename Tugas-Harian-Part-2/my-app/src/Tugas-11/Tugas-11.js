import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    var today = new Date()
    var jam=today.getHours()
    var timezone=''
    var menit=today.getMinutes()
    var detik=today.getSeconds()
    //if (jam>=12){jam-=12}
    
    if (jam>=12){
        timezone='PM.'
        jam-=12
    }
    else{
        timezone='AM.'
    }
    if (jam<10){jam='0'+jam}
    if (menit<10){menit='0'+menit}
    if (detik<10){detik='0'+detik}
    this.state = {
        time : jam + ':' + menit + ':' + detik+ ' '+timezone,
        count:10,
        tunjukkan:true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    this.tunjukkan=false;
  }
  componentDidUpdate(){
      if(this.state.count===1){
        this.componentWillUnmount()
      }
  }

  tick() {
    var today = new Date()
    var jam=today.getHours()
    var timezone=''
    var menit=today.getMinutes()
    var detik=today.getSeconds()
    if (jam>=12){
        timezone='PM.'
        jam-=12
    }
    else{
        timezone='AM.'
    }
    if (jam<10){jam='0'+jam}
    if (menit<10){menit='0'+menit}
    if (detik<10){detik='0'+detik}
    
    this.setState({
        time: jam + ':' + menit + ':' + detik+' '+timezone,
        count: this.state.count-1
    });
  }
  render(){
    if (this.tunjukkan===false){
        return (
            <>
            <div></div>
            </>
        )
    }
    else{
        return(
            <>
            <div>
              <h1 style={{display:"inline",float:"left"}}>Sekarang jam - {this.state.time}</h1>
              <h1 style={{display:"inline",float:"right"}}>hitung mundur: {this.state.count}</h1>
            </div>
              
            </>
          )
    }
  
  }
}

export default Timer