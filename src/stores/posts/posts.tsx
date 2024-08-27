import {
	createContext,
	useMemo,
	useState,
	type PropsWithChildren,
} from 'react';

import { type IRedditPost } from '@/src/components/Post/Post';
import { getPosts } from '@/src/services/api/methods';

interface IPostsContext {
	posts: IRedditPost[];
	fetchPosts: () => Promise<void>;
}

const PostsContext = createContext<IPostsContext>({
	posts: [],
	fetchPosts: () => Promise.resolve(),
});

function PostsProvider({ children }: PropsWithChildren) {
	const [posts, setPosts] = useState<IRedditPost[]>([]);

	const fetchPosts = () => {
		return getPosts()
			.then(
				({
					data: {
						data: { children: postPayload },
					},
				}) => {
					setPosts(postPayload.map(({ data }) => data));
				},
			)
			.catch((e) => {
				console.error(e);
				setPosts([]);
			});
	};

	const store = useMemo(() => ({ posts, fetchPosts }), [posts]);

	return (
		<PostsContext.Provider value={store}>{children}</PostsContext.Provider>
	);
}

export default PostsProvider;
export { PostsContext };
