import {
    dispatchSetSearchQuery,
    dispatchSetSearchEngine,
    dispatchPostSearch,
    SET_SEARCH_QUERY,
    SET_SEARCH_ENGINE,
    POST_SEARCH,
} from "../actions";
import { ENGINE_OPT_ELASTIC_SEARCH } from "../../init/ui/custom/SearchEngineSelection";

describe("API Actions", () => {
    const query = "roof";
    const searchEngineOption = ENGINE_OPT_ELASTIC_SEARCH;

    it(`should return action with type ${SET_SEARCH_QUERY} and payload with passed "query"`, function() {
        expect(dispatchSetSearchQuery({ query })).toEqual({
            type: SET_SEARCH_QUERY,
            payload: {
                query,
            },
        });
    });

    it(`should return action with type ${SET_SEARCH_ENGINE} and payload with passed "searchEngineOption"`, function() {
        expect(dispatchSetSearchEngine({ searchEngineOption })).toEqual({
            type: SET_SEARCH_ENGINE,
            payload: {
                searchEngineOption,
            },
        });
    });

    it(`should return action with type ${POST_SEARCH} and payload with passed "query" and "searchEngineOption"`, function() {
        expect(dispatchPostSearch({ query, searchEngineOption })).toEqual({
            type: SET_SEARCH_ENGINE,
            payload: {
                query,
                searchEngineOption,
            },
        });
    });
});
