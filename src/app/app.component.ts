import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    // voor de menu balk aan de bovenkant
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Mail',
            url: '/mail',
            icon: 'mail'
        },
        {
            title: 'Company',
            url: '/company',
            icon: 'briefcase'
        }
    ];
    // voor de menu balk aan de onderkant
    public appFooter = [
        {
            title: 'Profile',
            url: '/profile',
            icon: 'person',
            user: true
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: 'settings',
            user: true
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'person',
            user: false
        },
        {
            title: 'Register',
            url: '/register',
            icon: 'person',
            user: false
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
