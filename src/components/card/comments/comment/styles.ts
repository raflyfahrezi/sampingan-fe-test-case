import { css } from '@emotion/css'

export const sComment = css`
    width: 100%;

    display: flex;
    gap: 20px;
`

export const sCommentContent = css`
    width: 100%;
`

export const sCommentTitle = css`
    font-size: 14px;
`

export const sCommentText = css`
    width: 100%;

    font-size: 14px;

    & > code,
    pre {
        word-break: break-word !important;
    }
`
