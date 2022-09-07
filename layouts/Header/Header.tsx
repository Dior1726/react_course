import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

interface IHeader extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({...props}: IHeader): JSX.Element => {
  return (
    <div {...props}>Header</div>
  )
}
