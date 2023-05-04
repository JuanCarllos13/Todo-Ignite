import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { TaskDTO } from "../../dtos/taskDTO";

interface Props {
  data: TaskDTO;
  deleteCard: () => void;
  updateCard: () => void;
}

export function Card({ deleteCard, updateCard, data }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={updateCard}
        style={data.isCompleted ? styles.progressChecked : styles.progress}
      >
        {data.isCompleted && (
          <Ionicons name="ios-checkmark" size={20} color="white" />
        )}
      </TouchableOpacity>

      <View style={styles.containerText}>
        <Text style={styles.text}>{data.content}</Text>
      </View>

      <TouchableOpacity onPress={deleteCard}>
        <Ionicons name="trash-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
