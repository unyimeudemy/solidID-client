import React from 'react'
import styled from 'styled-components'
import { Button, Buttons, Container, Input, Logo, Title, Wrapper } from '../Styling/signStyles'

export const SignupPage = () => {

  return (
    <Wrapper>
        <Container>
            <Logo><div>SOLID ID</div></Logo>
            <Title>Sign up</Title>
            { false && <>
            <Input
            type='text'
            placeholder='Email'
            />
            <Input
                type='password'
                placeholder='Password'
            />
            <Input
            type='password'
            placeholder='Password confirm'
            />
            </>}
            { false && <>
            <Input
            type='text'
            placeholder='First name'
            />
            <Input
                type='text'
                placeholder='Last name'
            />
            <Input
            type='text'
            placeholder='Other names'
            />
            </>}
            { true && <>
            <Input
            type='text'
            placeholder='Age'
            />
            <Input
                type='text'
                placeholder='Nationality'
            />
            <Input
            type='text'
            placeholder='State of Origin'
            />
            </>}
            <Buttons>
                <Button>
                    <div>Back </div>
                </Button>
                <Button>
                    <div>Next </div>
                </Button>
            </Buttons>
        </Container>
    </Wrapper>
  )
}
