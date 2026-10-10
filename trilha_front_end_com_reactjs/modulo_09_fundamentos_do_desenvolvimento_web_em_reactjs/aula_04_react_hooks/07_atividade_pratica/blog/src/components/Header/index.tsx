import type { JSX } from 'react';
import { Container, Title, Logo, HeaderWrapper } from './styles';

import logo from '../../assets/logo.png';
import { useTheme } from '../../hooks/useTheme';

export function Header(): JSX.Element {

    const { toggleTheme } = useTheme();

    const isUserLoggedIn: boolean = false;
    let message;

    if (isUserLoggedIn) {
        message = <p>Bem-vindo(a) de volta</p>;
    } else {
        message = <p>Por favor, faça login para continuar.</p>;
    }
    return (
        <HeaderWrapper>
            <Container>
                <div>
                    <Title as="h2">Meu Blog</Title>
                    {message}
                </div>
                <Logo src={logo} />
                <button onClick={toggleTheme} type="button">Alternar Tema</button>
            </Container>
        </HeaderWrapper>
    );
}
