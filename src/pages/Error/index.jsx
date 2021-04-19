import { Wrapper } from './styles'

import { ReactComponent as ReactImage404 } from '../../assets/image-404.svg'

function PageError() {
  return (
    <Wrapper>
      <h1>Ops...</h1>
      <span>Ocorreu um erro ao carregar esta pagina</span>
      <ReactImage404 />
    </Wrapper>
  )
}

export default PageError