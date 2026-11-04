import { Provider as ReduxProvider } from 'react-redux';
import { persistedStore, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { TaskList } from './components/TaskList';

export function App() {
    return (
       <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistedStore} />
            <TaskList />
        </ReduxProvider>
    );

}