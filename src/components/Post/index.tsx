import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import type { IRedditPost } from './Post';

function Post({
	id,
	author,
	created,
	num_comments,
	score,
	thumbnail,
	title,
}: IRedditPost) {
	return (
		<ThemedView style={styles.wrapper}>
			<Link href={`/post/${id}`}>
				<Image source={{ uri: thumbnail }} />
				<ThemedText>{author}</ThemedText>
				<ThemedText>{created}</ThemedText>
				<ThemedText>{num_comments}</ThemedText>
				<ThemedText>{score}</ThemedText>
				<ThemedText>{thumbnail}</ThemedText>
				<ThemedText>{title}</ThemedText>
			</Link>
		</ThemedView>
	);
}

export default Post;

const styles = StyleSheet.create({
	wrapper: {
		borderTop: '1px solid #aaaaaa',
	},
});
