// import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity,Animated,Easing,StatusBar,
    View,Platform } from 'react-native';
import styled from 'styled-components/native'
import Card from '../components/Card';
import { NotificationIcon } from '../components/Icons'
import Logo from '../components/Logo';
import FramerX from '../assets/logo-framerx.png'
import Figma from '../assets/logo-figma.png'
import Course from '../components/Course';
import Menu from '../components/Menu';
import {connect} from 'react-redux'
import Avatar from '../components/Avatar';
import gql from 'graphql-tag'
import { Query } from '@apollo/react-components';

// const CardsQuery = gql`
// {
//     cardsCollection {
//       items {
//         title
//         subtitle
//         image {
//           title
//           description
//           contentType
//           fileName
//           size
//           url
//           width
//           height
//         }
//         caption
//       }
//     }
//   }
//   `

const logos = [
    {
        image: Figma,
        text: 'Figma'
    },
    {
        image: FramerX,
        text: 'Framer X'
    },
    {
        image: require('../assets/logo-studio.png'),
        text: 'Studio'
    },
    {
        image: require('../assets/logo-react.png'),
        text: 'React'
    },
    {
        image: require('../assets/logo-swift.png'),
        text: 'Swift'
    },
    {
        image: require('../assets/logo-sketch.png'),
        text: 'Sketch'
    },

]


const courses = [
    {
        title: "Prototype in InVision Studio",
        subtitle: "10 sections",
        image: require("../assets/background13.jpg"),
        logo: require("../assets/logo-studio.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Design and interactive prototype"
    },
    {
        title: "React for Designers",
        subtitle: "12 sections",
        image: require("../assets/background11.jpg"),
        logo: require("../assets/logo-react.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Learn to design and code a React site"
    },
    {
        title: "Design and Code with Framer X",
        subtitle: "10 sections",
        image: require("../assets/background14.jpg"),
        logo: require("../assets/logo-framerx.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Create powerful design and code components for your app"
    },
    {
        title: "Design System in Figma",
        subtitle: "10 sections",
        image: require("../assets/background6.jpg"),
        logo: require("../assets/logo-figma.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption:
            "Complete guide to designing a site using a collaborative design tool"
    }
];



function HomeScreen({openMenu,action,name,navigation}) {
    const [scale,setScale] = useState(new Animated.Value(1))
    const [opacity,setOpacity] = useState(new Animated.Value(1))

    useEffect(() => {
        StatusBar.setBarStyle('dark-content',true)
        if(Platform.OS == "android"){
        StatusBar.setBarStyle('light-content',true)
        }
    },[])

    const openTheMenu = () =>{
        openMenu()
    }


    useEffect(() => {
        if(action == 'openMenu'){
            Animated.spring(scale,{toValue:0.9,duration:300,easing:Easing.in(),useNativeDriver:false}).start()
            Animated.spring(opacity,{toValue:0.5,useNativeDriver:false}).start()
            StatusBar.setBarStyle('light-content',true);
        }
        if(action == 'closeMenu'){ 
            Animated.timing(scale,{toValue:1,duration:300,easing:Easing.in(),useNativeDriver:false}).start()
            Animated.spring(opacity,{toValue:1,useNativeDriver:false}).start()
            StatusBar.setBarStyle('dark-content',true);
        }
    },[action])
    return (
        <RootView>
            <Menu />
        <AnimatedContainer style={{transform:[{scale:scale}],opacity:opacity}}>
            <SafeAreaView>
                <ScrollView>
                    <TitleWrapper>
                        <FlexWrapper>
                        <TouchableOpacity onPress={openTheMenu}>
                            <Avatar/>
                        </TouchableOpacity>
                        <View>
                        <Title>Welcome Home,</Title>
                        <Name>{name}</Name>
                        </View>
                        </FlexWrapper>
                        <NotificationIcon
                            style={{ position: 'absolute', right: 20, top: 5 }}
                        />
                    </TitleWrapper>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                        style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
                    >
                        {logos.map((logo, i) => (
                            <Logo image={logo.image} text={logo.text} key={i} />
                        ))}
                        <SpaceFiller />
                    </ScrollView>
                    <Subtitle>Continue Learning</Subtitle>
                    <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
                        {/* <Query query={CardsQuery}>
                            {({loading,error,data}) => {
                                if(loading) return <Message>Loading ...</Message>;
                                if(error) return <Message>Error...</Message>
                                console.log(data.cardsCollection.items)
                                return (
                                    <CardsContainer>
                                        {data.cardsCollection.items.map((card,i) => (
                                        <TouchableOpacity key={i} onPress={() => {
                                            navigation.push("Section",{
                                                section:card
                                            })
                                        }}>
                                        <Card 
                                            title={card.title}
                                            image={card.image.url}
                                            subtitle={card.subtitle}
                                            caption={card.caption}
                                            logo={card.logo}
                                        />
                                        </TouchableOpacity>

                                        ))}
                                    </CardsContainer>
                                )
                                
                            }}
                        </Query> */}
                        {courses.map((card,i) => (
                             <TouchableOpacity key={i} onPress={() => {
                                navigation.push("Section",{
                                    section:card
                                })
                            }}>
                            <Card 
                                title={card.title}
                                image={card.image}
                                subtitle={card.subtitle}
                                caption={card.caption}
                                logo={card.logo}
                            />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Subtitle>
                        Popular Courses
        </Subtitle>
        <CourseContainer>
                    {courses.map((course, i) => (
                        <Course
                            key={i}
                            title={course.title}
                            subtitle={course.subtitle}
                            image={course.image}
                            logo={course.logo}
                            author={course.author}
                            avatar={course.avatar}
                            caption={course.caption}
                        />
                    ))}
                    </CourseContainer>
                </ScrollView>
            </SafeAreaView>
        </AnimatedContainer>
        </RootView>
    );
}

const mapDispatchToProps = dispatch =>({
    openMenu:() => dispatch({type:'openMenu'})
})

const mapStateToProps = state =>({
    action:state.action,
    name:state.name
})

HomeScreen.navigationOptions = {
    headerShown:false
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

const CourseContainer = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
`


const RootView = styled.View`
  flex:1;
  background-color:#000;
`
const Container = styled.View`
  flex:1;
  background:#f0f3f5;
  position:relative;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  
`
const CardsContainer = styled.View`
    padding-left:10px;
`

const FlexWrapper = styled.View`
    flex-direction:row;
    justify-content:center;
    margin-right:auto;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Title = styled.Text`
   font-size:16px;
   color:#b8bece;
   font-weight:500;
`

const Subtitle = styled.Text`
  color:#b8bece;
  font-weight:600;
  font-size:15px;
  margin-left:20px;
  margin-top:50px;
  text-transform:uppercase;
`

const Name = styled.Text`
   font-size:20px;
   color:#3c4560;
   font-weight:bold;
`

const TitleWrapper = styled.View`
   width:100%;
   margin-top:50px;
   margin-left:20px;
`

const Message = styled.Text`
    margin:20px;
    color:#b8bece;
    font-size:15px;
    font-weight:500;
`

// const Avatar = styled.Image`
//   width:44px;
//   height:44px;
//   background:#000;
//   border-radius:22px;
//   margin-left:20px;
//   left:0;
//   margin-right:10px;
// `
const SpaceFiller = styled.View`
  width:10px;
`

