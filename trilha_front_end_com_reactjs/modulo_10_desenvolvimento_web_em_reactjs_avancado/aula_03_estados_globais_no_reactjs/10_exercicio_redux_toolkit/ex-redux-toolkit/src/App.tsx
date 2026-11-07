import { Provider as ReduxProvider } from 'react-redux';
import { persistedStore, store } from "./store";
import { Root } from "./Root";
import { PersistGate } from 'redux-persist/integration/react';

export function App() {
    
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistedStore} >
                <Root />
            </PersistGate>
        </ReduxProvider>
    );
}