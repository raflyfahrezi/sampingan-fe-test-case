import React from 'react'

import { WrapperProps } from './types'
import { sWrapper } from './styles'

const Wrapper = ({ children }: WrapperProps) => {
    return <div className={sWrapper}>{children}</div>
}

export default Wrapper
