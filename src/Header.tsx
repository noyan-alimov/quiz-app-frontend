import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex, Spinner } from '@chakra-ui/react';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Flex>
                <Spinner size='xl' />
            </Flex>
        )
    }

    if (!isAuthenticated) {
        return (
            <Flex>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </Flex>
        )
    }

    return (
        <Flex>
            <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
        </Flex>
    )
}

export default Header