import { FunctionComponent, ReactNode } from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

interface ILayout{
  children: ReactNode
}

const LayoutComponent = ({children}: ILayout): JSX.Element => {
  return (
    <>
      <Header/>
      <div>
        <Sidebar/>
        <div>
          {children}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <LayoutComponent>
        <Component {...props} />
      </LayoutComponent>
    )
  }
}