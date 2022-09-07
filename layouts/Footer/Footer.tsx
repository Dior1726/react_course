import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

interface IFooter extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({...props}: IFooter): JSX.Element => {
  return (
    <div {...props}>Footer</div>
  )
}