import React from 'react'
import { Link } from 'react-router-dom'
import {
  HistoryCardContainer,
  TitleContainer,
  LinksContainer,
  Details,
  Links,
  Icon
} from './styles'

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
