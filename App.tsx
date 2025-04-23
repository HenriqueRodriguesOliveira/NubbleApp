import { View } from 'react-native';
import React from 'react';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { Box } from './src/components/Box/Box';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset="headingLarge" italic>CoffStack</Text>
        <Box marginBottom="s24">
          <Button title="Entrar" />
        </Box>
        <Button loading title="Loading" />
      </View>
    </ThemeProvider>
  );
}
