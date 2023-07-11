import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { categories } from "./categories";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="search food"
          />
          <View style={styles.location}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="search food"
            />
          </View>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationIcon}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {}}
        ></TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showHorizontalScrollIndicator={false}
          style={styles.overFlow}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        >
          {categories.map((category, index) => {
            let isActive = category.id == activeCategory;
            // let btnstyle = isActive ? styles.categoryBtn : styles.categoryBtn2;
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 6,
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                  }}
                  onPress={() => setActiveCategory(category.id)}
                >
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={category.image}
                  />
                </TouchableOpacity>
                <Text>{category.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Welcome;
