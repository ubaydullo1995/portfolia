import Kirish from '../pages/kirish/Kirish'
import Boglanish from '../pages/boglanish/Boglanish'
import UzimHaqimda from '../pages/uzimHaqimda/UzimHaqimda'
import Xizmatim from '../pages/xizmatim/Xizmatim'
import Footer from '../component/footer/Footer'
import NotFound from '../pages/notFound/NotFound'

export const routes = [
    {
        path: '/',
        element: <Kirish />
    },
    {
        path: '/home',
        element: <Kirish />
    },
    {
        path: '/contact',
        element: <Boglanish />
    },
    {
        path: '/about',
        element: <UzimHaqimda />
    },
    {
        path: '/service',
        element: <Xizmatim />
    },
    {
        path: '/footer',
        element: <Footer />
    },
    {
        path: '*',
        element: <NotFound />
    }
]