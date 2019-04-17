"use strict";
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
var login_component_1 = require('./login/login.component');
var request_account_component_1 = require('./request-account/request-account.component');
var activate_invited_account_component_1 = require('./activate-invited-account/activate-invited-account.component');
var reset_password_component_1 = require('./reset-password/reset-password.component');
var request_email_component_1 = require('./request-email/request-email.component');
exports.AuthRoutes = ([
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
    {
        path: 'login/continue/:link',
        component: login_component_1.LoginComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
    {
        path: 'home',
        component: request_account_component_1.RequestAccountComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
    {
        path: 'activate/:id',
        component: activate_invited_account_component_1.ActivateInvitedAccountComponent
    },
    {
        path: 'register-success',
        redirectTo: '/download',
        pathMatch: 'full'
    },
    {
        path: 'reset-password',
        component: request_email_component_1.RequestEmailComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
    {
        path: 'reset-password/:link',
        component: reset_password_component_1.ResetPasswordComponent,
    },
    {
        path: 'register',
        redirectTo: '/login',
        pathMatch: 'full'
    },
]);
