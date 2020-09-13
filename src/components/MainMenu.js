import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import SiteInfo from './SiteInfo'

const MainMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(3, 27, 77);
`
const MainMenuInner = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;  
    margin: 5px auto;

    @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 16px 16px;
    text-decoration: none;

    @media screen and (max-width: 640px) {
        padding: 5px 16px;
    }

    &:hover {
        border-bottom: 2px solid white;
    }
`
const activeStyles = {
    borderBottom: "2px solid white"
}

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItem to={`/${item.object_slug}`} key={item.title} activeStyle={activeStyles} >
                    {item.title}
                </MenuItem>    
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )} />

)

export default MainMenu