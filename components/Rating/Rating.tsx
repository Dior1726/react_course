import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import { useEffect, useState, KeyboardEvent } from 'react'
import StarIcon from './Star.svg'
import cn from 'classnames'

export const Rating = ({isEdiatble = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, i: number) => {
      return (  
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEdiatble
          })}
          onMouseEnter={() => changeDisplayHandler(i+1)}
          onMouseLeave={() => changeDisplayHandler(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEdiatble ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEdiatble && handleSpace(i+1, e)}
          />
        </span>
      )
    })

    setRatingArr(updatedArr)
  } 

  const changeDisplayHandler = (i: number) => {
    if(!isEdiatble) {
      return
    }
    constructRating(i)
  }

  const onClick = (i: number) => {
    if (!isEdiatble || !setRating) {
      return
    }
    setRating(i)
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != 'Space' || !setRating) {
      return
    } 
    setRating(i)
  }
  
  return (
    <div {...props}>
      {ratingArr.map((r, i) => (<span key={i}> {r} </span>))}
    </div>
  )
}