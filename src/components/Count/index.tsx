import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  fontColor?: string;
  text: string;
  count: number;
}

export function Count({ count, text, fontColor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo,{ color: fontColor }]}>{text}</Text>

      <View style={styles.circle}>
        <Text style={styles.textCount}>{count}</Text>
      </View>
    </View>
  );
}
