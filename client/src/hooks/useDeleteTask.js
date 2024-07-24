import { deleteTask } from "../utils";
import { useDispatch, useSelector } from "react-redux";

const useDeleteTask = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.tasks.deleteStatus === 'loading');
    const error = useSelector((state) => state.tasks.error);

    const handleDeleteTask = async (taskID) => {
        dispatch(deleteTask(taskID))
    }

    return { isLoading, error, handleDeleteTask };

}

export default useDeleteTask;