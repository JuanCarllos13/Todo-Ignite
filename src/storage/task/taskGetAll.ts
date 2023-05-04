import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";

export async function TaskGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw Error;
  }
}
