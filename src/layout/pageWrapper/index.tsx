import React from 'react'

import { Head, Header, Footer } from '@/layout'

import { sPageWrapper } from './styles'
import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Head />
            <div className={sPageWrapper}>
                <div>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
