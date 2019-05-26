import React from 'react'
import NewsList from './NewsList'
import NewsComment from './NewsComment'
import styled from 'styled-components'

const Main = styled.main`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
`

const SectionList = styled.div`
    width: 100%
    padding: 0 10px 0 0;
`

const SectionDetail = styled.div`
    position: relative;
    flex: 0 0 70%;
    padding: 0 0 0 10px;
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
`

const Subtitle = styled.h2`
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 26px;
`

const fetchSingleComment = id => {

    return new Promise(resolve => {
        fetch(`${API_URL}/v0/item/${id}.json?print=pretty`)
        .then(res => res.json())
        .then(singleComment => {
            resolve(singleComment)
        })
    })
}

class Home extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        comments: [],
      }

    this.onNewsClick = this.onNewsClick.bind(this)
  }

  onNewsClick = (id, kids) => {

    let results = Promise.all(kids.slice(0,10).map(fetchSingleComment))
    results.then(comments => {
        this.setState({
            comments: comments
        })
    })
  }

  render () {

    const { comments } = this.state
    const { news } = this.props.state
    return (
        <div>
            <Main>
                <SectionList>
                    <Subtitle>Top News</Subtitle>
                    <NewsList
                        news={news}
                        comments={comments}
                        onClick={this.onNewsClick}
                    />
                </SectionList>
                {/* <SectionDetail>
                    <NewsComment
                        news={news}
                        comments={comments}
                    />
                </SectionDetail> */}
            </Main>
        </div>
      )
    }
}

export default Home