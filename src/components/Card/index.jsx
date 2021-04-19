import { Wrapper } from './styles'

function Card({
  item,
}) {
  return (
    <Wrapper to={`/dashboard/company/${item.id}`}>
      <div className="ioa-card">
        <img src={`https://empresas.ioasys.com.br${item.photo}`} alt={item.enterprise_name} className="ioa-card__img" />
        <div className="ioa-card__info">
          <h2 className="ioa-card__info__name">{item.enterprise_name}</h2>
          <h4 className="ioa-card__info__operate">{item.enterprise_type.enterprise_type_name}</h4>
          <span className="ioa-card__info__country">{item.country}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export {Card} 