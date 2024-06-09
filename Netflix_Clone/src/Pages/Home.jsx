import React from 'react'
import Hero from '../Components/Hero/Hero'
import MovieRow from '../Components/MovieRow/MovieRow'
import endpoints from '../services/moveServices'

export default function Home() {
  return (
    <>
      <Hero />
      <MovieRow title="upcoming" url={endpoints.upcoming}/>
      <MovieRow title="trending" url={endpoints.trending}/>
      <MovieRow title="top rated" url={endpoints.topRated}/>
      <MovieRow title="comedy" url={endpoints.comedy}/>
      <MovieRow title="popular" url={endpoints.popular}/>
    </>
  )
}
