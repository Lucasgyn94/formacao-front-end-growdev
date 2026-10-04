import type { JSX } from 'react';
import { Container, Title, Logo, HeaderWrapper } from './styles';

import logo from '../../assets/logo.png';

export function Header(): JSX.Element {
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
            </Container>
        </HeaderWrapper>
    );
}
