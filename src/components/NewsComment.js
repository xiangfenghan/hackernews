import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const CommentTitle = styled.h3`
    margin: 10px 0;
    padding: 0 25px;
    font-size: 14px;
`

const StyledUl = styled.ul`
    padding: 0 25px;
    cursor: auto;
`

const StyledList = styled.li`
    margin: 10px 0 20px 0;
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    list-style: none;
    word-wrap: break-word
    cursor: auto;

    &:hover {
        color: #000000;
    }
`

const NewsComment = (props) => {

    if(!props.news) {
        return (
            <Paragraph >Select a News to see comments</Paragraph>
        )
    }

    return (
        <div>
            <CommentTitle>Latest Comments</CommentTitle>
            {props.comments && 
                <StyledUl>
                    {props.comments.map(comment => {
                        
                        return (
                            <StyledList key={comment.id} dangerouslySetInnerHTML={{__html: comment.text}} />
                        )
                    })}
                </StyledUl>
            }
        </div>
    )
}

export default NewsComment