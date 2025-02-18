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
import Fairy from "../assets/images/piclumen-1739883408825.png"
import prop from "../assets/images/Screenshot 2025-02-18 133226.png"
import colorPredi from "../assets/images/piclumen-1739858719992.png"
const data = [
    {
        name: "Picture To Word",
        type: "Mobile Game",
        url: "https://github.com/arpitnakranii/Puzzle-online",
        github: "https://github.com/arpitnakranii/Puzzle-online",
        image: picToWord,
        slug: "picture-to-word",
        description: `🧩 Guess the Word! 🔍✨

Test your brain with this addictive & fun word puzzle game! 🧠💡 Look at two pictures 🖼️➕🖼️ and guess the word! ✅ Perfect for all ages, enjoy exciting levels & unique challenges that will keep you hooked! 🎉🔥`,
        tech: ['Unity 3D', 'C#', 'Node js', 'Express Js', 'Mongo DB']
        
    },
    {
        name: "E-commerce API",
        type: "Node API's",
        url: "https://github.com/arpitnakranii/e-commerce",
        github: "https://github.com/arpitnakranii/e-commerce",
        image: eCom,
        slug: "e-commerce-api",
        description: `🛍️ E-Commerce API: Powering Online Shopping! 🚀

An E-Commerce API is a set of protocols that enables seamless communication between software applications for managing online transactions 💳, product listings 📦, user accounts 👤, and order processing 📜. It allows smooth integration with various platforms & services, boosting efficiency and streamlining operations for e-commerce businesses! ⚡💼`,
        tech: ['Node js', 'Anodis Js', 'Stripe Gatway', 'JS', 'Mongo DB']
    },
    {
        name: "To-do List",
        type: "Node API's",
        url: "https://github.com/arpitnakranii/todo_list",
        github: "https://github.com/arpitnakranii/todo_list",
        image: toDO,
        slug: "to-do-list",
        description: `✅ To-Do List API: Simplify Task Management! 📝🚀

A To-Do List API is a set of protocols that enables applications to create ➕, read 👀, update ✏️, and delete ❌ tasks in a task management system. It allows seamless integration of task management features, helping users organize 🗂️ and prioritize ⭐ their tasks efficiently for better productivity! 📆⚡`,
        tech: ['Node js', 'Anodis Js', 'JS', 'Mongo DB']
    },{
        name: "Fairy Tails",
        type: "Mobile Game",
        url: "https://drive.google.com/file/d/1CnkAk9kGU5LePWoECLRMYG3HTYqyRZHe/view?usp=drive_link",
        github: "https://drive.google.com/file/d/1CnkAk9kGU5LePWoECLRMYG3HTYqyRZHe/view?usp=drive_link",
        image: Fairy,
        slug: "fairy-tails",
        description: `🌿 Merge & Grow! 🌱✨ Drag & merge identical pots 🏺➕🏺 to evolve them! Watch plants grow into amazing designs 🌳💖!

💰 Earn & Upgrade! 🪙💵 Use coins & cash to buy new pots & speed up growth! 🚀

🎁 Boost Progress! ✅ Complete tasks, claim daily rewards, & use power-ups ⚡!

🌿 Expand Your Garden! ➕ Add more pots & unlock rare designs 🌺!

🔥 Merge your way to the ULTIMATE plant! 🌳🏆`,
        tech: ['Firebase', 'Unity 3D', 'C#', 'REST APIs', 'Payment Systems']
    },{
        name: "Property Selling",
        type: "Website",
        url: "https://drive.google.com/file/d/178tASiYlcmRTE66bI5G5XMQkjRulNFjA/view?usp=drive_link",
        github: "https://drive.google.com/file/d/178tASiYlcmRTE66bI5G5XMQkjRulNFjA/view?usp=drive_link",
        image: prop,
        slug: "property-selling",
        description: `This real estate website 🏡 simplifies buying, selling, and renting properties with advanced search 🔍, easy property submission 🏠, and a featured listings section. Users can calculate installments 💰, explore recently added properties, and get expert support 📞. The platform is responsive 📱, ensuring seamless browsing on any device. With top-rated services ⭐ and high-quality listings, it offers a smooth and efficient property search experience! 🚀`,
        tech: ['HTML', 'CSS', 'JavaScript', 'Boostrap', 'JQuery','XAMPP','MySQL','PHP','Database']
    },{
        name: "Color Prediction",
        type: "Mobile Game",
        url: "https://rajaclub.in/",
        github: "https://rajaclub.in/",
        image: colorPredi,
        slug: "color-prediction",
        description: `🎨 Colour Prediction Game: Guess & Win! 🎯💰

A Colour Prediction Game is an online betting or guessing game where players predict the outcome of a randomly chosen colour (e.g., red 🔴, green 🟢, blue 🔵). Players place bets 💵 on a specific colour—if their guess is correct, they win prizes 🎁 based on the odds! With fast-paced gameplay ⚡ and quick results ⏳, these games are a hit on gaming and betting platforms for their simplicity & thrill! 🎮🔥`,
        tech: ['Socket.io', 'REST APIs', 'WebGL', ' Firebase', 'Game Development','Unity 3D','C#']
    }
]

export function getData(){
    return data;
}

