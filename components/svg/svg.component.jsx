import React from 'react'

import Fire from '../../assets/fire-extinguisher.svg'
import Passion from '../../assets/passion.svg'
import Love from "../../assets/love.svg"

const Svg = ({source, width, height}) => {
    switch(source.toLowerCase()) {
        case 'fire':
            return <Fire width={width} height={height} />        
        case 'passion':
            return <Passion width={width} height={height} />        
        case 'love':
            return <Love width={width} height={height} />
        default: 
            return null
    }
}
export default Svg