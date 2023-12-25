"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = void 0;
const react_native_1 = require("react-native");

const getStyles = (theme) => react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
});

exports.getStyles = getStyles;
