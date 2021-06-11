import React,{useEffect} from 'react'
import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 40
if (screenWidth >= 768){
    cardWidth = (cardWidth - 20)/2
}

const Course = props =>{
    useEffect(() => {
        Dimensions.addEventListener("change",adaptLayout)
    },[])

    const adaptLayout = dimensions => {
        
    }
    
    return <Container>
        <Cover>
            <Image source={props.image}/>
            <Logo source={props.logo} resizeMode="contain"/>
            <Subtitle>{props.subtitle}</Subtitle>
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Avatar source={props.avatar}/>
            <Caption>{props.caption}</Caption>
            <Author>Taught by {props.author}</Author>
        </Content>
    </Container>
    }

export default Course

const Container = styled.View`
    width:335px;
    height:335px;
    background:white;
    margin:10px 10px;
    border-radius:14px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
`
const Content = styled.View`
    padding:16px;
    padding-left:62px;
    justify-content:center;
    height:75px;

`
const Cover = styled.View`
    height:260px;
    border-top-left-radius:14px;
    border-top-right-radius:14px;
    overflow:hidden; 
    position:relative;
`

const Image = styled.Image`
    width:100%;
    height:100%;
    top:0;
    left:0;
`
const Logo = styled.Image`
    height:48px;
    width:48px;
    position:absolute;
    top:90px;
    left:50%;
    margin-left:-24px;
`
const Avatar = styled.Image`
    height:32px;
    width:32px;
    position:absolute;
    top:20px;
    left:20px;
    border-radius:16px;
`

const Subtitle = styled.Text`
    font-size:15px;
    font-weight:500;
    color:rgba(255,255,255,0.8);
    text-transform:uppercase;
    margin-left:20px;
`
const Title = styled.Text`
    font-size:24px;
    color:#fff;
    font-weight:600;
    margin-top:4px;
    margin-bottom:20px;
    margin-left:20px;
    width:170px;
`
const Caption = styled.Text`
    font-size:14px;
    color:#3c4560;
    font-weight:500;
    
`
const Author = styled.Text`
    font-size:13px;
    color:#b8bece;
    font-weight:500;
    margin-top:4px;

`


