import { cssVariables } from 'src/styles/utils/cssVariables'
import BooksContainer from './BooksContainer'
import HeaderTitle from '../common/HeaderTitle/HeaderTitle'

export default function BooksContent() {
  return (
    <div>
      <HeaderTitle
        titleText='Lista de Libros Gratuitos para aprender a Programar!'
        lineColor={cssVariables.yellow}
      />
      <p>
        Tambien te recomiendo estos recursos que puedes revisar ademas de los libros que te muestro
        aqui para que puedas aprender y conocer mucho mas! :D
      </p>
      <BooksContainer />
    </div>
  )
}
