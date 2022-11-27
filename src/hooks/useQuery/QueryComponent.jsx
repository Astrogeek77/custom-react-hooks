import React from 'react'
import useFetch from './useFetch'

function QueryComponent() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const { loading, error, posts } = useFetch(url);
    
  return (
      <>
          {!loading && error == null && posts.map((post) => {
              <pre>post</pre>
          })}
      </>
  )
}

export default QueryComponent