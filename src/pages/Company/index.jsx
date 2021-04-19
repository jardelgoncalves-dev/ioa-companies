import { Header } from '../../components/Header'
import { withLogic } from './withLogic'

import { ReactComponent as ReactImage404 } from '../../assets/image-404.svg'

import { Wrapper } from './styles'

function Company({
  notFound,
  company,
  goBack
}) {
  return (
    <Wrapper>
      <Header
        isGoback
        textGoBack={notFound ? 'Voltar' :company.enterprise_name}
        onGoBack={goBack}
      />
      {notFound && (
        <div className="result-not-found">
          <ReactImage404 />
        </div>
      )}
      {!notFound && company && (
        <div className="company__content">
          <img src={`https://empresas.ioasys.com.br${company.photo}`} alt={company.enterprise_name} className="company__content__img" />
          <p className="company__content__description">
            {company.description}
          </p>
        </div>
      )}
    </Wrapper>
  )
} 

export default withLogic(Company)