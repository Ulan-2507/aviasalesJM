import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import FilterItem from '../filter-item';
import './filter.scss';

function Filter({ 
  filterState, 
  all,
  withoutTransfers,
  oneTransfer,
  twoTransfer,
  threeTransfer
}) {
  
  return (
      <div className="filter">
          <h3 className="filter__title">Количество пересадок</h3>
          <ul className="filter__list">
            <FilterItem 
              value="Все" 
              show={filterState.all}
              handler={all}
            />
            <FilterItem 
              value="Без пересадок" 
              show={filterState.withoutTransfers}
              handler={withoutTransfers}
            />
            <FilterItem 
              value="1 пересадка" 
              show={filterState.oneTransfer}
              handler={oneTransfer}
            />
            <FilterItem 
              value="2 пересадка" 
              show={filterState.twoTransfer}
              handler={twoTransfer}
            />
            <FilterItem 
              value="3 пересадки" 
              show={filterState.threeTransfer}
              handler={threeTransfer}
              />
          </ul>
      </div>
  );
}
const mapStateToProps = (state) => ({filterState: state});
const mapDispatchToProps = (dispatch) => {
  const { 
    all,
    withoutTransfers,
    oneTransfer,
    twoTransfer,
    threeTransfer
  } = bindActionCreators(actions, dispatch);
    return { 
      all,
      withoutTransfers,
      oneTransfer,
      twoTransfer,
      threeTransfer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);