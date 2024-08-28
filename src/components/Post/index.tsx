import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { formatDistance, formatRelative } from 'date-fns';

import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import IconButton from '../IconButton';
import type { IRedditPost } from './Post';

// const fetchImage = (url: string): Promise<string> => {
// 	return fetch(url)
// 		.then((res) => res.blob())
// 		.then((blob) => {
// 			return Promise.resolve(URL.createObjectURL(blob));
// 		})
// 		.catch((e) => {
// 			console.error(e);
// 			return Promise.reject();
// 		});
// };

const isImgUrl = (url: string): boolean => {
	return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};

const formatDate = (input: number): string => {
	// reddit post `created` and `created_utc` UNIX timestamps are in seconds so we need to multiply by 1000 for js dates
	return formatDistance(new Date(input * 1000), new Date(), {});
};

function Post({
	author,
	created,
	num_comments,
	score,
	thumbnail,
	title,
	url,
}: IRedditPost) {
	const hasFullSizeImg = isImgUrl(url);

	return (
		<ThemedView style={styles.wrapper}>
			<ThemedView style={styles.row}>
				<ThemedText type="small" style={styles.author}>
					u/{author}
				</ThemedText>
				<ThemedText type="small">&bull;</ThemedText>
				<ThemedText type="small" style={styles.created}>
					{`${formatDate(created)} ago`}
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.header}>
				<ThemedText type="subtitle">{title}</ThemedText>
			</ThemedView>
			<ThemedView style={styles.imgWrapper}>
				<Image
					accessible={false}
					source={{ uri: hasFullSizeImg ? url : thumbnail }}
					style={hasFullSizeImg ? styles.img : styles.thumbnail}
					resizeMode="contain"
				/>
			</ThemedView>
			<ThemedView style={styles.row}>
				<IconButton name="arrow-up">{score}</IconButton>
				<IconButton name="comments-o">{num_comments}</IconButton>
			</ThemedView>
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
		width: '100%',
	},
	header: {
		marginTop: 8,
		marginBottom: 8,
	},
	imgWrapper: {
		width: '100%',
		marginBottom: 12,
	},
	img: {
		width: '100%',
		paddingBottom: '56.75%',
		backgroundColor: '#000',
		borderRadius: 8,
	},
	author: {},
	created: {
		opacity: 0.5,
	},
	thumbnail: {
		position: 'relative',
		width: 140,
		height: 140,
	},
});
