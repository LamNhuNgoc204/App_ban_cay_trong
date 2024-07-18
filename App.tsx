import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/api/Store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';

function App(): React.JSX.Element {

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaView style={{ flex: 1 }}>
            <AppNavigation />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </KeyboardAvoidingView>
  );
}

export default App;
