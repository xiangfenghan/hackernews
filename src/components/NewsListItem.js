import React from 'react'
import NewsComment from './NewsComment'
import styled from 'styled-components'

const StyledList = styled.li`
    margin: 10px 0 20px 0;
    padding: 10px 15px;
    color: #666666;
    background-color: #e3e3e3;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

const SectionTitle = styled.span`
    display: block;
    margin: 5px 0 10px 0;
    font-size: 18px;
    font-weight: bold;
`

const SectionLine = styled.span`
    display: block;
    margin: 5px 0;
    font-size: 16px;
`

const SectionLink = styled.a`
    display: block;
    margin: 5px 0;
    color: #00bbd8
    font-size: 14px;
`

const NewsListItem = ({ news, comments, onClick }) => {

    let parentId = false

    comments.map(comment => {
        console.log(comment.parent)
        if(comment.parent === news.id) {
            parentId = true
        }
    })

    return (
        <div>
            <StyledList 
                onClick={() => onClick(news.id, news.kids)}
            >
            <SectionTitle>{news.title}</SectionTitle>
            <SectionLine>Posted by {news.by}</SectionLine>
            <SectionLine>Scored {news.score}</SectionLine>
            <SectionLink href={news.url}>View more</SectionLink>

            { parentId &&
        
                <NewsComment
                    comments={comments}
                    news={news}
                />
            }
            </StyledList>
        </div>
)}

export default NewsListItem