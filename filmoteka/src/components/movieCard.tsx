
interface MovieProps{
    movie: IMovie
}

export function MovieCard({ movie }: MovieProps) {
    
    return <div className='movie-card'>
        <a className='movie-card__link' href='#' data-id='{{id}}'>
      <div className='movie-card__thumb'>
        <img
          className='movie-card__image'
         
          src='https://image.tmdb.org/t/p/w500{{poster_path}}'
         
          src='https://media.istockphoto.com/vectors/cat-sits-in-a-box-with-a-404-sign-page-or-file-not-found-connection-vector-id1278808623?k=20&m=1278808623&s=612x612&w=0&h=tmzYgVK5yF-dtVvW81zz-Ebpeqd6EvD38KYGRjczuiw='
          {{/if}}
          alt='Poster of {{title}} movie'
          width='100%'
          height='100%'
          loading='lazy'
        />
      </div>
      <div className='movie-card__info'>
        <h2 className='movie-card__title'>
          {{title}}
        </h2>
        <p className='movie-card__descr'>
          <span className='movie-card__genres'>{{genres}} | {{#if year}} {{year}} {{/if}}</span><span
            className='movie-card__vote'
          >{{vote}}</span>
        </p>
      </div>
    </a>

}