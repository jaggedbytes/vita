export default {
  name: 'resume',
  type: 'document',
	title: 'Resume',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description'
    },
    {
      name: 'relatedContent',
      title: 'Related Content',
      type: 'array',
      of: [
        {
          name: 'content',
          title: 'Content',
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'description', type: 'array', title: 'Description', of: [{type: 'block'}]}
          ]
        },
      ],
    },
  ]
}