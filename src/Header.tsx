import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Center, Button, Flex, Spinner, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

    if (isLoading) {
        return (
            <Center>
                <Spinner size='xl' mt='5' />
            </Center>
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
        <Flex bgColor='teal.50' p='3'>
            <Center>
                {`Welcome ${user.name}!`}
            </Center>
            <Spacer />
            <Center>
                <Link as='div'>
                    <RouterLink to='/createQuiz'>
                        Create Quiz
                    </RouterLink>
                </Link>
            </Center>
            <Spacer />
            <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
        </Flex>
    )
}

export default Header