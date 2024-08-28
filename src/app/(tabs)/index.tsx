import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import PostFeed from '@/src/components/Post/PostFeed';

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/src/assets/images/aurora1.jpg')}
					style={styles.hero}
					// resizeMode="contain"
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">r/pics</ThemedText>
			</ThemedView>
			<ThemedView>
				<PostFeed />
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginBottom: 8,
	},
	stepContainer: {
		marginBottom: 8,
	},
	hero: {
		// height: 178,
		width: '100%',
		bottom: -160,
		left: 0,
		position: 'absolute',
	},
});
