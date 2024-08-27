import { useLocalSearchParams } from 'expo-router';
import { Image } from 'react-native';

import { ThemedView } from '@/src/components/ThemedView';
import { ThemedText } from '@/src/components/ThemedText';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';

function PostDetail() {
	const { id } = useLocalSearchParams();

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/src/assets/images/partial-react-logo.png')}
					// style={styles.reactLogo}
				/>
			}
		>
			<ThemedView>
				<ThemedText>post detail: {id}</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

export default PostDetail;
