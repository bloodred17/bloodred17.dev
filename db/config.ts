import { column, defineDb, defineTable, NOW } from 'astro:db';
import { nanoid } from 'nanoid';


const Commenter = defineTable({
	columns: {
		name: column.text(),
		email: column.text({ primaryKey: true }),
	},
	indexes: [
		{ on: ["email"], unique: true },
	]
});

const Reaction = defineTable({
	columns: {
		commenterEmail: column.text({ references: () => Commenter.columns.email }),
		postId: column.text(),
		commentId: column.text({ references: () => Comment.columns.id }),
		emoji: column.text(),
	},
	indexes: [
		{ on: ["commenterEmail", "postId", "commentId"], unique: true }
	]
})

const Comment = defineTable({
	columns: {
		commenterEmail: column.text({ references: () => Commenter.columns.email }),
		content: column.text(),
		postId: column.text(),
		date: column.date({ default: NOW }),
		reaction: column.json({ required: true }),
		id: column.text({ primaryKey: true }),
	},
})


export default defineDb({
	tables: { Commenter, Comment, Reaction },
});