import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";
import { useGlobalContext } from "../utils/context";

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
    <div>

    </div>
  )
}

export default Body