import Endpoints from './Endpoints';
import client from '.';
import type {
	IRedditListing,
	IRedditPost,
	IRedditThing,
} from '@/src/components/Post/Post';

export const getPosts = () => {
	return client.get<IRedditThing<IRedditListing<IRedditPost>>>(Endpoints.hot);
};
