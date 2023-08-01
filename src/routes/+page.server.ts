import { fail } from '@sveltejs/kit';
import { prisma } from '../lib/types'

export const load = (async () => {
    const entries = prisma.entry.findMany();

    return {
        entries: entries
    }
})

export const actions = {
    add_entry: async ({request}) => {
        const data = await request.formData();

        let title = data.get('title-entry')
        let calories = data.get('calories-entry')
        
        if (!title || !calories) {
            return fail(400)
        }

        if (typeof title !== "string" || typeof calories !== "string") {
            return (400)
        }
        let conv_cal = parseInt(calories);

        await prisma.entry.create({
            data: {
                title: title,
                calories: conv_cal
            }
        })
    },
    delete_entry: async ({request}) => {
        const data = await request.formData();

        let id = Number(data.get('id'));
        if (typeof id !== "number") {
            return fail(400)
        }

        await prisma.entry.delete({
            where: {
                ID: id
            }
        })
    }
}