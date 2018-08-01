import axios from "axios";

export default {
    //USER TRAVEL PROFILE
    createTravelProfile: (travellogData) => {
        return (axios.post(`/api/profile/`, travellogData))
    },

    getTravelProfile: (userId) => {
        return (axios.get(`/api/profile/${userId}`))
    },

    editTravelProfile: (profileData, userId) => {
        return (axios.patch(`/api/profile/${userId}`, profileData))
    },

//TRAVEL
    findAllTravel: () =>{
        return (axios.get("/api/travel/"))
    },
    createTravel: (travelData) => {
        return (axios.post("/api/travel", travelData))
    },

    findOneTravel: (travelId) =>{
        return (axios.get(`/api/travel/${travelId}`))
    },

    editTravel: (travelData, userId) => {
        return (axios.patch(`/api/travel/${userId}`, travelData))
    }

    //notfinished
    // deleteTravel: (travelData, userId) => {
    //     return (axios.patch(`/api/travel/${userId}`, travelData))
    // }
}