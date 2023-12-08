import { Component } from "@angular/core";

@Component({
    selector : "menu",
    template : `
        <header class="bg-primary ">
        <nav class="navbar navbar-expand navbar-dark container">
            <span class="navbar-brand">{{ siteName }}</span>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Articles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
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
}