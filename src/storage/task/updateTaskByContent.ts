import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { TaskGetAll } from "./taskGetAll";
import { TaskDTO } from "../../dtos/taskDTO";

export async function updateTask(content: TaskDTO) {
  try {
    const storageTasks = await TaskGetAll();

    const tarefaIndex = storageTasks.findIndex(
      (task: TaskDTO) => task.content === content.content
    );
    if (tarefaIndex !== -1) {
      storageTasks[tarefaIndex].isCompleted = !content.isCompleted;
    }
    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(storageTasks));

    return storageTasks;
  } catch (error) {}
}
