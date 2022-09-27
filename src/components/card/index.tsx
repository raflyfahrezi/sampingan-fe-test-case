/* eslint-disable react-hooks/exhaustive-deps */

import moment from 'moment'
import React, { useEffect, useState } from 'react'

import { axiosGet } from '@/utils'
import { Loading } from '@/components'
import { News, Comment } from '@/models'
import { ChevronUpIcon, ChevronDownIcon } from '@/assets'

import Comments from './comments'
import {
    sCard,
    sCardTitle,
    sCardHeader,
    sCardCommentButton,
    sCardCommentButtonIcon,
    sCardCommentButtonText,
} from './styles'

const Card = ({ by, url, title, time, kids }: News) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [commentList, setCommentList] = useState<Comment[]>([])
    const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false)

    const commentButtonHandler = () => {
        setIsCommentOpen(!isCommentOpen)
    }

    const getCommentList = async () => {
        setIsLoading(true)

        const commentListTemp = []

        try {
            for (let i = 0; i < kids.length; i++) {
                const response = await axiosGet(`/item/${kids[i]}.json`, {})
                const { data } = response

                commentListTemp.push(data)
            }

            setCommentList(commentListTemp)
        } catch {
            //
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isCommentOpen) {
            getCommentList()
        }
    }, [isCommentOpen])

    return (
        <div className={sCard}>
            <div>
                <p className={sCardHeader}>
                    <b>{by}</b> at {moment(time * 1000).format('DD MMM YYYY')}
                </p>
                <a
                    href={url}
                    className={sCardTitle}
                    target='_blank'
                    rel='noreferrer'
                >
                    {title}
                </a>
            </div>
            {isCommentOpen && (
                <>
                    {isLoading ? (
                        <div>
                            <Loading size='small' />
                        </div>
                    ) : (
                        <Comments comments={commentList} />
                    )}
                </>
            )}
            <button
                onClick={commentButtonHandler}
                className={sCardCommentButton}
            >
                {kids ? (
                    <>
                        {isCommentOpen ? (
                            <div className={sCardCommentButtonIcon}>
                                <ChevronUpIcon />
                            </div>
                        ) : (
                            <div className={sCardCommentButtonIcon}>
                                <ChevronDownIcon />
                            </div>
                        )}
                        {isCommentOpen ? (
                            <p className={sCardCommentButtonText}>
                                Hide all comments
                            </p>
                        ) : (
                            <p className={sCardCommentButtonText}>
                                Show {kids.length} comments
                            </p>
                        )}
                    </>
                ) : (
                    <p className={sCardCommentButtonText}>
                        No comments available
                    </p>
                )}
            </button>
        </div>
    )
}

export default Card
