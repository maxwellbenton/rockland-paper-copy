import React from 'react'


export default function Resume(){
  // <iframe style={{width:'90%',height:'100%'}}src="https://docs.google.com/document/d/1k9rzNC8CtEhYU1BI18uH_9EOiCQw32GPRcyk93OGBs4/pub?embedded=true"></iframe>
  return (
    <div style={{height:'100vh'}}>
      
      <object data="/Resume.pdf" type="application/pdf" width="90%" height="100%">
        alt : <a href="test.pdf">test.pdf</a>
    </object>
    </div>
  )
}