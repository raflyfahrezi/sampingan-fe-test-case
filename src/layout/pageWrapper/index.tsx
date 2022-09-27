import React from 'react'

import { Head, Header } from '@/layout'

import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Head />
            <div>
                <Header />
                {children}
            </div>
        </>
    )
}

export default PageWrapper
