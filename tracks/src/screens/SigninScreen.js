import React, {useContext} from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);


	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.container}>
				<NavigationEvents
					onWillFocus={clearErrorMessage}
				/>
				<AuthForm
					headerText="Sign in to Account"
					errorMessage={state.errorMessage}
					submitButtonText="Sign In"
					onSubmit={signin}
				/>

				<NavLink
					navigation={navigation}
					navigationDestination='SignUp'
					linkText='Dont have an account? Register a new one here'
				/>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 50
	},


});
export default SigninScreen;
