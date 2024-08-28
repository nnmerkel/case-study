import { useEffect, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image } from 'react-native';

import { ThemedView } from '@/src/components/ThemedView';
import { ThemedText } from '@/src/components/ThemedText';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import usePosts from '@/src/hooks/usePosts';
import { type IRedditPost } from '@/src/components/Post/Post';
import Post from '@/src/components/Post';

function PostDetail() {
	const { posts, fetchPosts } = usePosts();
	const { id } = useLocalSearchParams();
	const [targetPost, setTargetPost] = useState<IRedditPost | null>(null);

	useEffect(() => {
		if (posts.length === 0) {
			// todo: not bulletproof
			fetchPosts();
		}

		const target = posts.find((p) => p.id === id);

		if (target) {
			setTargetPost(target);
		} else {
			setTargetPost(null);
		}
	}, [id, posts]);

	if (targetPost === null) {
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
					<ThemedText>Post not found with id: {id}</ThemedText>
				</ThemedView>
				<ThemedView>
					<Link href="/">
						<ThemedText type="link">Return Home</ThemedText>
					</Link>
				</ThemedView>
			</ParallaxScrollView>
		);
	}

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
			<Post {...targetPost} />
			<ThemedView>
				<Link href="/">
					<ThemedText type="link">Return Home</ThemedText>
				</Link>
			</ThemedView>
		</ParallaxScrollView>
	);
}

export default PostDetail;
