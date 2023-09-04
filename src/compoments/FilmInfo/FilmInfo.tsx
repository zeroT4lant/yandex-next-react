import React from 'react'

interface Props {
    title : string,
    genre: 'comedy' | 'horror',
    seasonsCount: number;
}

const FilmInfo : React.FC<Props> = ({title,genre,seasonsCount}) => {
    return (
        <>
            <p>{title || 'Unlnown Film'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нету'}</p>
        </>
    )
}

export default FilmInfo