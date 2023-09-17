import { View } from "react-native";
import { StyleSheet } from "react-native";

import PlaceForm from "../components/Places/PlaceForm";
import { Colors } from "../constants/colors";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPleaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return (
    <View style={styles.container}>
      <PlaceForm onCreatePlace={createPleaceHandler} />
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
