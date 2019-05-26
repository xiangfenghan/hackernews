import React from 'react'
import NewsComment from './NewsComment'
import styled from 'styled-components'

const NewsPage = styled.div`
    font-family: 'Ubuntu', sans-serif;
`

class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        
        const { id } = this.props.match.params

        fetch(`${API_URL}/v0/item/${id}.json?print=pretty`)
        .then(res => res.json())
        .then((news) => {
            this.setState({
                comments: news.kids
            })
        })

        console.log(this.state)
    }
    
    render () {

        const { comments } = this.state

        return (

            <NewsPage>
                <NewsComment comments={comments} />
            </NewsPage>

        )

    }
}

export default News