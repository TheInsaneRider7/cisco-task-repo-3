import React from 'react' 
import './component1.css'

const Component1 = ()=>{
    return(
        <div className = "component1">
            <div className = "component1-info">
                <h1>Your Public Ipv4/ipv6 address is:</h1>
                <p><span id="ip"></span><br /></p>
            </div>
        </div>
    )
}

export default Component1;
