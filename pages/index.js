import Link from 'next/link'
import Theme from '../components/Theme'
import ms from 'ms'
import fs from 'fs'

export default function Home ({ postFile }) {
  return (
    <Theme>
      <div className='post-list'>
        {postFile.map(post => (
          <div key={post.slug} className='post-link'>
            <Link href='/post/[slug]' as={`/post/${post.slug}`}>
              <a>

                {/* <div className='time'>{ms(Date.now() - post.createdAt, { long: true })} ago</div> */}
                <div className='title'>{post.title}</div>
              </a>
            </Link>
          </div>

        ))}
      </div>
    </Theme>
  )
}

export async function getStaticProps () {
  const mdFiles = await fs.promises.readdir('data')

  console.log('mdFils', mdFiles)
  const postFile = mdFiles.map(file => {
    const slug = file.replace((/.md$/,''))
    const [yr, month, date, ...rest] = slug.split('-')

    const createdAt =(new Date(`${yr} ${month} ${date}`)).getTime()
    const title = rest.join( ' ')


    return {
      slug,
      createdAt,
      title
    }
  })

  return {
    props:{
      postFile
    }
  }
}
