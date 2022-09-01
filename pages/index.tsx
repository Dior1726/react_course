import type { NextPage } from 'next'
import Image from 'next/image'
import { Button, HTag, PTag } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <HTag tag='h1' >Text</HTag>
      <Button appearance='primary'>Button</Button>
      <Button arrow='right' appearance='ghost'>Button</Button>
      <PTag size='m'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eveniet accusantium placeat cupiditate cum sed consequatur sequi distinctio delectus, velit nulla veritatis id maiores laboriosam quia! Alias nesciunt non voluptas. </PTag>
    </div>
  )
}

export default Home
