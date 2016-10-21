import { Component } from '@angular/core';

@Component({
    selector: 'my-authorization',
    template: '<div class="login"><div class="login-container"><form><router-outlet></router-outlet></form></div></div>'
})

export class AuthorizationComponent {}