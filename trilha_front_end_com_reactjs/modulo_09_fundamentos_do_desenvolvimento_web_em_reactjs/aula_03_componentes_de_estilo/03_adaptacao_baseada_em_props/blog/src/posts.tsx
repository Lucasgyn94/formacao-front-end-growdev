export interface PostData {
    id: number;
    title: string;
    image: string;
    category: string;
    avatar: string;
    author: string;
    createdAt: string;
    description: string;
}

export const posts: PostData[] = [
    {
        id: 1,
        title: 'Bolo de chocolate caseiro',
        image: 'https://static.itdg.com.br/images/360-240/e3bde312e7e27c8f8b3982c74ba4819c/318292-original.jpg',
        category: 'Receitas',
        avatar: 'https://github.com/lucasgyn94.png',
        author: 'Lucas Silva',
        createdAt: '20/09/2026',
        description:
            'Aprenda a preparar um bolo de chocolate fofinho para o café da tarde.',
    },
    {
        id: 2,
        title: 'Dicas de maquiagem para o dia a dia',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80',
        category: 'Beleza',
        avatar: 'https://github.com/lucasgyn94.png',
        author: 'Lucas Silva',
        createdAt: '20/09/2026',
        description:
            'Confira dicas simples para uma maquiagem prática no dia a dia.',
    },
    {
        id: 3,
        title: '5 lugares incríveis para viajar no Brasil',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
        category: 'Viagem',
        avatar: 'https://github.com/lucasgyn94.png',
        author: 'Lucas Silva',
        createdAt: '20/09/2026',
        description:
            'Descubra destinos incríveis e planeje sua próxima viagem pelo Brasil.',
    },
    {
        id: 4,
        title: 'Como começar a programar',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        category: 'Tecnologia',
        avatar: 'https://github.com/lucasgyn94.png',
        author: 'Lucas Silva',
        createdAt: '20/09/2026',
        description:
            'Conheça os primeiros passos para começar a estudar programação.',
    },
];
