import { useEffect, useRef } from 'react';
import { Link } from 'expo-router';

import { ThemedView } from '@/src/components/ThemedView';
import Post from '@/src/components/Post';
import usePosts from '@/src/hooks/usePosts';
import { ThemedText } from '../ThemedText';

export default function PostFeed() {
	const error = useRef<boolean>(false);
	const { fetchPosts, posts } = usePosts();

	useEffect(() => {
		fetchPosts()
			.then(() => (error.current = false))
			.catch(() => (error.current = true));
	}, []);

	if (error.current) {
		return (
			<ThemedView>
				<ThemedText>
					There was an error fetching your posts. Try again later.
				</ThemedText>
			</ThemedView>
		);
	}

	if (posts.length === 0) {
		return (
			<ThemedView>
				<ThemedText>No posts found. Try again later.</ThemedText>
			</ThemedView>
		);
	}

	return (
		<ThemedView>
			{posts.map((post, i) => (
				<Link href={`/post/${post.id}`} key={i}>
					<Post {...post} />
				</Link>
			))}
		</ThemedView>
	);
}
