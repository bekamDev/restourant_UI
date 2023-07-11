import {
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
} from "react-native";
import { images } from "../../../../constants";
import styles from "./popularItemcard.style";

const PopularItemsCard = ({ item, selectedItem, handleCardpress }) => {
  return (
    <>
      <View style={styles.container(selectedItem, item)}>
        <ImageBackground
          source={images.bugga1}
          resizeMode="cover"
          onPress={() => handleCardpress(item)}
          style={styles.backgroundImage}
        >
          <TouchableOpacity style={styles.logoContainer(selectedItem, item)}>
            <Image
              source={images.bugga1}
              resizeMode="cover"
              style={styles.logoImage}
            />
          </TouchableOpacity>
          <Text>{item.lable}</Text>
        </ImageBackground>
      </View>
    </>
  );
};

export default PopularItemsCard;
