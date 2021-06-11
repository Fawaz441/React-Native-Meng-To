import React from 'react'
import styled from 'styled-components/native'
import { Animated, TouchableOpacity, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MenuItem from './MenuItem'
import { connect } from 'react-redux'

const ScreenHeight = Dimensions.get("window").height

const items = [
    { icon: "ios-settings", title: "Account", text: "settings" },
    { icon: "ios-card", title: "Billing", text: "payments" },
    { icon: "ios-compass", title: "Learn React", text: "start course" },
    { icon: "ios-exit", title: "Log out", text: "see you soon!" },
]

class Menu extends React.Component {
    state = {
        top: new Animated.Value(ScreenHeight)
    }

    componentDidMount() {
        this.toggleMenu()
    }

    componentDidUpdate() {
        console.log(this.props.action)
        this.toggleMenu()
    }


    toggleMenu = () => {
        const { action } = this.props;
        if (action == 'openMenu') {
            Animated.spring(this.state.top, { toValue: 54,useNativeDriver:false }).start()
        }
        if (action == 'closeMenu') {
            Animated.spring(this.state.top, { toValue: ScreenHeight, useNativeDriver: false }).start()
        }
    }

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover>
                    <Image source={require('../assets/background2.jpg')} />
                    <Title>Fawaz</Title>
                    <Subtitle>Designer at Ibadan</Subtitle>
                </Cover>
                <TouchableOpacity onPress={this.props.closeMenu}
                    style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 2 }}
                >
                    <CloseView>
                        <Ionicons name='ios-close' size={44} color='#546bfb' />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {items.map((item, i) => (
                        <MenuItem key={i} text={item.text} icon={item.icon} title={item.title} />
                    ))}
                </Content>

            </AnimatedContainer>
        )
    }
}

const mapStateToProps = state => ({
    action: state.action
})

const mapDispatchToProps = dispatch => ({
    openMenu: () => dispatch({ type: 'openMenu' }),
    closeMenu: () => dispatch({ type: 'closeMenu' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)



const Container = styled.View`
    position:absolute;
    background:white;
    width:100%;
    height:100%;
    z-index:100;
    border-radius:10px;
    overflow:hidden;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    height:142px;
    background: black;
    justify-content:center;
    align-items:center;
`

const Content = styled.View`
    height:${ScreenHeight}px;
    background:#f0f3f5;
    padding:50px;
`

const CloseView = styled.View`
    width:44px;
    height:44px;
    border-radius:22px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 5px 10px rgba(0,0,0,0.15);
`


const Image = styled.Image`
    position:absolute;
    width:100%;
    height:100%;
    
`
const Title = styled.Text`
    z-index:3;
    color:#fff;
    font-size:24px;
    font-weight:600;
`
const Subtitle = styled(Title)`
    z-index:3;
    font-size:13px;
    color:rgba(255,255,255,0.5);
    margin-top:8px;
`