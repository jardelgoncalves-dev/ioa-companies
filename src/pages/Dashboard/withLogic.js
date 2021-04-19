import { useEffect, useState } from 'react'

export const withLogic = (Component) => (props) => {
  const [searchText, setSearchText] = useState('')
  const { companiesState, fetch } = props

  useEffect(() => {
    fetch(searchText)
  }, [searchText])

  const onSearch = (event) => {
    const { value } = event.target
    setSearchText(value)
  }

  const onSearchClose = () => setSearchText('')

  return (
    <Component
      {...props}
      onSearch={onSearch}
      onSearchClose={onSearchClose}
      searchText={searchText}
      companiesItems={companiesState.companies}
      isLoading={companiesState.isLoading}
    />
  )
}
