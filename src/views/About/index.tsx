import Head from 'src/components/Head/Head'
import AboutContent from 'src/components/AboutContent/AboutContent'

export default function About() {
  return (
    <main>
      <Head
        title='Blog ❄ | Saber mas acerca de est blog'
        description='Conoce mas acerca de este blog y su proposito! :D'
        keyWords='Acerca de About Frontend Web Development Javascript React HTML CSS'
      />
      <AboutContent />
    </main>
  )
}
