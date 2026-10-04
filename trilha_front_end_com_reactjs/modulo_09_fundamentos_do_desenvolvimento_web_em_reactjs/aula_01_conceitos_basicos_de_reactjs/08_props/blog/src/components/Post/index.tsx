import type { JSX, ReactNode } from "react";

interface PostProps {
    id: number,
    image: string,
    category: string
    title?: string,
    description: string,
    author: string,
    avatar: string,
    createdAt: string,
    children?: ReactNode
}

export function Post({author,avatar,category,createdAt,description,id,image,title = "Post Sem título", children}  : PostProps): JSX.Element {
    return (
        <article>
            <img
                src={image}
                alt={title}
            />

            <p>{category}</p>
            <h2>{title}</h2>

            <div>
                <img src={avatar} alt="" />
                <div>
                    <span>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
            <p>{description}</p>
            {children}
        </article>
    );
}

// export function Post(props: PostProps) {
//     return (
//         <article>
//             <img
//                 src={props.image}
//                 alt={props.title}
//             />

//             <p>{props.category}</p>
//             <h2>{props.title}</h2>

//             <div>
//                 <img src={props.avatar} alt="" />
//                 <div>
//                     <span>{props.author}</span>
//                     <span>{props.createdAt}</span>
//                 </div>
//             </div>
//             <p>{props.description}</p>
//         </article>
//     );
// }