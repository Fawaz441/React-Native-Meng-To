import React from 'react'
import styled from 'styled-components/native'
import {Button} from 'react-native'
import Project from '../components/Project'
import {Animated,PanResponder} from 'react-native'


class ProjectsScreen extends React.Component{
    static navigationOptions = {
        headerShown:false
    }

    state = {
        pan:new Animated.ValueXY()
    }

    UNSAFE_componentWillMount(){
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder:() => true,
            onPanResponderMove:Animated.event([
                null,{dx:this.state.pan.x,dy:this.state.pan.y}
            ],{useNativeDriver:false}),
            onPanResponderRelease:() =>{
                Animated.spring(this.state.pan,{
                    toValue:{x:0,y:0},useNativeDriver:false
                }).start()
            }
        })
    }

    render(){
        return(
            <Container>
                <Animated.View style={{transform:[
                    {translateX:this.state.pan.x},{translateY:this.state.pan.y}
                ]}}
                {...this._panResponder.panHandlers}
                >
                <Project title="Price tag"
                 image={require('../assets/background5.jpg')}
                 author="Liu Yi"
                 text="Thanks to Design+Code.I finished a course and became a pro in React Native."
                 />
                </Animated.View>
            </Container>
        )
    }
}

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`

const Text = styled.Text`

`

export default ProjectsScreen