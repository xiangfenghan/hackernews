import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import News from './News'
import NotFound from './NotFound'
import styled from 'styled-components'

const Main = styled.main`
    padding: 0 5%;
`


const fetchSingleNews = id => {

    return new Promise(resolve => {
        fetch(`${API_URL}/v0/item/${id}.json?print=pretty`)
        .then(res => res.json())
        .then(singleNews => {
            resolve(singleNews)
        })
    })
}

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            news: []
        }
    }

    fetchTopNews = ids => {
        let results = Promise.all(ids.slice(0,10).map(fetchSingleNews))
        results.then(news => {
            this.setState({
                news: news
            })
        })
    }

    componentDidMount() {
        fetch(`${API_URL}/v0/topstories.json?print=pretty`)
          .then(res => res.json())
          .then((ids) => {
            this.fetchTopNews(ids)
        })
      }

    render () {
        return (
            <BrowserRouter>
                <Main>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route
                            exact 
                            path="/" 
                            render={() => (
                                <Home state={this.state} />
                            )} />
                        <Route 
                            path="/news/:id"
                            component={News}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Main>
            </BrowserRouter>
        )
    }
}

export default App