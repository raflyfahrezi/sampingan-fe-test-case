import React from 'react'
import moment from 'moment'
import sanitize from 'sanitize-html'

import { ReplyIcon } from '@/assets'

import { CommentProps } from './types'
import {
    sComment,
    sCommentText,
    sCommentTitle,
    sCommentContent,
} from './styles'

const Comment = ({ name, text, time }: CommentProps) => {
    return (
        <div className={sComment}>
            <div>
                <ReplyIcon />
            </div>
            <div className={sCommentContent}>
                <p className={sCommentTitle}>
                    <b>{name}</b> at {moment(time * 1000).format('DD MMM YYYY')}
                </p>
                <p
                    className={sCommentText}
                    dangerouslySetInnerHTML={{ __html: sanitize(text) }}
                />
            </div>
        </div>
    )
}

export default Comment
