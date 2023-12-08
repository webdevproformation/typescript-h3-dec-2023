import { Component } from "@angular/core";
import { Router } from "@angular/router"

@Component({
    selector : "menu",
    template : `
        <header class="bg-primary ">
        <nav class="navbar navbar-expand navbar-dark container">
            <span class="navbar-brand">{{ siteName }}</span>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/articles">Articles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact-us">Contact</a>
                </li>
            </ul>
        </nav>
        <header>
    `,
    standalone : true,
    styleUrl : "./menu.component.css"
})
export class Menu{
    public siteName : string = "Site avec Angular"
    constructor(private router: Router) {
        // ...
    }
}