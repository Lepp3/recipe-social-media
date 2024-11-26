import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipeDetailsComponent } from './catalog/recipe-details/recipe-details.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'recipes',
        children: [
            {path: '', component: CatalogComponent},
            {
                path: 'details/:id',
                component: RecipeDetailsComponent
            }
        ]
    },
    










    {path: '**', component: ErrorPageComponent},

];
