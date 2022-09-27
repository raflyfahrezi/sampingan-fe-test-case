import React from 'react'

import { Head } from '@/layout'

import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Head />
            <div>{children}</div>
        </>
    )
}

export default PageWrapper
