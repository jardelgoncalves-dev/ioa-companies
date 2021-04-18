import { useState } from 'react'
import { Wrapper } from './styles'

import LogoWhiteImg from '../../assets/logo-white.png'
import { SearchBar } from '../SearchBar'

function Header({ onSearch, valueSearch }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Wrapper>
      <div className={`ioa-header__content ${expanded ? '--no-logo': ''}`}>
        <img src={LogoWhiteImg} alt="Logo" className="ioa-header__content__img" />
        <SearchBar
          placeholder="Pesquisar"
          expanded={expanded}
          value={valueSearch}
          onChange={onSearch}
          onExpand={() => setExpanded(true)}
          onClose={() => setExpanded(false)}
        />
      </div>
    </Wrapper>
  )
}

export {Header}