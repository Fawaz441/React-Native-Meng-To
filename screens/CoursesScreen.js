import React from 'react'
import styled from 'styled-components/native'


class CoursesScreen extends React.Component{
    static navigationOptions = {
        headerShown:false
    }
    render(){
        return(
            <Container>
                <Text>Courses Screen</Text>
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

export default CoursesScreen