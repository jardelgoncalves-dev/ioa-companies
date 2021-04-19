import { useState } from 'react'
import { Wrapper } from './styles'

import LogoWhiteImg from '../../assets/logo-white.png'
import { SearchBar } from '../SearchBar'
import { Icon } from '../Icon'

function Header({
  onSearch,
  valueSearch,
  onSearchClose,
  isGoback,
  onGoBack,
  textGoBack,
}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Wrapper>
      <div
        className={`ioa-header__content ${isGoback ? '--go-back': ''} ${expanded ? '--no-logo': ''}`}>
        {!isGoback && (
          <img
            src={LogoWhiteImg}
            alt="Logo"
            className="ioa-header__content__img"
          />
        )}
        {!isGoback && (
          <SearchBar
            placeholder="Pesquisar"
            expanded={expanded}
            value={valueSearch}
            onChange={onSearch}
            onExpand={() => setExpanded(true)}
            onClose={() => {
              setExpanded(false);
              onSearchClose && onSearchClose()
            }}
          />
        )}
        {isGoback && (
          <>
            <button type="button" className="go-back-btn" onClick={onGoBack}>
              <Icon name="arrow-left" />
            </button>
            <h3 className="title-header">
              {textGoBack}
            </h3>
          </>
        )}
      </div>
    </Wrapper>
  )
}

export {Header}