const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `71`,
            title: `Is This a Shakedown?`,
            videoSrc: `https://www.youtube.com/embed/WzSgWKzaYEQ`,
            timeStamp: `April 4, 2013`,
            description: `HOAs, the management company, collection company and the HOA attorney
                are supported by the government. These organizations save money for the government
                and they take money from the pockets of the homeowner.`,
            prev: { page: `7`, },
            next: { page: `9`, chapter: `72` }
        },

        {   chapter: `72`,
            title: `An Elder Abuse Update`,
            videoSrc: `https://www.youtube.com/embed/68BjCx9QADk`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon believes that the elderly are easy targets for the HOA,
                management and collection companies and attorneys. Dr. Solomon asks the families
                of their harassed elderly parents to become involved.`,
            prev: { page: `7`, chapter: `71` },
            next: { page: `9`, chapter: `73` }
        },

        {   chapter: `73`,
            title: `HOAs are Non-profits?`,
            videoSrc: `https://www.youtube.com/embed/Y86Hh7DOHI0`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon proposes that the IRS changes the HOA status to a for-profit organization.`,
            prev: { page: `7`, chapter: `72` },
            next: { page: `9`, chapter: `74` }
        },

        {   chapter: `74`,
            title: `Health, Welfare and Safety`,
            videoSrc: `https://www.youtube.com/embed/n79mB29aQIg`,
            timeStamp: `April 4, 2013`,
            description: `The HOA is responsible for the homeowner's health, welfare and safety, but this
                is not always the case. Harassment by HOAs is ignored by the very institutions that are
                suppose to protect homeowners.`,
            prev: { page: `7`, chapter: `73` },
            next: { page: `9`, chapter: `75` }
        },

        {   chapter: `75`,
            title: `Are Things Getting Better?`,
            videoSrc: `https://www.youtube.com/embed/Bgc22zlp3Cw`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon says, "NO!" And again he says, "Don't buy a home in a HOA!"`,
            prev: { page: `7`, chapter: `74` },
            next: { page: `9`, chapter: `76` }
        },

        {   chapter: `76`,
            title: `Entire Families Under Stress`,
            videoSrc: `https://www.youtube.com/embed/DmYfPWGVnp0`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon states that the stress created by HOA harassment affects the entire family.`,
            prev: { page: `7`, chapter: `75` },
            next: { page: `9`, chapter: `77` }
        },

        {   chapter: `77`,
            title: `Why Hasn't the Government Done Something?`,
            videoSrc: `https://www.youtube.com/embed/wAhstAZYnsk`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon suggests that the problems haven't gotten "loud enough". There have not been enough deaths and violence.`,
            prev: { page: `7`, chapter: `76` },
            next: { page: `9`, chapter: `78` }
        },

        {   chapter: `78`,
            title: `Any Other Soloutions?`,
            videoSrc: `https://www.youtube.com/embed/9HqEM8m_tOY`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon suggests that for 3 years there be a stop on fines, liens and foreclosures.`,
            prev: { page: `7`, chapter: `77` },
            next: { page: `9`, chapter: `79` }
        },

        {   chapter: `79`,
            title: `Another Solution`,
            videoSrc: `https://www.youtube.com/embed/P2t7BMl0_0w`,
            timeStamp: `April 4, 2013`,
            description: `What if HOAs paid for the homeowner's legal fees?`,
            prev: { page: `7`, chapter: `78` },
            next: { page: `9`, chapter: `80` }
        },

        {   chapter: `80`,
            title: `Divorce`,
            videoSrc: `https://www.youtube.com/embed/IlsBp9VDKpU`,
            timeStamp: `April 4, 2013`,
            description: `HOAs can cause a stress between couples.`,
            prev: { page: `7`, chapter: `79` },
            next: { page: `9`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);