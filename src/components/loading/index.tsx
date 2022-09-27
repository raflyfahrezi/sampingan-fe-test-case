import React from 'react'
import { cx } from '@emotion/css'

import { LoadingIcon } from '@/assets'

import { LoadingProps } from './types'
import {
    sLoading,
    sLoadingLarge,
    sLoadingSmall,
    sLoadingMedium,
} from './styles'

const Loading = ({ size }: LoadingProps) => {
    return (
        <div
            className={cx(
                sLoading,
                { [sLoadingLarge]: size === 'large' },
                { [sLoadingSmall]: size === 'small' },
                { [sLoadingMedium]: size === 'medium' }
            )}
        >
            <LoadingIcon />
        </div>
    )
}

export default Loading
