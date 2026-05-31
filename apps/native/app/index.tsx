import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { post } from "@repo/shared";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          (async () => {
            try {
              const payload = { title: "Hello from native", body: "Test post" };
              const res = await post("https://jsonplaceholder.typicode.com/posts", payload);
              console.log("Post response", res);
              alert("Post successful: " + JSON.stringify(res));
            } catch (err) {
              console.error(err);
              alert("Post failed: " + String(err));
            }
          })();
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
