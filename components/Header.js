import Link from 'next/link'
import styled from 'styled-components'

const H2 = styled.div`
  font-size: 10px;
  font-style:inherit;
  font-weight: 600;

  background-color: #91eab4;
  padding: 2em;
  >a{
    font-size: 1.8em;
    color: #131e27;
  }
  
`

export default function Header () {
  return (
    <H2>
      <Link href='/'>
        <a className='title'>My Blog</a>
      </Link>
    </H2>
  )
}
