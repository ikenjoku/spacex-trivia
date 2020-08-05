import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HistoryCardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid #f5f4f0;

  & :hover {
    background-color: #f5f4f0;
  }
`

const TitleContainer = styled.div`
  @media (min-width: 500px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  margin-bottom: 2em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  color: #405a40;
  p {
    padding-bottom: .5em;
  }
`

const Details = styled.div`
  margin-bottom: 2em;
`

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > p {
    margin-right: .5em;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > a {
    margin-right: .5em;
    text-decoration: none;
  }
`

const Icon = styled.span`
  font-size: 24px;
  color: #587b58;
`

const icons = {
  reddit: <i className="fab fa-reddit-square"></i>,
  wikipedia: <i className="fab fa-wikipedia-w"></i>,
  article: <i className="far fa-newspaper"></i>
}

export default function HistoryCard({ historyInfo: {
  title,
  links,
  details,
  event_date_utc
}}) {
  let iconLinks = []
  for (let link in links) {
    if (links[link]) {
      iconLinks.push({ name: link, url: links[link] })
    }
  }
  return (
    <HistoryCardContainer>
      <TitleContainer>
        <p>{title}</p>
        <p>{new Date(event_date_utc).toLocaleDateString()}</p>
      </TitleContainer>
      <Details>{details}</Details>
      <Links>
        <p>See More:</p>
        <LinksContainer>
          {iconLinks.map(link =>
            <Link
              key={link.url}
              to={{ pathname: link.url }}
              target="_blank">
                <Icon>
                  {icons[link.name]}
                </Icon>
            </Link>)}
        </LinksContainer>
      </Links>
    </HistoryCardContainer>
  )
}
