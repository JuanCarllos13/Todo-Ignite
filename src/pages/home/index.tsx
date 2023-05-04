import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import SomeImg from "../../../assets/some.svg";
import { Count } from "../../components/Count";
import { Card } from "../../components/Card";
import ClipboardImg from "../../../assets/Clipboard.svg";
import { useState } from "react";
import { TaskGetAll } from "../../storage/task/taskGetAll";
import { createTask } from "../../storage/task/createTask";
import { RemoveTask } from "../../storage/task/removeTaskById";
import { updateTask } from "../../storage/task/updateTaskByContent";
import { TaskDTO } from "../../dtos/taskDTO";
import { tags } from "react-native-svg/lib/typescript/xml";

export function Home() {
  const [list, setList] = useState<TaskDTO[]>([]);
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  async function DeleteCard(task: TaskDTO) {
    try {
      const data = await RemoveTask(task);

      setList(data!);
      setFocus(!focus);
    } catch (err) {}
  }

  async function UpdateChecked(task: TaskDTO) {
    try {
      const data = await updateTask(task);
      setList(data!);
      setFocus(!focus);
    } catch (err) {}
  }

  async function AddNewCard(text: string) {
    try {
      const data = await createTask({
        content: text,
        isCompleted: false,
      });

      setList(data!);
      setText("");
      setFocus(!focus);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchTask() {
    try {
      const data = await TaskGetAll();
      setList(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    const aux = list.filter((item) => item.isCompleted);
    setTasksCompleted(aux.length);
  }, [list]);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.containerInput}>
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => AddNewCard(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => AddNewCard(text)}
          >
            <SomeImg width={16} height={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfo}>
          <Count count={list?.length ?? 0} text="Criados" fontColor="#4EA8DE" />
          <Count count={tasksCompleted} text="Concluídos" fontColor="#8284FA" />
        </View>

        <FlatList
          data={list}
          renderItem={({ item }) => (
            <Card
              deleteCard={() => DeleteCard(item)}
              updateCard={() => UpdateChecked(item)}
              data={item}
            />
          )}
          ListEmptyComponent={() => {
            return (
              <View style={styles.notContainer}>
                <ClipboardImg />
                <Text style={styles.notTaskText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textCreateTask}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            );
          }}
          style={styles.flastList}
        />
      </View>
    </View>
  );
}
