import React from 'react'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionShows: Movie[]
  comedyShows: Movie[]
  mysteryShows: Movie[]
  romanceShows: Movie[]
  documentaries: Movie[]
}

const Shows = ( {
    actionShows,
    comedyShows,
    documentaries,
    mysteryShows,
    romanceShows,
    topRated,
    trendingNow,
  }:Props ) => {


    const { logout, loading } = useAuth()

    const showModal = useRecoilValue(modalState)

    if (loading) return null

    return (
    <div>
        <Header/>
        <main className='relative mt-24 pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <section className='md:space-y-24'>
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Shows" movies={actionShows} />
            <Row title="Comedy Shows" movies={comedyShows} />
            <Row title="Mystery Shows" movies={mysteryShows} />
            <Row title="Romance Shows" movies={romanceShows} />
            <Row title="Documentaries" movies={documentaries} />
        </section>
        </main>
        {showModal && <Modal/>}
    </div>
    )
}

export default Shows


export const getServerSideProps = async () => {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionShows,
      comedyShows,
      mysteryShows,
      romanceShows,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchTvNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTvTrending).then((res) => res.json()),
      fetch(requests.fetchTvTopRated).then((res) => res.json()),
      fetch(requests.fetchTvActionMovies).then((res) => res.json()),
      fetch(requests.fetchTvComedyMovies).then((res) => res.json()),
      fetch(requests.fetchTvHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchTvRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchTvDocumentaries).then((res) => res.json()),
    ])
  
    return {
      props: {
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionShows: actionShows.results,
        comedyShows: comedyShows.results,
        mysteryShows: mysteryShows.results,
        romanceShows: romanceShows.results,
        documentaries: documentaries.results,
      },
    }
  }