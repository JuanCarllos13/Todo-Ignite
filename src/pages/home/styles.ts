import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    marginTop: -24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  button: {
    backgroundColor: "#1E6F9F",
    padding: 19,
    borderRadius: 6,
  },
  content: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
  },
  containerInfo: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  flastList: {
    marginTop: 20,
  },
  notContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 208,
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  notTaskText: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center'
  },
  textCreateTask: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '700',
  }
});
