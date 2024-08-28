import { useEffect, useState } from 'react';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

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
		// todo: not bulletproof
		if (posts.length === 0) {
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
			<>
				<Stack.Screen options={{ title: 'Oops!' }} />
				<ParallaxScrollView
					headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
					headerImage={
						<Image
							source={require('@/src/assets/images/aurora2.jpg')}
							style={styles.hero}
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
			</>
		);
	}

	return (
		<>
			<Stack.Screen options={{ title: `Post ${targetPost.id}` }} />
			<ParallaxScrollView
				headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
				headerImage={
					<Image
						source={require('@/src/assets/images/aurora2.jpg')}
						style={styles.hero}
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
		</>
	);
}

export default PostDetail;

const styles = StyleSheet.create({
	hero: {
		width: '100%',
		bottom: -180,
		left: 0,
		position: 'absolute',
	},
});
