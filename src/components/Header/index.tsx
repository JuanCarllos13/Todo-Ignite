import { Text, View } from "react-native";
import { styles } from "./styles";

import LogoImg from "../../../assets/Logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoImg />
    </View>
  );
}
