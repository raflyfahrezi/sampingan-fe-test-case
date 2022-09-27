import React from 'react'

import Comment from './comment'
import { sComments } from './styles'
import { CommentsProps } from './types'

const Comments = ({ comments }: CommentsProps) => {
    return (
        <div className={sComments}>
            {comments.map((comment) => {
                return (
                    <Comment
                        key={comment.id}
                        name={comment.by}
                        text={comment.text}
                        time={comment.time}
                    />
                )
            })}
        </div>
    )
}

export default Comments
