import React from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity,StatusBar,View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class SectionScreen extends React.Component{
    static navigationOptions = {
        headerShown:false
    }

    componentDidMount(){
        StatusBar.setBarStyle("light-content",true)
    }

    componentWillUnmount(){
        StatusBar.setBarStyle("dark-content",true)
    }

    render(){
        const {navigation} = this.props;
        const section = navigation.getParam("section")
        return(
            <Container>
                <StatusBar hidden/>
                <Cover>
                    <Image source={section.image.url}></Image>
                    <Wrapper>
                        <Logo source={section.logo}/>
                        <Subtitle>{section.subtitle}</Subtitle>
                    </Wrapper>
                    <Title>{section.title}</Title>
                    <Caption>{section.caption}</Caption>
                </Cover>
                <TouchableOpacity style={{position:'absolute',top:20,right:20}}
                onPress={() => {navigation.goBack()}}>
                <CloseView>
                    <Ionicons name="ios-close" size={36} color="#4775f2"/>
                </CloseView>
                </TouchableOpacity>
                <Content>
                    {/* <WebView /> */}
                </Content>
            </Container>
        )
    }
}

const htmlContent = `
    <h2>TItle here</h2>
    <p>Paragraph here</p>
`

const Content = styled.View`
    height:100%;
`

const Container = styled.View`
    flex:1;
`
const CloseView = styled.View`
    width:32px;
    height:32px;
    background:#fff;
    border-radius:16px;
    box-shadow:0 5px 10px rgba(0,0,0,0.15);
    display:flex;
    align-items:center;
    justify-content:center;
`
const Cover = styled.View`
    height:375px;

`
const Image = styled.Image`
    width:100%;
    height:100%;
    position:absolute;
`
const Title = styled.Text`
    font-size:24px;
    color:#fff;
    font-weight:bold;
    width:170px;
    position:absolute;
    top:78px;
    left:20px;
`

const Caption = styled.Text`
    color:#fff;
    font-size:17px;
    position:absolute;
    left:20px;
    bottom:20px;
    width:300px;
`

const Wrapper = styled.View`
    flex-direction:row;
    position:absolute;
    top:40px;
    left:20px;
    align-items:center;
`
const Logo = styled.Image`
    width:24px;
    height:24px;
`
const Subtitle = styled.Text`
    font-weight:600;
    font-size:15px;
    color:rgba(255,255,255,0.8);
    margin-left:5px;
    text-transform:uppercase;
`
export default SectionScreen