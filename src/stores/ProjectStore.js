import { writable } from 'svelte/store';

export const ProjectStore = writable([
    {
        title: 'Tutoring Log v2',
        img: "./images/portfolio-projects/tutoring-portal-2/dashboard.jpg",
        description: "This is the second iteration of the tutoring portal I made \
        to track the classes I have and the amount that my clients owe for the month.",
        keyInfo: {
            "Development Hurdles": [
                'the structure of my api routes made advanced querying difficult to implement', 'test', 'test'
            ],
            "Solutions": [
                "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", "blah", "blah"
            ],
            "Features": [
                "session logging",
                "get client dues by month", 
                "search sessions by month and year"
            ]
        },
        "Tech": [
            "Svelte", "Express.js", "PostgreSQL", "Auth0"
        ]

        
    }
])