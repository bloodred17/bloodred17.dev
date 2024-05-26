import { db, Commenter, Comment, Reaction } from 'astro:db';
import { nanoid } from 'nanoid';

export default async function() {
	await db.insert(Commenter).values([
		{ name: 'Ankur', email: 'ankur@gmail.com' },
		{ name: 'Ankit', email: 'ankit@gmail.com' },
	]);

	await db.insert(Comment).values([
		{ commenterEmail: 'ankur@gmail.com', content: 'Hello world', postId: "first_post_from_the_lab", reaction: { '👍': 1, '👎': 0 }, id: 'first_comment' },
		{ commenterEmail: 'ankit@gmail.com', content: 'Hello world', postId: "first_post_from_the_lab", reaction: { '👍': 1, '👎': 0 }, id: nanoid() },
	]);

	await db.insert(Reaction).values([
		{
			commenterEmail: 'ankur@gmail.com',
			postId: "first_post_from_the_lab",
			commentId: "first_comment",
			emoji: "👍"
		}
	]);
}