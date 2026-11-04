import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { TaskList } from './components/TaskList';

export function App() {
    return (
       <ReduxProvider store={store}>
            <TaskList />
        </ReduxProvider>
    );

}