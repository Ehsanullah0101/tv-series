import React, { Component } from 'react'
import LoaderSrc from '../../assets/loader.gif'


class Loader extends Component{
    render(){
        return(
            <div>
                <img
                style={{width:75}}
                src = {LoaderSrc} />
            </div>
        )
    }
}
export default Loader