import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'
import styles from './Footer.module.css'
import cn from 'classnames'

interface IFooter extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({className, ...props}: IFooter): JSX.Element => {

  return (
    <div {...props} className={cn(className, styles.footer)}>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
    </div>
  )
}