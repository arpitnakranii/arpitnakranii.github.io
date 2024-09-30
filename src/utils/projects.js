import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import docAid from "../assets/images/docAid.webp";
import LifeInsureEase from "../assets/images/lifeinsureease.webp";
import Portfolio from "../assets/images/portfolio.webp"
import picToWord from "../assets/images/Pictoword.jpg"
import eCom from "../assets/images/e-com.png"
import toDO from "../assets/images/to-do.jpg"
const data = [
    {
        name: "Picture To Word",
        type: "Mobile Game",
        url: "https://github.com/arpitnakranii/Puzzle-online",
        github: "https://github.com/arpitnakranii/Puzzle-online",
        image: picToWord,
        slug: "picture-to-word",
        description: "Guess the word from two pictures! Test your brain with this addictive and fun word puzzle game. Perfect for all ages, enjoy challenging yourself with exciting levels and unique puzzles!.",
        tech: ['Unity 3D', 'C#', 'Node js', 'Express Js', 'Mongo DB']
        
    },
    {
        name: "E-commerce API",
        type: "Node API's",
        url: "https://github.com/arpitnakranii/e-commerce",
        github: "https://github.com/arpitnakranii/e-commerce",
        image: eCom,
        slug: "e-commerce-api",
        description: "An e-commerce API is a set of protocols that enables software applications to communicate for managing online transactions, product listings, user accounts, and order processing. It facilitates seamless integration with various platforms and services, enhancing operational efficiency in e-commerce businesses.",
        tech: ['Node js', 'Anodis Js', 'Stripe Gatway', 'JS', 'Mongo DB']
    },
    {
        name: "To-do List",
        type: "Node API's",
        url: "https://github.com/arpitnakranii/todo_list",
        github: "https://github.com/arpitnakranii/todo_list",
        image: toDO,
        slug: "to-do-list",
        description: "A to-do list API is a set of protocols that allows applications to create, read, update, and delete tasks in a task management system. It facilitates seamless integration of task management features into applications, enabling users to organize and prioritize their tasks efficiently.",
        tech: ['Node js', 'Anodis Js', 'Stripe Gatway', 'JS', 'Mongo DB']
    }
]

export function getData(){
    return data;
}