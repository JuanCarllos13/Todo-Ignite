import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#333333",
    marginBottom: 8
  },
  buttonCheck: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progress: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  progressChecked: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#5E60CE'
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#F2F2F2',
    fontWeight: '400',

  }
});
