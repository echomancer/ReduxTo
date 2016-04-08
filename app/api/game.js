import axios from 'axios';
import store from 'store';

let apiAddress = 'http://localhost:3000/games'

export function getGames() {
    return axios.get(apiAddress).then(function(response) {

        store.dispatch({
            type: 'GET_GAMES',
            games: response.data
        })

        return response;

    }).catch(function(err) {
        console.error(err);
    });
}

export function postGame(){
	return axious.post(apiAddress,store.game).then(function(response){
		store.dispatch({
			type: "POST_GAME",
			game: response.data
		})

		return response;
	}).catch(function(err){
		console.error(err);
	});
}

export function getGame(id){
	return axios.get(apiAddress+'/'+id).then(function(response){
		store.dispatch({
			type: 'GET_GAME',
			game: response.data
		})

		return response;
	}).catch(function(err){
		console.error(err);
	});
}

export function putGame(id){
	return axios.put(apiAddress+'/'+id,store.game).then(function(response){
		store.dispatch({
			type: "PUT_GAME",
			game: response.data
		})

		return response;
	}).catch(function(err){
		console.error(err);
	});
}

export function deleteGame(id){
	return axios.delete(apiAddress+'/'+id,store.game).then(function(response){
		store.dispatch({
			type: "DELETE_GAME",
			game: response.data
		})

		return response;
	}).catch(function(err){
		console.error(err);
	});
}

