import React from 'react'
import styled from 'styled-components'
import { Button, Buttons, Container, Input, Logo, Title, Wrapper } from '../Styling/signStyles'

export const SigninPage = () => {

    return (
        <Wrapper>
            <Container>
                <Logo><div>SOLID ID</div></Logo>
                <Title>Sign in</Title>
                <>
                <Input
                type='text'
                placeholder='Email'
                />
                <Input
                    type='password'
                    placeholder='Password'
                />
                </>
                <Buttons>
                    <Button>
                        <div>Sign in </div>
                    </Button>
                </Buttons>
            </Container>
        </Wrapper>
      )
}
