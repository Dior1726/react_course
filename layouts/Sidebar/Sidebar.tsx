import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

interface ISidebar extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({...props}: ISidebar): JSX.Element => {
  return (
    <div {...props}>Sidebar</div>
  )
}
