import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu () {
  const countries = [{
    name: 'US',
    param: 'us'
  }, {
    name: 'AE',
    param: 'ae',
  }, {
    name: 'CZ',
    param: 'cz',
  }, {
    name: 'DE',
    param: 'de',
  }, {
    name: 'BE',
    param: 'be',
  }]

  return (
    <ul>
      {countries.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}