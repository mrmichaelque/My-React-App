"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = void 0;
const react_native_1 = require("react-native");
const app_styles_1 = require("../../../app.styles");
const getStyles = (theme) => react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
        backgroundColor: theme.colors.background,
    },
    scrollView: {
        marginHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: theme.colors.background,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    icon: Object.assign(Object.assign({}, app_styles_1.appStyles.icon), { fontSize: app_styles_1.FONTSIZE.XXLARGE, paddingRight: 5, color: theme.colors.text }),
    title: Object.assign(Object.assign({}, app_styles_1.appStyles.title), { fontSize: app_styles_1.FONTSIZE.XXLARGE, color: theme.colors.text }),
    subtitle: Object.assign(Object.assign({}, app_styles_1.appStyles.subtitle), { color: theme.colors.text }),
    description: Object.assign(Object.assign({}, app_styles_1.appStyles.text), { paddingBottom: 16, opacity: 0.7, color: theme.colors.text }),
    text: Object.assign(Object.assign({}, app_styles_1.appStyles.text), { color: theme.colors.text }),
});
exports.getStyles = getStyles;
