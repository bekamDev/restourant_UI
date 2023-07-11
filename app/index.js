import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons, image, SIZES } from "../constants";
import { Welcome, PopularItems } from "../components"

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />

          <PopularItems />

          <PopularItems />

         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
