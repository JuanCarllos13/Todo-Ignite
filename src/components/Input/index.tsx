import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface Props extends TextInputProps{}

export function Input({...rest}: Props ) {
  return <TextInput style={styles.container}  {...rest}/>;
}
