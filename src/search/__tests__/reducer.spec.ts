import searchReducer, { initialState } from "../reducer";
import { SET_SEARCH_ENGINE_OPTION, SET_SEARCH_QUERY } from "../actions";
import { ENGINE_OPT_QUICKTHOUGHT } from "../../init/ui/custom/SearchEngineSelection";

describe("Locale Reducer", () => {
    it(`should return same initial state when passing unsupported action type`, function() {
        expect(searchReducer(initialState, { type: "unsupported" })).toEqual(
            initialState
        );
    });

    it(`should return passed query and same initial search engine option when calling ${SET_SEARCH_QUERY}`, function() {
        const query = "roof";
        expect(
            searchReducer(initialState, {
                type: SET_SEARCH_QUERY,
                payload: { query },
            })
        ).toEqual({
            query,
            searchEngineOption: initialState.searchEngineOption,
        });
    });

    it(`should return passed query and same initial query when calling ${SET_SEARCH_ENGINE_OPTION}`, function() {
        const query = "roof";
        expect(
            searchReducer(initialState, {
                type: SET_SEARCH_ENGINE_OPTION,
                payload: { searchEngineOption: ENGINE_OPT_QUICKTHOUGHT },
            })
        ).toEqual({
            query: initialState.query,
            searchEngineOption: ENGINE_OPT_QUICKTHOUGHT,
        });
    });
});
