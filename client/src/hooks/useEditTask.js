import { editTask } from "../utils";
import { useSelector,useDispatch } from "react-redux";

const useEditTask = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.tasks.editStatus === 'loading');
    const error = useSelector((state) => state.tasks.error);

    const handleEditTask = async ({ taskID, updatedTaskData }) => {
        dispatch(editTask({ taskID, updatedTaskData }));
    }
        return { isLoading, error, handleEditTask };

}

export default useEditTask;