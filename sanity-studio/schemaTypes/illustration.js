import { defineType, defineField } from "sanity";

export const illustrationType = defineType({
    name: "illustration",
    title: "Illustrations",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",

            options:{
                list: [
                    {title: "Character Art", value: "Character Art"},
                    {title: "Environment Art", value: "Environment Art"},
                    {title: "Concept Art", value: "Concept Art"},
                ]
            }
        }),
    ]
});