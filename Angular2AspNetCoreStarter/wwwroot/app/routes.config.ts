import { About } from './about/about.component';
import { Profile } from './profile/profile.component';
import { Home } from './home/home.component';
import { LogIn } from './login/login.component';
import { Registration } from './registration/registration.component';
import { Route } from 'angular2/router';

export var Routes = {
    home: new Route({ path: '/', name: 'Home', component: Home }),
    about: new Route({ path: '/about', name: 'About', component: About }),
    profile: new Route({ path: '/profile', name: 'Profile', component: Profile }),
    logIn: new Route({ path: '/logIn', name: 'LogIn', component: LogIn }),
    register: new Route({ path: '/register', name: 'Registration', component: Registration })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
