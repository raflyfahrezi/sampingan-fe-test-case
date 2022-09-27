import React, { useState, useEffect } from 'react'

import { News } from '@/models'
import { axiosGet } from '@/utils'
import { Card, Wrapper, Loading } from '@/components'

const Home = () => {
    const [page, setPage] = useState<number>(1)
    const [newsList, setNewsList] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [newsIDList, setNewsIDList] = useState<number[]>([])

    const getNewsData = async () => {
        try {
            const response = await axiosGet('/topstories.json', {})

            const { data } = response

            setNewsIDList(data)
        } catch {
            setNewsIDList([])
        }
    }

    const getNewsDetailPerPage = async () => {
        try {
            const newsListTemp = []

            for (let i = page - 1; i < page + 9; i++) {
                const response = await axiosGet(
                    `/item/${newsIDList[i]}.json`,
                    {}
                )

                const { data } = response

                newsListTemp.push(data)
            }

            setNewsList(newsListTemp)
        } catch {
            console.log('error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getNewsData()
    }, [])

    useEffect(() => {
        if (newsIDList.length > 0) {
            getNewsDetailPerPage()
        }
    }, [page, newsIDList])

    return (
        <Wrapper>
            {isLoading ? (
                <div>
                    <Loading size='large' />
                </div>
            ) : (
                <div>
                    <div>
                        {newsList.map((news) => {
                            return <Card key={news.id} {...news} />
                        })}
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default Home
