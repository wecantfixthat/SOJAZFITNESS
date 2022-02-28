import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {PageNotFoundPageComponent} from "./components/page-not-found-page/page-not-found-page.component";
import {FitnesssearchComponent} from "./components/fitnesssearch/fitnesssearch.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {signupComponent} from "./components/signup/signup.component";
import {WorkoutmanualComponent} from "./components/workoutmanual/workoutmanual.component";
import {LoginpageComponent} from "./components/loginpage/loginpage.component";
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import {SettingsPageComponent} from "./components/settings-page/settings-page.component";
import {WorkoutpostComponent} from "./components/workoutpost/workoutpost.component";
import {MyProgressComponent} from "./components/my-progress/my-progress.component";

const routes: Routes = [
  { path: 'welcomepage', component: WelcomePageComponent},
  { path: 'aboutus', component: AboutUsComponent},
  {path: 'search', component:FitnesssearchComponent},
  {path: 'signup', component: signupComponent},
  {path: 'workoutmanual', component: WorkoutmanualComponent},
  {path: 'loginpage', component:LoginpageComponent},
  {path: 'exercisepost', component:WorkoutpostComponent},
  {path: 'progressbar', component:ProgressBarComponent},
  {path: 'myprogress', component: MyProgressComponent},
  {path: 'settingspage', component: SettingsPageComponent},
  { path: '**', component: PageNotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
