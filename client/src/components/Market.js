import React from 'react'
import Class from "./chart/Class"


const Market = (props) => {

  // const [state, setState] = useState({
  //   ticker: 'AMZN',
  //   open: [],
  //   close: [],
  //   low: [],
  //   high: [],
  //   t: [],
  //   v: []
  // })

  // useEffect(() => {
  //   async function fetchData() {
  //     const API_KEY = 'sandbox_c32ic7iad3ieculvlt40'
  //     const result = await axios('/api/quotes');
  //     const {c, h, l, o, t, v} = result.data
   
  //     setState({...state, open: o, close: c, high: h, low: l, t: t, v: v});
  //     console.log(state)
  //   }
  //   fetchData()
  // });




// const {open, high, close, pc, t, low} = props;


  return (
    <div className="container">
      <h1 >This chart shows simulated data for $AAPL generated by random walk.</h1>
        <h3>Ticker: AAPL</h3>
      
       <Class />
    </div>
  )
}

export default Market


