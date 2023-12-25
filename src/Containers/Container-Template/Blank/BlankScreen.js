"Use Strict"
import React, { useMemo } from 'react';
import App from './App'
import { View, Txt } from 'react-native';
import { getStyles } from './BlankScreen.style';
import { useTheme } from './CustomThemeProvider';

function BlankScreen = () => {
    const { theme } = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    return (
        <App>
    )
        <View style={styles.container}>
            <Text style={styles.text}>BlankScreen</Text>
        </View>
        </App>
        );
};
export default BlankScreen