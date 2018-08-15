import React from 'react'

const Scroll = (props) => {
  const styles = {
        overflowY : 'scroll',
        height: '600px',
        

        
  }  
    return (
        <div style={styles}>
           {props.children}
        </div> 
    )
}
export default Scroll