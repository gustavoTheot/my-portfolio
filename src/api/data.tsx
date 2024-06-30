import { Code, Coffee, Laptop, Student } from "phosphor-react";


export const profile = {
    name: 'Gustavo Theot. Silva',
    city: 'São Paulo',
    job: 'Web Development'
};

export const social = {
    linkedin: 'https://www.linkedin.com/in/gustavo-silva-theotonio/',
    github: 'https://github.com/gustavoTheot',
    email: 'mailto:gustavotheotonio46@gmail.com'
}

export const aboutMe = {
    first: 'Olá, me chamo Gustavo Theotonio e sou desenvolvedor Full Stack.Possuo formação em Técnico de Informática e estou me graduando em Ciência da Computação.Desde 2017, venho mergulhando nesse universo da técnologia, aprendendo a cada dia e desenvolvendo habilidades técnicas e comportamentáis.',
    second: 'Haha 😁, deu pra perceber que adoro a tecnologia, e é pelo simples fato de ver nela a incrível oportunidade de resolver problemas.  '
}

export const experience = {
    text: 'Durante essa longa estrada para me tornar um profissional melhor a cada dia que passa, pude perceber que para aprender é preciso saber ensinar e compartilhar conhecimento, então sigo um caminho entre a educação com relações pedagógicas e o mundo da programação '
}

export const experiences = [
    {
        title: 'Desenvolvedor Full Stack  - Viva Moveis ',
        description: 'Responsável pelo desenvolvimento de melhorias contínuas e inovações em aplicações web destinadas a instituições de educação, com foco principal no Sistema de Gestão Educacional (SIGEduc), onde atuei na prestação de serviços para a Secretaria de Educação do Estado do Rio Grande do Norte. ',
        date: '2024 - o momento',
        skill: ['JavaScript', 'TypeScript', 'Node.js', 'Prisma'],
        icon: Code
    },
    {
        title: 'Desenvolvedor Full Stack  - Bolsista Projeto ESIG',
        description: 'Responsável pelo desenvolvimento de melhorias contínuas e inovações em  aplicações web destinadas a instituições de educação, com foco principal  no Sistema de Gestão Educacional (SIGEduc), onde  atuei na prestação de serviços para a Secretaria de Educação do Estado do Rio Grande do Norte. ',
        date: '2023 - 2024',
        skill: ['Java', 'JSP', 'JSF', 'JPA', 'PostgreSQL', 'Jenkins'],
        icon: Coffee

    },
    {
        title: 'Ação de Extensão da Universidade Federal da Paraíba',
        description: 'Nesse projeto, auxiliei startups na definição de suas ideias de negócio e na implementação de MVPs de software, contribuindo significativamente para o ecossistema de inovação da Paraíba. Durante minha atuação como bolsista, tive a oportunidade de compartilhar conhecimento e fui um dos tutores responsáveis pelo desenvolvimento de um workshop voltado para startups de software. Além disso, ministrei aulas sobre desenvolvimento web para outros alunos voluntários, abordando diversos temas relacionados ao desenvolvimento web.',
        date: '2022 - 2023',
        skill: ['ReactJS', 'Node.js', 'Knex', 'SQLite', 'HTML', 'CSS', 'Git & GitHub'],
        icon: Student
    },
    {
        title: 'Estágiário Desenvolvedor de Web - ECOA PUC-RIO',
        description: 'Desenvolvimento de ideias inovadoras e comercialização de soluções com potencial para impactar positivamente o mercado de seguros e resseguros. Utilização do desenvolvimento web para criar aplicações que apresentem os projetos desenvolvidos de maneira eficaz e atraente.',
        date: '2022 - 2023',
        skill: ['ReactJS', 'Node.js', 'Knex', 'SQLite', 'HTML', 'CSS'],
        icon: Laptop
    },
]