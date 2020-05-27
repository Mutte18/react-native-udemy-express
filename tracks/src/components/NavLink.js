import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from "./Spacer";
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, navigationDestination, linkText}) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(navigationDestination)}>
			<Spacer>
				<Text style={styles.link}>{linkText}</Text>
			</Spacer>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	link: {
		color: 'blue'
	}
});

export default withNavigation(NavLink);
