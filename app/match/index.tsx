import { StyleSheet } from "react-native";
import { View } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export default function index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.topView}
        colors={["dodgerblue", "deepskyblue"]}
        start={[0, 1]}
        end={[0, 0]}
      >

      </LinearGradient>
      <View style={styles.bottomView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 32,
  },
  topView: {
    flex: 6,
    borderRadius: 64
  },
  bottomView: {
    flex: 1,
    backgroundColor: "orange",
  },
});
