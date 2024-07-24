import React, { useState } from 'react'
import Hero from '../Components/Hero/Hero'
import MovieRow from '../Components/MovieRow/MovieRow'
import endpoints from '../services/movieServices'

export default function Home() {


  return (
    <>
      <Hero />
      <MovieRow color='red' title="upcoming" url={endpoints.upcoming}/>
      <MovieRow color='blue' title="trending" url={endpoints.trending}/>
      <MovieRow color='green' title="top rated" url={endpoints.topRated}/>
      <MovieRow color='yellow' title="comedy" url={endpoints.comedy}/>
      <MovieRow color='cyan' title="popular" url={endpoints.popular}/>
    </>
  )
}
