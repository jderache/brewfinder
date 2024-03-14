import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <RootNavigator />
      </View>
    </QueryClientProvider>
  );
}
