import type { JSX } from 'react/jsx-runtime';
import { useTheme } from '../../hooks/useTheme';
import { Button } from './style';

export function ToggleThemeButton(): JSX.Element {
    const { toggleTheme } = useTheme();

    return <Button onClick={toggleTheme}>Alternar Tema</Button>;
}
