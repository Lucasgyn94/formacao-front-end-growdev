import type { JSX } from 'react/jsx-runtime';
import { FooterWrapper } from './styles';

export function Footer(): JSX.Element {
    const message = false;

    return (
        <FooterWrapper>
            <p>© 2026 Meu Blog</p>
            {message && <p>Obrigado por vistar nosso blog!</p>}
        </FooterWrapper>
    );
}
