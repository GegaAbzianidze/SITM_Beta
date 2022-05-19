import React from 'react'

const Rule = ({ color }) => (
  <hr
    style={{
      borderColor: color,
    }}
  />
);

const Count = () => {
  return (
    <div className='Count'>
        <div>
            <h1>40K+</h1>
            <h4>Artworks</h4>
        </div>
        <Rule color="grey" />
        <div>
            <h1>120K+</h1>
            <h4>Auction</h4>
        </div>
        <Rule color="grey" />
        <div>
            <h1>10K+</h1>
            <h4>Artist</h4>
        </div>

    </div>
  )
}

export default Count