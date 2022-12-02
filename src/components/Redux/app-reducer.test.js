import appReducer, {setInitializedSuccess} from "./app-reducer";

const initialState = {
    initialized: false
};

test('expect initialized true', ()=>{
    const action = setInitializedSuccess();
    const newState = appReducer(initialState, action);

    expect(newState.initialized).toBe(true);
});
