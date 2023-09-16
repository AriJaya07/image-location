import { View } from "react-native";
import { StyleSheet } from "react-native";
import PlaceList from "../components/Places/PlacesList";
import { Colors } from "../constants/colors";

function AllPlaces() {
  return (
    <View style={styles.Container}>
      <PlaceList />
    </View>
  );
}

export default AllPlaces;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.gray700,
  },
});
