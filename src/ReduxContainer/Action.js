export const GET_HOME_VIDEOS = "GET_HOME_VIDEOS"
export const GET_TRENDING_VIDEOS = "GET_TRENDING_VIDEOS"

const HOME_VIDEO_URL = "https://apis.ccbp.in/videos/all?search="
const TRENDING_VIDEO_URL = "https://apis.ccbp.in/videos/trending"
const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"

export const getHomeVideos = () => {
    try{
        return async dispatch => {
            const result = await fetch(HOME_VIDEO_URL, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                  }
            });
            const json = await  result.json()
            if (json) {
                dispatch ({ 
                type: GET_HOME_VIDEOS,
                payload: json})
            } else {
                console.log('Unable to fetch!')
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}

export const getTrendingVideos = () => {
    try{
        return async dispatch => {
            const result = await fetch(TRENDING_VIDEO_URL, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                  }
            });
            const json = await  result.json()
            if (json) {
                dispatch ({ 
                type: GET_TRENDING_VIDEOS,
                payload: json})
            } else {
                console.log('Unable to fetch!')
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}