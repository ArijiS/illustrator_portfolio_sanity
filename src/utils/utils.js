
const headerImages = [
    {
        id: 1,
        name: "image-1",
        image: new URL("../assets/header/1.jpg", import.meta.url), 
    },
    {
        id: 2,
        name: "image-2",
        image: new URL("../assets/header/2.jpg", import.meta.url), 
    },
    {
        id: 3,
        name: "image-3",
        image: new URL("../assets/header/3.jpg", import.meta.url), 
    },
    {
        id: 4,
        name: "image-4",
        image: new URL("../assets/header/4.jpg", import.meta.url), 
    },
    {
        id: 5,
        name: "image-5",
        image: new URL("../assets/header/5.jpg", import.meta.url), 
    },
    {
        id: 6,
        name: "image-6",
        image: new URL("../assets/header/6.jpg", import.meta.url), 
    },
    {
        id: 7,
        name: "image-7",
        image: new URL("../assets/header/7.jpg", import.meta.url), 
    },
    {
        id: 8,
        name: "image-8",
        image: new URL("../assets/header/8.jpg", import.meta.url), 
    },
    {
        id: 9,
        name: "image-9",
        image: new URL("../assets/header/9.jpg", import.meta.url), 
    },
    {
        id: 10,
        name: "image-10",
        image: new URL("../assets/header/10.jpg", import.meta.url), 
    },
    {
        id: 11,
        name: "image-11",
        image: new URL("../assets/header/11.jpg", import.meta.url), 
    },
    {
        id: 12,
        name: "image-12",
        image: new URL("../assets/header/12.jpg", import.meta.url), 
    },
    {
        id: 13,
        name: "image-13",
        image: new URL("../assets/header/13.jpg", import.meta.url), 
    },
    {
        id: 14,
        name: "image-14",
        image: new URL("../assets/header/14.jpg", import.meta.url), 
    },
    {
        id: 15,
        name: "image-15",
        image: new URL("../assets/header/15.jpg", import.meta.url), 
    },
    {
        id: 16,
        name: "image-16",
        image: new URL("../assets/header/16.jpg", import.meta.url), 
    }
];

/*________________________________________________________________________________ */

const categoryButtons = [
    {
        id:1,
        category: "Featured"
    },
    {
        id:2,
        category: "Character Art"
    },
    {
        id:3,
        category: "Concept Art"
    },
    {
        id:4,
        category: "Environment Art"
    },
    {
        id:5,
        category: "All"
    }
];

/*________________________________________________________________________________ */

import { RiLandscapeAiLine } from "react-icons/ri";
import { GiSwordwoman } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";


const services = [
{
id: 1,
icon: GiSwordwoman,
title: "Character Illustration",
description:
"Unique character designs crafted for games, books, brands, and personal projects. From rough concepts to polished artwork, each character is designed to tell a story."
},
{
id: 2,
icon: RiLandscapeAiLine,
title: "Concept Art",
description:
"Visual development for worlds, environments, and creative ideas. Perfect for game developers, authors, and creators looking to bring their vision to life."
},
{
id: 3,
icon: MdOutlineDesignServices,
title: "Commercial Illustration",
description:
"Custom illustrations tailored for marketing campaigns, websites, social media, packaging, and promotional materials that stand out and capture attention."
}
];

/*________________________________________________________________________________ */

import { PiSpeedometer } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";
import { TbChartArcs } from "react-icons/tb";
import { TbAdjustmentsHeart } from "react-icons/tb";

const whyChooseUs = [
{
id: 1,
icon: TbAdjustmentsHeart,
title: "Tailored To Your Vision",
description:
"Every project is approached with your goals in mind, ensuring the final artwork reflects your unique ideas and requirements."
},
{
id: 2,
icon: PiSpeedometer,
title: "Fast & Reliable Delivery",
description:
"Clear communication and efficient workflows help keep projects moving smoothly and on schedule."
},
{
id: 3,
icon: TbChartArcs,
title: "Versatile Art Styles",
description:
"From clean commercial illustrations to detailed character artwork, a wide range of styles can be adapted to suit your project."
},
{
id: 4,
icon: MdOutlineHandshake,
title: "Collaborative Process",
description:
"Regular feedback and revision opportunities ensure you're involved throughout the creative journey."
}
];

const sectionOne = [
    {
        id:1,
        heading: "Unlimited Revisions",
        description: "We work with you throughout the process to ensure the final artwork matches your vision."
    },
    {
        id:2,
        heading: "Reliable Delivery",
        description: "Clear timelines and efficient workflows help keep projects moving forward without delays.",
    },
    {
        id:3,
        heading: "Tailored Solutions",
        description: "Every illustration is created specifically for your goals, audience, and brand identity.",
    },
]

const sectionTwo = [
    {
        id:1,
        point: "Strengthen brand recognition."
    },
    {
        id:2,
        point: "Increase audience engagement."
    },
    {
        id:3,
        point: "Communicate complex ideas simply."
    },
    {
        id:4,
        point: "Create visual consistency."
    },
    {
        id:5,
        point: "Build trust and professionalism."
    },
    {
        id:6,
        point: "Differentiate from competitors."
    },
]


export { headerImages, categoryButtons, services, whyChooseUs, sectionOne, sectionTwo };