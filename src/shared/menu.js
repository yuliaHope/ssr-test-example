import React from 'react';
import { NavLink } from 'react-router-dom';

const countries = [
  {
    name: 'US',
    param: 'us',
  },
  {
    name: 'AE',
    param: 'ae',
  },
  {
    name: 'CZ',
    param: 'cz',
  },
  {
    name: 'DE',
    param: 'de',
  },
  {
    name: 'BE',
    param: 'be',
  },
];

export default function Menu() {
  return (
    <ul>
      {countries.map(({ name, param }) => (
        <li key={param}>
          <NavLink
            activeStyle={{ fontWeight: 'bold' }}
            to={`/popular/${param}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
