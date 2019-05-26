import React from 'react'
import NewsListItem from './NewsListItem'
import styled from 'styled-components'

const StyledUl = styled.ul`
    padding: 0;
`

const NewsList = ({ style, news=[], comments=[], ...props }) => (

    <StyledUl>
        {news.map(singleNews => {
            return (
            <NewsListItem
                key={singleNews.id}
                news={singleNews}
                comments={comments}
                {...props}
            />
            )
        })}
    </StyledUl>

)

export default NewsList