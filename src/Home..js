import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Content>
                Welcome to tensorflow
            </Content>
        </Container>
    )
}

export default Home;

const Container = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
`
const Content = styled.div `
    font-size: 15px;
    font-weight: bold;
`