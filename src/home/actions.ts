import {
    PostSearchPayload,
    SearchActions,
    SearchEngineOptionPayload,
    SearchQueryPayload,
} from "./types";

export const SET_SEARCH_QUERY: SearchActions = "SET_SEARCH_QUERY";
export const dispatchSetSearchQuery = ({ query }: SearchQueryPayload) => ({
    type: SET_SEARCH_QUERY,
    payload: {
        query,
    },
});

export const SET_SEARCH_ENGINE: SearchActions = "SET_SEARCH_ENGINE";
export const dispatchSetSearchEngine = ({
    searchEngineOption,
}: SearchEngineOptionPayload) => ({
    type: SET_SEARCH_ENGINE,
    payload: {
        searchEngineOption,
    },
});

export const POST_SEARCH: SearchActions = "POST_SEARCH";
export const dispatchPostSearch = ({
    query,
    searchEngineOption,
}: PostSearchPayload) => ({
    type: POST_SEARCH,
    payload: {
        query,
        searchEngineOption,
    },
});
