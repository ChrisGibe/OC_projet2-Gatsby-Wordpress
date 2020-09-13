import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const SiteInfoWrapper = styled.div`
    color: white;
`
const SiteTile = styled.div`
    font-weight: bold;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }    
    `} render={props => (
        <SiteInfoWrapper>
            <SiteTile>
                { props.allWordpressSiteMetadata.edges[0].node.name }
            </SiteTile>
            <div>
                { props.allWordpressSiteMetadata.edges[0].node.description }
            </div>
        </SiteInfoWrapper>
    )} />
)

export default SiteInfo;