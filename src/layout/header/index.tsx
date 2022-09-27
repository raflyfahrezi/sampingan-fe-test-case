import React from 'react'

import { sHeader, sHeaderText } from './styles'

const Header = () => {
    return (
        <div className={sHeader}>
            <p className={sHeaderText}>HackerNews</p>
        </div>
    )
}

export default Header
