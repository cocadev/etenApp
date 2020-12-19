import React, { Component} from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal, ToastAndroid, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { colors } from '../../common/colors';
import { images } from '../../common/images';
import * as actions from "../../store/common/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import LottieScreen from '../../components/Lottie';
import api from "../../service/api";
import Cache from "../../utils/cache";
import i from '../../common/i'
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


class SignIn extends Component {

    state = {
        email: '',
        password: '',
        isWaiting: false,
    }

    onSignIn = () => {
        if (!this.state.email) {
            ToastAndroid.show('Email is empty', ToastAndroid.SHORT);
            return false
        }
        if (!this.state.password) {
            ToastAndroid.show('Password is empty', ToastAndroid.SHORT);
            return false
        }
        this.setState({ isWaiting: true })
        setTimeout(() => { this.setState({ isWaiting: false }) }, 10000);
        api.login(this.state.email, this.state.password, (err, res) => {
            // console.log('********************* res ************************', res)
            // console.log('********************* err ************************', err)

            if (err == null) {
                Cache.currentUser = res.user
                // console.log('********************* currentUser ************************', Cache.currentUser)
                this.setState({ isWaiting: false })
                if (!res.message) {
                    Actions.drawerMenu()
                } else {
                    ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
                }
            } else {
                ToastAndroid.show('Wrong User', ToastAndroid.SHORT);
            }

            this.setState({ isWaiting: false })
        })
    };

    renderIndicator() {
        return (
            <Modal
                visible={this.state.isWaiting}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={i.indicatorContainer}>
                    <View style={i.indicator}>
                        <LottieScreen />
                    </View>
                </View>
            </Modal>
        );
    }

    render() {

        const { email, password } = this.state;

        return (
            <KeyboardAvoidingView behavior='padding' enabled style={{ backgroundColor: colors.WHITE, flex: 1, justifyContent: 'center' }}>

                    <View style={{ width: '100%', alignItems: 'center', height:height/3 }}>
                        <Image source={images.logo} style={{ width: width / 1.6, height: width / 1.6 }} />
                    </View>

                    <View style={{justifyContent:'flex-end'}}>

                        <Text style={{ textAlign: 'center', color: colors.GREEN, fontSize: 30, fontFamily: 'Montserrat-Light' }}>SIGN IN</Text>

                        <View>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                onChangeText={email => this.setState({ email })}
                                value={email}
                            />
                            <Text style={styles.inputText}>EMAIL ID / PHONE NUMBER</Text>
                        </View>

                        <View>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                                onChangeText={password => this.setState({ password })}
                                value={password}
                            />
                            <Text style={styles.inputText}>PASSWORD</Text>
                        </View>

                    </View>

                    <TouchableOpacity onPress={()=>Actions.wall()}>
                        <LinearGradient
                            colors={[colors.GREEN, colors.SKY]}
                            start={[0, 1]} end={[1, 0]}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, marginHorizontal: 12, marginTop: 20 }}>
                            <Text
                                style={{
                                    backgroundColor: 'transparent',
                                    fontSize: 15,
                                    color: '#fff',
                                    fontFamily: 'Montserrat-Medium'
                                }}>
                                SIGN IN
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => Actions.signup()}>
                                <Text style={{ marginRight: 22, marginTop: 10, fontFamily: 'Montserrat-LightItalic', color: colors.DARK }}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>


            </KeyboardAvoidingView>
        )
    }
}

export default connect(
    state => ({ user: state.common.user, }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(SignIn);

const styles = StyleSheet.create({

    input: {
        backgroundColor: colors.WHITE,
        marginHorizontal: 12,
        borderRadius: 5,
        marginVertical: 3,
        fontSize: 20,
        paddingTop: 12,
        paddingLeft: 7,
        height: 55,
        borderColor: '#f8f8f8',
        fontFamily: 'Montserrat-Medium',
        color: '#4c4c4c',
        borderWidth: 1,
        borderRadius: 3
    },
    inputText: {
        fontSize: 11,
        left: 20,
        top: 10,
        color: colors.GREEN,
        fontFamily: 'Montserrat-Medium',
        position: 'absolute'
    }
})