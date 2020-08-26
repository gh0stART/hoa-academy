const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `91`,
            title: `HOA Murders`,
            videoSrc: `https://www.youtube.com/embed/aeJ1f58nLCE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `There have been 3 murders related to HOA Boards-all disgruntled homeowners
                who felt that killing Board members was their only alternative to stop the harassment.
                Dr. Solomon has contacted Las Vegas local TV stations to let them know about these
                murders. They are not interested in reporting on them because it is not local news.
                The will only report "local HOA murders".`,
            prev: { page: `9`, },
            next: { chapter: `92` }
        },

        {   chapter: `92`,
            title: `One Solution`,
            videoSrc: `https://www.youtube.com/embed/eYYKi7eS0pM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `If home owners were given legal access to the courts, then many HOAs would not
                be able to harass as they do. Presently, HOAs can take a home owner to court, but a home
                owner cannot take a HOA to court. Why not even the playing field? You as a home owner pay
                your dues so that your HOA can take you to court. Why not be able to use the HOAs money
                to take the HOA to court? Management and collection companies and HOA attorneys won't let
                this happen as it would cut into their profits.`,
            prev: { page: `9`, chapter: `91` },
            next: { chapter: `93` }
        },

        {   chapter: `93`,
            title: `Are You Being Spied Upon?`,
            videoSrc: `https://www.youtube.com/embed/iN7IMFcQ4k4?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Many people in HOAs and on the Board have nothing better to do than to drive
                around the community looking for violations. Many get great pleasure from doing
                this-feeling superior to their fellow neighbor. Dr. Solomon speculates that drones
                will be used in the future to spy on neighbors-inside and outside of their homes.`,
            prev: { page: `9`, chapter: `92` },
            next: { chapter: `94` }
        },

        {   chapter: `94`,
            title: `Disclosures When Buying a Home in a HOA`,
            videoSrc: `https://www.youtube.com/embed/TAZBS5-t29E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `There is nothing in the real estate closing documents that let a home owner
                know what they are in store for when moving into a HOA. Dr. Solomon suggests that a
                form be made available letting the potential home owner know that by moving into a HOA
                they are giving up their constitutional and civil rights and they will be fined and
                could have their home foreclosed on by the HOA. You can't join the club until you know
                the rules (CC&Rs), and you can't know the rules until you join the club (buy a house
                in an HOA).`,
            prev: { page: `9`, chapter: `93` },
            next: { chapter: `95` }
        },

        {   chapter: `95`,
            title: `Equality`,
            videoSrc: `https://www.youtube.com/embed/RUYTntRGSqI?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Studies indicate that social and financial equality between people decreases
                violence. The inequality between HOAs and home owners can lead to an increase in violence.`,
            prev: { page: `9`, chapter: `94` },
            next: { chapter: `96` }
        },

        {   chapter: `96`,
            title: `Retirement`,
            videoSrc: `https://www.youtube.com/embed/_UyYZimOWrQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Many people are using the equity in their home for their retirement. Many live
                on fixed incomes and many live in a HOA community. Many of these people are harassed by
                their HOA. They can do one of two things: pay the fines levied against them or go to
                ADR/Mediation which can cost a lot of money. A home owner may ignore the fines, but this
                could lead to a lien on their home with collections costs added on top. Again Dr. Solomon
                says: Don't buy a home in a HOA!`,
            prev: { page: `9`, chapter: `95` },
            next: { chapter: `97` }
        },

        {   chapter: `97`,
            title: `Health, Safety & Welfare`,
            videoSrc: `https://www.youtube.com/embed/7zYqFeB0UEk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `The government makes companies recall an item that is defective. These items
                may or may not have caused injury or death. But, the government has not "recalled" HOAs
                who have harassed home owners leading to serious illness and death. The government has
                become habituated to the money that HOAs save them. Home owners in a HOA are subject to
                double taxation.`,
            prev: { page: `9`, chapter: `96` },
            next: { chapter: `98` }
        },

        {   chapter: `98`,
            title: `Solutions in Nevada`,
            videoSrc: `https://www.youtube.com/embed/4LAWGyji0Qw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `The Nevada State Legislators can set a standard for the rest of the U.S. by voting
                down any bill that will adversely affect a home owner; financially, socially, physically,
                emotionally, and bills that won't allow foreclosure. Dr. Solomon suggests that the fines levied
                and collected by the HOAs be donated to a local non-profit organizations.`,
            prev: { page: `9`, chapter: `97` },
            next: { chapter: `99` }
        },

        {   chapter: `99`,
            title: `HOA Banks`,
            videoSrc: `https://www.youtube.com/embed/H3fQYTD_BD0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon believes that it is very plausible for HOAs to have their own banks-The
                Bank of HOA. Anyone wanting to buy or live in a HOA would have to get their mortgage through
                the bank and do all of their personal banking through the HOA bank. A home owner would be
                giving up all of their personal information to the HOA, thus giving up total control of their
                lives.`,
            prev: { page: `9`, chapter: `98` },
            next: { chapter: `100` }
        },

        {   chapter: `100`,
            title: `What Can Home Owners Do?`,
            videoSrc: `https://www.youtube.com/embed/CH-EYxWz5GA?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Home owners can get like minded neighbors together to file a recall petition
                against the HOA Board. This would allow new voting to take place to get like minded
                neighborhood friendly people on the board. There is no law that says a HOA has to have
                a management company. Why not take that money spent on paying the management company and
                use it to hire a person whose only job is to travel the neighborhood pulling weeds,
                putting trash cans away, changing burned out light bulbs, trimming trees, painting fences,
                and any other jobs that help to make the community clean and friendly. A home owner could
                volunteer to do the accounting. How much money would be saved and how much happier would
                the neighbors be?`,
            prev: { page: `9`, chapter: `99` },
            next: { chapter: `101` }
        },

        {   chapter: `101`,
            title: `Last Lecture`,
            videoSrc: `https://www.youtube.com/embed/JW-5zUXqrBE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon hopes that the lectures have been helpful and wishes all home owners well.`,
            prev: { page: `9`, chapter: `100` },
            next: {}
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);