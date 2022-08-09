export const playlistReducer = (state, action) => {
  if (action.type === "Playlists") {
    return action.payload;
  }

  if (action.type === "Playlist") {
    return state.map((playlist) =>
      playlist._id === action.payload._id ? action.payload : playlist
    );
  }
};
