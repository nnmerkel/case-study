import { useContext } from 'react';

import { PostsContext } from '@/src/stores/posts/posts';

function usePosts() {
	const ctx = useContext(PostsContext);
	return ctx;
}

export default usePosts;
