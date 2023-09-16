import { View } from "react-native";
import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { Colors } from "../constants/colors";

function AddPlace() {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
}

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray700,
  },
});
