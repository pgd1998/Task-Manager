export const fetchTasksBegin = () => ({
    type: 'FETCH_TASKS_BEGIN',
});

export const fetchTasksSuccess = (tasks) => ({
    type: 'FETCH_TASKS_SUCCESS',
    payload: { tasks },
});

export const fetchTasksFailure = (error) => ({
    type: 'FETCH_TASKS_FAILURE',
    payload: { error },
});