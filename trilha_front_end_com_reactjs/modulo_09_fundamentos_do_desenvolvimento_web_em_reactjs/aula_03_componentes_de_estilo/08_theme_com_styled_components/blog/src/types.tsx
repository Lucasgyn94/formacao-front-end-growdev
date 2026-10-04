import type { ReactNode } from 'react';

export interface IPost {
    id: number;
    image: string;
    category: string;
    title?: string;
    description: string;
    author: string;
    avatar: string;
    createdAt: string;
    children?: ReactNode;
}
