import React from 'react'

const Card = ({ data }) => {



  return (

    <div className="cardContainer">
      {data?.length > 0 && (
        <>
          {data.map((curItem, index) => {

            if (!curItem.urlToImage) {
              return null
            } else {
              return (
                <div className="card" >
                  <img src={curItem.urlToImage} />
                  <div className="content">
                    <a className='title' onClick={() => window.open(curItem.url)}>{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button onClick={() => window.open(curItem.url)}>Read More</button>
                  </div>
                </div>
              );
            }


            return (
              <div className="card" >
                <img src={curItem.urlToImage} />
                <div className="content">
                  <a className='title' onClick={() => window.open(curItem.url)}>{curItem.title}</a>
                  <p>{curItem.description}</p>
                  <button onClick={() => window.open(curItem.url)}>Read More</button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>


  )
}

export default Card