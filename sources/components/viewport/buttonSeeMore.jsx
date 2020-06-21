import React from 'react';
import './buttonSeeMore.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ButtonSeeMore extends React.Component {

    render() {
        return (
            <div className='buttonSeeMore'> 
                <span className='buttonSeeMore__text'> See more</span>
                <span className='buttonSeeMore__arrow'>❯</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSeeMore);