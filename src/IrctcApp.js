import React from 'react'

function IrctcApp(props) {
    const { imgUrl, imgTitle ,imgAlt} = props;
  return (
   
    <div >
 


<img style={{borderRadius:"50%"}} 
src={imgUrl}
alt={imgAlt}/>
<h2>{imgTitle}</h2>
    </div>
  )
}

export default IrctcApp

