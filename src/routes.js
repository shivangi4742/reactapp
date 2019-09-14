import Loadable from 'react-loadable';
import NotFound from './views/not-found';
import Loading from './components/loading';
import Home from './views/home/home.tsx';


const AsyncDPList = Loadable({
    loader: () => import("./views/dp-list/dp-list"),
    loading: Loading
})

const AsyncDPDetails = Loadable({
    loader: () => import("./views/dp-details/dp-details"),
    loading: Loading
});

const Routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/dplist',
        component: AsyncDPList,
        exact: true
    },
    {
        path: '/dplist/:id',
        component: AsyncDPDetails,
    },
    {
        component: NotFound
    }
];

export default Routes;