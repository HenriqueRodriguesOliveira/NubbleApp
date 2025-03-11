import React from 'react';
import { View } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {

  return (
    <View>
      <Text preset="paragraphCaptionSmall">Hello</Text>
      <Text preset="headingLarge">Hello</Text>
      <Text preset="headingLarge" bold >Hello</Text>
    </View>
  );
}

export default App;
