import React from 'react'

export  function HolidayCards(props) {
    const {hImg,htitle,hPara} =props;
  return (
    <div style={{
        width:"400px"
    }} >

<img src={hImg} alt=''/>
<h3>{htitle}</h3>
<p>{hPara}</p>


    </div>
  )
}

