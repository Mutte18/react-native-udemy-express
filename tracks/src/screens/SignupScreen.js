import React, { useContext } from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.container}>
				<NavigationEvents
					onWillFocus={clearErrorMessage}
				/>
				<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
				/>

				<NavLink
				navigation={navigation}
				navigationDestination='SignIn'
				linkText='Already have an account? Sign in instead'
				/>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
