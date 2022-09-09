import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { Button, HTag, PTag, Rating, Tag } from '../components'
import { withLayout } from '../layouts/LayoutComponent'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

const Home = ({menu}: HomeProps): JSX.Element => {

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

      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory: 0})

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}