import { Component } from "@angular/core";
import { RouterLink , RouterLinkActive } from "@angular/router"

@Component({
    selector : "menu",
    template : `
        <header class="bg-primary ">
        <nav class="navbar navbar-expand navbar-dark container">
            <span class="navbar-brand">{{ siteName }}</span>
            <ul class="navbar-nav">
                <li class="nav-item" >
                    <a class="nav-link" [routerLink]="['/']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:
                        true}">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/articles']" [routerLinkActive]="['active']">Articles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/contact-us']" [routerLinkActive]="['active']">Contact</a>
                </li>
            </ul>
        </nav>
        <header>
    `,
    standalone : true,
    styleUrl : "./menu.component.css",
    imports: [RouterLink , RouterLinkActive]
})
export class Menu{
    public siteName : string = "Site avec Angular"
   
}