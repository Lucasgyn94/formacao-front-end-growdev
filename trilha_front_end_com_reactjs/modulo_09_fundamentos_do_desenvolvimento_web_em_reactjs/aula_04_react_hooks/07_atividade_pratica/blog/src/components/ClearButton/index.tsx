import type { JSX } from 'react/jsx-runtime';
import { Button } from './styles';

interface ClearButtonProps {
    onClick: () => void;
}

export function ClearButton({ onClick }: ClearButtonProps): JSX.Element {
    return (
        <Button type="button" onClick={onClick}>
            Limpar
        </Button>
    );
}
