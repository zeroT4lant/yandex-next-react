import FilmDetails from "@/compoments/Films/FilmDetails";
import Reviews from "@/compoments/Reviews/Reviews";
import React from "react";

//filmDetail.reviews

export default function Home() {

  const filmRating = React.useMemo(() => {//оптимизация
    //создал один раз объект, и получил ссылку
    filmDetails.reviews.reduce((sum,film) => {
      return sum + film.rating
    }, 0) / filmDetails.reviews.length
  }, [filmDetails.reviews])

  return (
    <div>
        <header />
          <FilmDetails
            title={filmDetails.title}
            genre={filmDetails.genre}
            seasonsCount={filmDetails.seasonsCount}
          />
          <Reviews 
            reviews={filmDetails.reviews}
          />
          <Recommendations/>
        <footer/>
    </div>
  )
}
