import React from 'react';
import './view.less';
import { connect } from 'react-redux';
import changeView from '../../actions/view.jsx';
import { bindActionCreators } from 'redux';

class View extends React.Component {

    addClassGrid = () => {
        return `view__item view__item_grid ${this.props.gridIsEnabled === true ? 'view__item_grid-active' : ''}`;
    }

    addClassTable = () => {
        return `view__item view__item_table ${this.props.gridIsEnabled === false ? 'view__item_table-active' : ''}`;
    }

    switcherGrid = () => {
        this.props.changeView(true)
    }

    switcherTable = () => {
        this.props.changeView(false)
    }

    render() {
        return(
            <ul className='view'>
                <li className={this.addClassGrid()} onClick={this.switcherGrid}></li>
                <li className={this.addClassTable()} onClick={this.switcherTable}></li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    gridIsEnabled: state.gridIsEnabled,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeView
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);