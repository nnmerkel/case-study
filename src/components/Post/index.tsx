import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import IconButton from '../IconButton';
import type { IRedditPost } from './Post';

const fetchImage = (url: string): Promise<string> => {
	return fetch(url)
		.then((res) => res.blob())
		.then((blob) => {
			return Promise.resolve(URL.createObjectURL(blob));
		})
		.catch((e) => {
			console.error(e);
			return Promise.reject();
		});
};

const formatDate = (input: number): string => {
	// reddit post `created` and `created_utc` UNIX timestamps are in seconds so we need to multiply by 1000 for js dates
	return new Date(input * 1000).toLocaleString();
};

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
				<ThemedView style={styles.row}>
					<ThemedText type="small" style={styles.author}>
						u/{author}
					</ThemedText>
					<ThemedText type="small">&bull;</ThemedText>
					<ThemedText type="small" style={styles.created}>
						{`${formatDate(created)}`}
					</ThemedText>
				</ThemedView>
				<ThemedView style={styles.header}>
					<ThemedText type="subtitle">{title}</ThemedText>
				</ThemedView>
				<Image source={{ uri: thumbnail }} />
				<Image
					accessible={false}
					source={{ uri: thumbnail }}
					// style={styles.thumbnail}
					resizeMode="contain"
					width={140}
					height={140}
					// onLoad={({ nativeEvent }) => {
					// 	console.log(nativeEvent, nativeEvent.source);
					// 	// setDims({ width, height });
					// }}
				/>
				<ThemedView style={styles.row}>
					<IconButton name="arrow-up">{score}</IconButton>
					<IconButton name="comments-o">{num_comments}</IconButton>
				</ThemedView>
			</Link>
		</ThemedView>
	);
}

export default Post;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		width: '100%',
		gap: 16,
	},
	wrapper: {
		borderTopWidth: 1,
		borderTopColor: '#444',
		paddingTop: 16,
		marginBottom: 16,
		alignItems: 'stretch',
	},
	header: {
		marginTop: 8,
		marginBottom: 8,
	},
	author: {
		// opacity: 0.5,
	},
	created: {
		opacity: 0.5,
	},
	thumbnail: {
		position: 'relative',
		width: 140,
		height: 140,
	},
});
