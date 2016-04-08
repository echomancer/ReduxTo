import React from 'react';
import Games from './games';
import { connect } from 'react-redux';
import { getGames } from 'api/game';

/**
 * The stuff commented out below represents what a beginner might do 
 * if they didn't understand how to use react-redux correctly
 */

const GameContainer = React.createClass({

    // getInitialState: function() {
    //     return {
    //         users: []
    //     }
    // },

    componentWillMount: function() {
        //var _this = this;
        getGames()
        // .then(function(response) {
        //     _this.setState({
        //         users: response.data
        //     })
        // })
    },

    render: function() {
        // return (
        //     <Users users={this.state.users}/>
        // )
        return (
            <Game {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        games: state.gameReducer.games
    }
}

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        onClick: (index) => {console.log('game '+i+' was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(GameContainer)
