import { Provider as ReduxProvider } from 'react-redux';
import { store } from "./store";
import { Root } from "./Root";

export function App() {
    
    return (
        <ReduxProvider store={store}>
            <Root />
        </ReduxProvider>
    );
}