import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider, DefaultTheme} from 'react-native-paper';

const myTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#ffc107', 
    accent: '#ffff',
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={myTheme}>
        <View style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <RootNavigator />
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
}
