import { useRouter } from "next/router"
import Link from "next/link"
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  text: string;
  href: string;
};

const style: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}




export const ActiveLink: React.FC<Props> = ({ text, href }) => {

  const { asPath } = useRouter()


  return (
    <Link href={ href }>
      <a style= { asPath === href ? style : undefined }> { text } </a>
    </Link>
  )
}
