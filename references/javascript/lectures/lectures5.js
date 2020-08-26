const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `41`,
            title: `Violence`,
            videoSrc: `https://www.youtube.com/embed/kYHYYtf32gU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There is now a generation of children that have grown up in a HOA or have
                experienced the problems their parents have had with their HOA. This is a generation
                that could take revenge on the HOAs.`,
            prev: { page: `4`, },
            next: { page: `6`, chapter: `42` }
        },

        {   chapter: `42`,
            title: `Morals, Ethics & Values`,
            videoSrc: `https://www.youtube.com/embed/OYsZcz-0KjA?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The moral imperative, intellectually, intuitively and socially knowing what is
                right and wrong, comprises the majority of people. There are some people, some board members,
                who know when something is morally wrong, but they do it anyway. If all board members lived up
                to the moral imperative of the majority, then there would be no inequities in neighborhoods.`,
            prev: { page: `4`, chapter: `41` },
            next: { page: `6`, chapter: `43` }
        },

        {   chapter: `43`,
            title: `Garage Sales & Estate Sales`,
            videoSrc: `https://www.youtube.com/embed/yisTCyOLzZU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Most , if not all HOAs allow garage sales in the community, but they are usually planned
                and only allowed 1-4 times a year. By controlling when garage sales happen the HOA can make sure
                that "undesirables" are kept out of the neighborhood. This is also true of estate sales. Someone
                in the community dies and their heirs are left with the deceases home and personal belongings.
                The best and most expeditious way for the heirs to deal with this massive and painful act is to
                have an estate sale company come into the community to organize and sell the deceases belongings.
                Some HOAs are not sympathetic to what the family is going through. They don't want "undesirables"
                in their community.`,
            prev: { page: `4`, chapter: `42` },
            next: { page: `6`, chapter: `44` }
        },

        {   chapter: `44`,
            title: `More on CC&Rs`,
            videoSrc: `https://www.youtube.com/embed/nLlnmx8qbPg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The CC&Rs (Covenants, Conditions & Regulations) are a rule book for which the community
                must follow and the Board Members must enforce. The CC&Rs differ from community to community.
                In order to buy a home in a HOA the buyer must sign that they have read and understood the CC&Rs.
                Some rule books are just a few pages and some are hundreds of pages. Quite often the buyer is not
                given the CC&Rs until they sign all real estate and HOA documents.`,
            prev: { page: `4`, chapter: `43` },
            next: { page: `6`, chapter: `45` }
        },

        {   chapter: `45`,
            title: `Bullying & Harassment`,
            videoSrc: `https://www.youtube.com/embed/CItbS--7Avw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Just about everyone has seen bullying, been bullied or has been a participant in bullying
                someone. HOA Board Members can legally bully homeowners because they have the CC&Rs and state
                law behind them. The word "reasonable" seems to be used often in HOA documents and is very
                subjective. This kind of bullying is very much like extortion.`,
            prev: { page: `4`, chapter: `44` },
            next: { page: `6`, chapter: `46` }
        },

        {   chapter: `46`,
            title: `Fears`,
            videoSrc: `https://www.youtube.com/embed/Wr5--4OS3jQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Fear is one of the many symptoms someone with HOA Syndrome may experience. At the root
                is harassment which leads to fear, fear leads to stress, stress leads to physical and mental
                health problems. Scientific research indicates that one way to relieve stress is to put stress
                on someone else.`,
            prev: { page: `4`, chapter: `45` },
            next: { page: `6`, chapter: `47` }
        },

        {   chapter: `47`,
            title: `Why Doesn't the Government Intercede`,
            videoSrc: `https://www.youtube.com/embed/nYXVnCS_guQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon believes that HOAs started with good intentions. The government thought
                they were doing good. But over time, legislators have been swayed by developers, management
                companies, collection companies, and HOA attorneys to give them more and more power over
                the HOAs.`,
            prev: { page: `4`, chapter: `46` },
            next: { page: `6`, chapter: `48` }
        },

        {   chapter: `48`,
            title: `Children`,
            videoSrc: `https://www.youtube.com/embed/3GCSlDI6XiU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `It is not unusual that the harassment from the HOA pits husband against wife. They
                argue. The children hear the arguing which in turn at stress to the child's life. Remember,
                stress causes illness. This can be very dangerous for a pregnant woman. The stress she
                experiences can be detrimental to her fetus/baby.`,
            prev: { page: `4`, chapter: `47` },
            next: { page: `6`, chapter: `49` }
        },

        {   chapter: `49`,
            title: `Punitive Fine Letters`,
            videoSrc: `https://www.youtube.com/embed/SsLNPNV7mKc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Many HOA Board Members will say that a "friendly" letter is sent to the homeowner
                letting them know their light is out, they have a weed in their yard or they forgot to take in
                their trash cans. Most HOA violation letters are very punitive: you are on notice, you will be
                fined with references to the CC&Rs and state laws. These letters are intended to induce fear
                and hurt the homeowner.`,
            prev: { page: `4`, chapter: `48` },
            next: { page: `6`, chapter: `50` }
        },

        {   chapter: `50`,
            title: `The Ombudsman's Office`,
            videoSrc: `https://www.youtube.com/embed/0BDIGryazog?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Many states have an organization called the Ombudsman's Office. This is a governmental
                organization that was created to help the HOA and the homeowner. Unfortunately, the Office
                has failed. Generally, there is just one or two offices in the state. It is difficult to speak
                with anyone. There is a lot of red tape one has to go through to file a complaint and the
                investigation can take weeks to years to be resolved. Another reason the Office has failed is
                that employees need HOAs and homeowners to be in conflict, their jobs depend on it.`,
            prev: { page: `4`, chapter: `49` },
            next: { page: `6`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);