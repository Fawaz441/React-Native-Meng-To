import React, { Component } from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return {
        name:state.name
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateName:name =>dispatch({
            type:"UPDATE_NAME",
            name:name
        })
    }
}

class Avatar extends Component {
    state = {
        photo: ""
    }

    componentDidMount() {
        fetch("https://uifaces.co/api?limit=1",{
        method:'GET',    
        headers:{
        "X-API-KEY":'D2F38609-62E742E3-BF3BD024-B9A0739B',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
        }})
            .then(response => response.json())
            .then(
                response => {
                    this.setState({photo:response[0].photo})
                    this.props.updateName(response[0].name)
                }
            )
    }

    render() {
        return (
            <Image source={{ uri: this.state.photo }} />
        )
    }
}

const Image = styled.Image`
    width:44px;
    height:44px;
    border-radius:22px;
    margin-right:20px;
`

export default connect(mapStateToProps,mapDispatchToProps)(Avatar)
