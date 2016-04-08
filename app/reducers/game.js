import merge from 'lodash/merge'

let gameInitialState = {
    games: [],
    game: {}
};

export default function(state = gameInitialState, action) {
    switch(action.type) {
        
        case 'GET_GAMES':
            return merge({}, state, action.games);
        case 'POST_GAME':
        	return state;
        case 'GET_GAME':
        	return merge({}, state, action.game);
        case 'PUT_GAME':
        	return state;
        case 'DELETE_GAME':
        	Let newState = Object.assign({},state);
        	let removedGame = state.games.filter(function(el){el.id != state.game.id});
        	newState.games = removedGame;
        	return newState

        default:
            return state;
            
    }
}