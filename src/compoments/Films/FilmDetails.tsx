import { useCount } from '@/hooks/useCount';
import React from 'react'
import FilmInfo from '../FilmInfo/FilmInfo';

interface Props {
  title : string,
  genre: 'comedy' | 'horror',
  seasonsCount: number;
}

const FilmDetails: React.FC<Props> = ({title,genre,seasonsCount}) => {
  let {count,increment,decrement} = useCount(0)

  React.useEffect(() => {
    
  },[count]);//в квадратных скобках зависимости от которых идёт обновление

  return (
    <div>
      <FilmInfo
        title={title}
        genre={genre}
        seasonsCount={seasonsCount}
      />
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default FilmDetails