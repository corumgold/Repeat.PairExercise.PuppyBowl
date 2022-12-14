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

export const fetchSinglePlayer = async (playerId) => {
  try {
    const player = await axios.get(`/api/players/${playerId}`);
    return player.data;
  } catch (err) {
    console.error("Couldn't find the player!");
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    await axios.post("/api/players", playerObj);
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {
    try {
      await axios.delete(`/api/players/${playerId}`)
  } catch (err) {
    console.error(err);
  }
};
