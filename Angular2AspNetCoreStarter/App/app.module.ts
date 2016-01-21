import { AboutService } from './about/about.service';

import { About } from './about/about.component';
import { LogInMenu } from './login/login-menu.component';
import { Navigation } from './navigation/navigation.component';

export const APP_PROVIDERS = [
    AboutService
];

export const APP_DIRECTIVES = [
    About,
    LogInMenu,
    Navigation
]