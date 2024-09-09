import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'channel',
  title: 'Channel',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'flag',
      title: 'Flag',
      type: 'string', // You may want to use a custom type for flags or reference existing flag data
    }),
    defineField({
      name: 'Name',
      title: ' Name',
      type: 'string',
    }),
    defineField({
      name: 'channels',
      title: 'Channels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Channel Name',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
