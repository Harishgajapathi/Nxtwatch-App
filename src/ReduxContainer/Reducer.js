import { GET_TRENDING_VIDEOS, GET_HOME_VIDEOS } from "./Action";

const initialState = {
    homeVideos:[],
    trendingVideos: [],
}

function videoReducer(state= initialState, action){
    switch(action.type){
        case GET_HOME_VIDEOS:
            return {...state, homeVideos: action.payload};
        case GET_TRENDING_VIDEOS:
            return {...state, trendingVideos: action.payload};
        default:
            return state;
    }
}

export default videoReducer