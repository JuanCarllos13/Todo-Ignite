import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { TaskGetAll } from "./taskGetAll";
import { TaskDTO } from "../../dtos/taskDTO";

export async function RemoveTask(content: TaskDTO) {
  try {
    const storageTasks = await TaskGetAll();

    const tasks = storageTasks.filter(
      (task: TaskDTO) => task.content !== content.content
    );

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks));

    return tasks;
  } catch (error) {}
}
