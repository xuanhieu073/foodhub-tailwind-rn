import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import {useTailwind} from 'tailwind-rn';
import Home from './src/views/Home';
import {tailwindExtensions} from './src/styles/tailwindExtension';

const App = () => {
  const tailwind = useTailwind();
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        {/* <View style={tailwind('w-10 h-10 box-card-shadow bg-red-500')}></View> */}
        <Home />
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default App;
