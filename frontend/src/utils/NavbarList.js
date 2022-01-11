import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const publicNavbar = [
    {
        title: 'Inicio',
        url: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        url: '/Login',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    }
];

export const privateNavbar = [
    {
        title: 'Inicio',
        url: '/private/QuestionsPage',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Nueva',
        url: '/private/CreateQuestion',
        icon: <FaIcons.FaPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Mis preguntas',
        url: '/private/MyQuestions',
        icon: <FaIcons.FaQuestion />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        url: '/private/profile',
        icon: <FaIcons.FaCog />,
        cName: 'nav-text'
    },
    {
        title: 'Cerrar sesión',
        url: '/private/Logout',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-text'
    }
];
