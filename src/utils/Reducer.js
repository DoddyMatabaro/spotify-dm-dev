import { reducerCases } from "./Constants";
export const initialState = {
  theme : localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme',
  isSidebarOpen : false,
  token: null,
  searchKey: "Gims",
  userInfo: null,
  loading: false, 
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "5gRW44T7aQPLJR73SkHogt",
};

const reducer = (state, action) => {
    switch (action.type) {
       case reducerCases.OPEN_SIDE_BAR:
        return {
          ...state,
          isSidebarOpen: action.value,
        };
         case reducerCases.OPEN_SIDE_BAR:
        return {
          ...state,
          isSidebarOpen: action.value,
        };
        case reducerCases.SET_LOADING:
          return {
            ...state,
            loading: action.notLoading,
          };
        case reducerCases.SET_SEARCHKEY:
          return {
            ...state,
            seachKey: action.newSearchKey,
          };
      case reducerCases.TOGGLE_THEME:
            return {
              ...state,
              theme : action.value,
            };
      case reducerCases.SET_TOKEN:
        return {
          ...state,
          token: action.token,
        };
      case reducerCases.SET_USER:
        return {
          ...state,
          userInfo: action.userInfo,
        };
      case reducerCases.SET_PLAYLISTS:
        return {
          ...state,
          playlists: action.playlists,
        };
      case reducerCases.SET_PLAYING:
        return {
          ...state,
          currentPlaying: action.currentPlaying,
        };
      case reducerCases.SET_PLAYER_STATE:
        return {
          ...state,
          playerState: action.playerState,
        };
      case reducerCases.SET_PLAYLIST:
        return {
          ...state,
          selectedPlaylist: action.selectedPlaylist,
        };
      case reducerCases.SET_PLAYLIST_ID:
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };
      default:
        return state;
    }
  };
  
  export default reducer;