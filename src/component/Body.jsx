import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import { useGlobalContext } from "../utils/context";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer"

const Body = () => {
  const [{ token }, dispatch] = useGlobalContext();

    useEffect(() => {
        const getUserInfo = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            },
        });
        const userInfo = {
            userId: data.id,
            userUrl: data.external_urls.spotify,
            name: data.display_name,
            profile: data.images[0].url,
            type: data.type + " " + data.product,
        };
        dispatch({ type: reducerCases.SET_USER, userInfo });
        };
        getUserInfo();
    }, [dispatch, token]);

    useEffect(() => {
        const getPlaybackState = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
            headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            },
        });
        dispatch({
            type: reducerCases.SET_PLAYER_STATE,
            playerState: data.is_playing,
        });
        };
        getPlaybackState();
    }, [dispatch, token]);

  return (
    <div className="spotify-container">
        <div className="spotify__body">
                <Header/>
            <div className="body" >
                    <div className="body__contents">
                        <SideBar/>
                        Body    
                    </div>

            </div>
        </div>
            <div className="spotify__footer">
                <Footer/>
            </div>
    </div>
  )
}

export default Body