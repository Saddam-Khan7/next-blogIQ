// import { title } from "process";


export const blogdata = {
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "paragraph",
            type: "text",
            title: "paragraph",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title", // Yeh title se slug generate karega
              maxLength: 200,
            },
        },
        {
            title: "Student Image",
            name: "image",
            type: "image"
        },
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
    ],
}