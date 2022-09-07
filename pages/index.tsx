import type { NextPage } from 'next'
import { useState } from 'react'
import { Button, HTag, PTag, Rating, Tag } from '../components'
import { withLayout } from '../layouts/LayoutComponent'

const Home: NextPage = () => {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <HTag tag='h1' >Text</HTag>
      <Button appearance='primary'>Button</Button>
      <Button arrow='right' appearance='ghost'>Button</Button>
      <PTag size='m'> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eveniet  accusantium placeat cupiditate cum sed consequatur sequi distinctio delectus, velit nulla veritatis id maiores laboriosam quia! Alias nesciunt non voluptas. 
      </PTag> 
      <Tag color='grey' size='m' >Hello</Tag>
      <Tag color='green' size='s' >Hello</Tag>
      <Tag color='ghost' size='m' >Hello</Tag>
      <Tag color='red' size='s' >Hello</Tag>
      <Rating rating={rating} setRating={setRating} isEdiatble={true} />
    </>
  )
}

export default withLayout(Home)
