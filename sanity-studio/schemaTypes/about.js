import { defineType, defineField } from "sanity";

export const aboutType = defineType({
    name: "about",
    title: "About",
    type: "document",

    fields: [
        defineField( {
            name: "headshot",
            title: "Headshot",
            type: "image",
        } ),

        defineField( {
            name: "workingImage",
            title: "Working Image",
            type: "image"
        } ),

        defineField( {
            name:"contactImage",
            title: "Contact Image",
            type: "image"
        } ),
    ]
}); 