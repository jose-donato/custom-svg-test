import React from 'react'

import Fire from '../../assets/fire-extinguisher.svg'
import Passion from '../../assets/passion.svg'
import Love from "../../assets/love.svg"

const Svg = ({ source, width, height }) => {
    const lookup = {
        ['fire']: <Fire width={width} height={height} />,
        ['passion']: <Passion width={width} height={height} />,
        ['love']: <Love width={width} height={height} />,
    }
    return (
        lookup[source]
    )
}
export default Svg