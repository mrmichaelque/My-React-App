"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const ItemDetailScreen_style_1 = require("./ItemDetailScreen.style");
const ThemeContext_1 = require("../../../context/ThemeContext");
const ItemDetailScreen = ({ item }) => {
    const { theme } = (0, ThemeContext_1.useTheme)();
    const styles = react_1.default.useMemo(() => (0, ItemDetailScreen_style_1.getStyles)(theme), [theme]);
    return (item &&
        item.id && (<react_native_1.SafeAreaView style={styles.container}>
        <react_native_1.ScrollView contentContainerStyle={styles.scrollView}>
          <react_native_1.View style={styles.titleContainer}>
            <Ionicons_1.default style={styles.icon} name={item.icon}/>
            <react_native_1.Text style={styles.title}>{item.title}</react_native_1.Text>
          </react_native_1.View>
          <react_native_1.Text style={styles.description}>{item.shortDescription}</react_native_1.Text>

          <react_native_1.Text style={styles.subtitle}>Status</react_native_1.Text>
          <react_native_1.Text style={styles.description}>{item.status}</react_native_1.Text>
          <react_native_1.Text style={styles.subtitle}>Ship To</react_native_1.Text>
          <react_native_1.Text style={styles.description}>{item.shipTo}</react_native_1.Text>
          <react_native_1.Text style={styles.subtitle}>Order Total</react_native_1.Text>
          <react_native_1.Text style={styles.description}>{item.orderTotal}</react_native_1.Text>
          <react_native_1.Text style={styles.subtitle}>Order Date</react_native_1.Text>
          <react_native_1.Text style={styles.description}>{item.orderDate}</react_native_1.Text>
          <react_native_1.Text style={styles.text}>{item.longDescription}</react_native_1.Text>
        </react_native_1.ScrollView>
      </react_native_1.SafeAreaView>));
};
exports.default = ItemDetailScreen;
