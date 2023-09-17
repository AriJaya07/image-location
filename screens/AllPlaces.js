import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import PlaceList from "../components/Places/PlacesList";
import { Colors } from "../constants/colors";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return (
    <View style={styles.Container}>
      <PlaceList places={loadedPlaces} />
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
