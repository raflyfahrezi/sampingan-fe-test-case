import axios from 'axios'

import { AxiosProps } from './types'

const baseURL = 'https://hacker-news.firebaseio.com/v0/'

export const axiosGet = (
    url: string,
    { withoutBaseURL, ...config }: AxiosProps
) => {
    return axios.get(url, {
        ...config,
        baseURL: withoutBaseURL ? '' : baseURL,
    })
}
