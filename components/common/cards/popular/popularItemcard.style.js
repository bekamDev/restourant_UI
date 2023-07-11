import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";


const styles = StyleSheet.create({
  container: (selectedItem, item) => ({
    width: 250,
    height: 250,
    backgroundColor: selectedItem !== item.idMeal ? COLORS.primary : "#FFF",
    borderRadius: 10,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  
  }),
  backgroundImage:{
    width: "100%",
    height: "100%",
    borderRadius: 20,
  
  },
  logoContainer: (selectedItem, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedItem === item.idMeal ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  FoodName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
