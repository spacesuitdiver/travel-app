import axios from "axios";
import Auth from './Auth';

export default {
    //USER TRAVEL PROFILE
    createTravelProfile: (travellogData) => {
        return axios.post(`/api/profile/`, travellogData)
    },

    getTravelProfile: (userId) => {
        return axios.get(`/api/profile/${userId}`)
    },

    editTravelProfile: (profileData, userId) => {
        return axios.patch(`/api/profile/${userId}`, profileData)
    },

    //TRAVEL
    findAllTravel: () => {
        return axios.get("/api/travel", {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        });
    },
    createTravel: (travelData) => {
        return axios.post("/api/travel", travelData)
    },

    findOneTravel: (travelId) => {
        return axios.get(`/api/travel/${travelId}`, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        })
    },

    editTravel: (travelId, travelData) => {
        return axios.put(`/api/travel/${travelId}`, travelData)
    },

    deleteTravel: (travelId) => {
        return axios.delete(`/api/travel/${travelId}`)
    }

}
