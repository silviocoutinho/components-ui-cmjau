import React from 'react';

const Head = ({keys, head}) => {
  return(
    <thead>
          <tr>
            {
              keys.map(key => <th key={key}>{head[key] || key}</th>)
            }
          </tr>
        </thead>
  )
}

export default Head;
