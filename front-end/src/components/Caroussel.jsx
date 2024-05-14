import songs from './songs'

function Caroussel() {
  return (
    <div className='flex items-center justify-center'>
      <ul>
        {
            songs.map((song)=>(
                <li key ={song.id} className="">{song.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Caroussel
