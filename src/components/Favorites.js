import React from 'react'
import RecipeList from './RecipeList'
import styled from 'styled-components'

const FavoritesPage = styled.div`
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
`

const Favorites = ({ state, toggleFavorite }) => {

    const { recipes, favorites }  = state

    return(
        <FavoritesPage>
            <h2>Favorites</h2>
            <RecipeList 
                recipes={recipes.filter(r => favorites.includes(r.id))}
                favorites={favorites}
                onFavorited={toggleFavorite}
            />
        </FavoritesPage>
    )   
}

export default Favorites