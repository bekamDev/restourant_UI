import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,

    alignItems: "center",
    borderRadius: SIZES.medium,
    borderColor: "gray",
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    flex: 1,
    marginLeft: 1,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: COLORS.gray,
  },
  location:{
    flexDirection: "row",
    alignItems:"center",
    border: 0,
    borderleft: 2,
    paddingLeft: 2,
    borderLeftColor: "gray",
  },

  locationIcon:{
    height: 30,
    width: 30,
    borderLeftColor: "gray",
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },

  overFlow: {
    overflow: "visible",
  },

  categoryBtn: {
    backgroundColor: "#A9A9A9",
  },
  categoryBtn2: {
    backgroundColor: "#d3d3d3",
  },
  categoryText: {
    fontWeight: "bold",
  },
});

export default styles;
