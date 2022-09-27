import { css } from '@emotion/css'

export const sCard = css`
    width: 100%;

    padding: 12px 12px 0 12px;

    border-radius: 5px;

    display: flex;
    gap: 20px;
    flex-direction: column;

    &:nth-child(odd) {
        background-color: #e5e5e5;
    }
`

export const sCardHeader = css`
    font-size: 12px;

    color: #333333;
`

export const sCardTitle = css`
    font-size: 18px;
    font-weight: bold;

    text-decoration: underline;
`

export const sCardCommentButton = css`
    width: 100%;

    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: right;

    padding: 14px 0;
`

export const sCardCommentButtonIcon = css`
    width: 100%;
    max-width: 10px;
`

export const sCardCommentButtonText = css`
    font-size: 14px;
`
