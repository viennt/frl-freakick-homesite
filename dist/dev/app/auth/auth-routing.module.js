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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVDQUF5QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRTVFLGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELDBDQUF3Qyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3RGLG1EQUFnRCwrREFBK0QsQ0FBQyxDQUFBO0FBQ2hILHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBR25FLGtCQUFVLEdBQVcsQ0FBQztJQUNqQztRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO1FBQ3pCLFdBQVcsRUFBRSxDQUFDLGlEQUF3QixDQUFDO0tBQ3hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLFNBQVMsRUFBRSxnQ0FBYztRQUN6QixXQUFXLEVBQUUsQ0FBQyxpREFBd0IsQ0FBQztLQUN4QztJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsbURBQXVCO1FBQ2xDLFdBQVcsRUFBRSxDQUFDLGlEQUF3QixDQUFDO0tBQ3hDO0lBQ0Q7UUFFRSxJQUFJLEVBQUUsY0FBYztRQUNwQixTQUFTLEVBQUUsb0VBQStCO0tBQzNDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSwrQ0FBcUI7UUFDaEMsV0FBVyxFQUFFLENBQUMsaURBQXdCLENBQUM7S0FDeEM7SUFDRDtRQUNFLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsU0FBUyxFQUFFLGlEQUFzQjtLQUNsQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsU0FBUyxFQUFFLE1BQU07S0FDbEI7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVZpYVNlY3JldENvZGUgfSBmcm9tICcuLi9ndWFyZHMvY2FuQWN0aXZlVmlhU2VjcmV0Q29kZSc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVxdWVzdEFjY291bnRDb21wb25lbnQgfSBmcm9tICcuL3JlcXVlc3QtYWNjb3VudC9yZXF1ZXN0LWFjY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2YXRlSW52aXRlZEFjY291bnRDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2YXRlLWludml0ZWQtYWNjb3VudC9hY3RpdmF0ZS1pbnZpdGVkLWFjY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0RW1haWxDb21wb25lbnQgfSBmcm9tICcuL3JlcXVlc3QtZW1haWwvcmVxdWVzdC1lbWFpbC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQWN0aXZhdGVSZWdpc3RlcmVkQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZhdGUtcmVnaXN0ZXJlZC1hY2NvdW50L2FjdGl2YXRlLXJlZ2lzdGVyZWQtYWNjb3VudC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aFJvdXRlczogUm91dGVzID0gKFtcbiAge1xuICAgIHBhdGg6ICdsb2dpbicsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVmlhU2VjcmV0Q29kZV1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsb2dpbi9jb250aW51ZS86bGluaycsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVmlhU2VjcmV0Q29kZV1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBjb21wb25lbnQ6IFJlcXVlc3RBY2NvdW50Q29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVWaWFTZWNyZXRDb2RlXVxuICB9LFxuICB7XG4gICAgLy8gL2FjdGl2YXRlLzphY3RpdmVUb2tlblxuICAgIHBhdGg6ICdhY3RpdmF0ZS86aWQnLFxuICAgIGNvbXBvbmVudDogQWN0aXZhdGVJbnZpdGVkQWNjb3VudENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3JlZ2lzdGVyLXN1Y2Nlc3MnLFxuICAgIHJlZGlyZWN0VG86ICcvZG93bmxvYWQnLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVzZXQtcGFzc3dvcmQnLFxuICAgIGNvbXBvbmVudDogUmVxdWVzdEVtYWlsQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVWaWFTZWNyZXRDb2RlXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Jlc2V0LXBhc3N3b3JkLzpsaW5rJyxcbiAgICBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgIHJlZGlyZWN0VG86ICcvbG9naW4nLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gIH0sXG5dKTtcbiJdfQ==
