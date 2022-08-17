import axios from "axios";

//This runs the get request from players.js
export const fetchAllPlayers = async () => {
  try {
    const players = await axios.get("/api/players");
    return players.data;
  } catch (err) {
    console.error("Couldn't fetch the players!");
  }
};

export const fetchSinglePlayer = async (playerId) => {};

export const addNewPlayer = async (playerObj) => {};

export const removePlayer = async (playerId) => {};
