import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { withLogic } from "./withLogic";

import * as companiesActions from '../../store/actions/companies'

import { Wrapper } from './styles'

function Dashboard({
  onSearch,
  onSearchClose,
  searchText,
  companiesItems,
  isLoading,
}) {
  return (
    <Wrapper>
      <Header onSearch={onSearch} valueSearch={searchText} onSearchClose={onSearchClose} />
      <Container>
        <>
          {(companiesItems || []).map(company => (
            <Card key={company.id} item={company} />
          ))}

          {!(companiesItems || []).length &&  (
            <div className="info-text">
              {!searchText && <span>Clique na busca para iniciar.</span>}
              {searchText && !isLoading && (
                <span className="empty">
                  Nenhuma empresa foi encontrada para a busca realizada.
                </span>
              )}
            </div>
          )}
          
        </>
      </Container>
    </Wrapper>
  )
}


const mapStateToProps = (state) => ({
  companiesState: state.companies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...companiesActions, }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLogic(Dashboard));
