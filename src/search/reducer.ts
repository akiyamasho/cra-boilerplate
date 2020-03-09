import {
    PostSearchPayload,
    SearchEngineOptionPayload,
    SearchQueryPayload,
} from "./types";
import { ENGINE_OPT_ELASTIC_SEARCH } from "../init/ui/custom/SearchEngineSelection";
import { SET_SEARCH_ENGINE_OPTION, SET_SEARCH_QUERY } from "./actions";

export const initialState: PostSearchPayload = {
    query: "",
    searchEngineOption: ENGINE_OPT_ELASTIC_SEARCH,
};

const searchReducer = (
    state: PostSearchPayload = initialState,
    {
        type,
        payload,
    }: { type: string; payload: SearchQueryPayload | SearchEngineOptionPayload }
) => {
    switch (type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: payload.query,
            };
        case SET_SEARCH_ENGINE_OPTION:
            return {
                ...state,
                searchEngineOption: payload.searchEngineOption,
            };
        default:
            return state;
    }
};

export default searchReducer;
