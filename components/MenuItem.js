import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MenuItem = props =>(
    <Container>
        <IconView>
            <Ionicons name={props.icon} size={24} color="#546bfb"/>
        </IconView>
        <Content>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Content>
    </Container>
)

export default MenuItem

const Container = styled.View`
    flex-direction:row;
    margin:15px 0;
`

const IconView = styled.View`
    width:32px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Content = styled.View`
    padding-left:20px;
`

const Title = styled.Text`
    color:#3c4560;
    font-size:24px;
    font-weight:600;
`

const Text = styled(Title)`
    opacity:0.6;
    margin-top:5px;
    font-size:16px;
`




