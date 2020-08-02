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
`

const TitleContainer = styled.div`
  @media (min-width: 500px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  p {
    padding-bottom: .5em;
  }
`

const Details = styled.div`
`

const Links = styled.div`
  display: flex;
  justify-content: flex-end;

  & > p {
    margin-right: .5em;
  }
`
const icons = {
  reddit: 'reddit',
  wikipedia: 'wikipedia',
  article: 'article'
}

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > a {
    margin-right: .5em;
    text-decoration: none;
  }
`

export default function HistoryCard({ historyInfo: {
  id,
  title,
  links,
  details,
  flight_number,
  event_date_utc,
  event_date_unix
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
        <p>{new Date(event_date_unix).toLocaleDateString()}</p>
      </TitleContainer>
      <Details>{details}</Details>
      <Links>
        <p>See More:</p>
        <LinksContainer>
          {iconLinks.map(link => <Link key={link.url} to={{ pathname: link.url }} target="_blank">{link.name}</Link>)}
        </LinksContainer>
      </Links>
    </HistoryCardContainer>
  )
}
