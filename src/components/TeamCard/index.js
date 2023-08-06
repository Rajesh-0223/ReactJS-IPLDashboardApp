// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {id, name, imageUrl} = teamData

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="list-item">
          <img src={imageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
