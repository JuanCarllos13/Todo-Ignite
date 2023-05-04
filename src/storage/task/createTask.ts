import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { TaskGetAll } from "./taskGetAll";
import { TaskDTO } from "../../dtos/taskDTO";

export async function createTask(content: TaskDTO) {
  try {
    const storageTasks = await TaskGetAll();

    const taskAlreadyExists = await storageTasks.includes(content.content);

    if (taskAlreadyExists) {
      throw new Error("Já é existe esse tarefa");
    }

    await AsyncStorage.setItem(
      TASK_COLLECTION,
      JSON.stringify([...storageTasks, content])
    );

    return [...storageTasks, content];
  } catch (error) {}
}
