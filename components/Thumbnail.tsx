import { Movie } from "../typings"
import Image from 'next/image'
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"
import ImageWithFallback from "./ImageWithFallback"
import { DocumentData } from "firebase/firestore"

interface Props {
    movie: Movie | DocumentData
}

function Thumbnail({movie}: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <div className="absolute w-full h-full opacity-0 hover:opacity-100 z-40"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
        <p className="absolute inset-x-0 bottom-0 text-shadow-md text-bold text-md md:text-lg p-1 bg-gradient-to-r from-[#2a2a2a]/30 to-[#2a2a2a]/0 ">
          {movie.name ? movie.name: movie.title}
        </p>
      </div>
          <ImageWithFallback src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
              }`} fallbackSrc="https://www.svgrepo.com/show/24585/evernote.svg"
          />
    </div>
  )
}

export default Thumbnail