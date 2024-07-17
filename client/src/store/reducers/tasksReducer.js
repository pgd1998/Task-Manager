const initialState = {
    isLoading: false,
    tasks: [],
    error: null,
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS_BEGIN':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                tasks: action.payload.tasks,
            };
        case 'FETCH_TASKS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                tasks: [],
            };
        default:
            return state;
    };
};

export default tasksReducer;