const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `21`,
            title: `Elder Abuse`,
            videoSrc: `https://www.youtube.com/embed/F1aALn6vkps?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The elderly are an easy target for the HOA. Quite often they own their
                home out-right or have high equity. Some are not able to or don't know
                how to deal with the HOA and the harassment. Some are on fixed incomes
                and become afraid that if they are fined they will not have the money to
                pay the fine. There are elder abuse organizations that should be able to
                help or give some direction. If you have elderly parents, get involved in
                their HOA. Protect your parents and your inheritance.`,
            prev: { page: `2`, },
            next: { page: `4`, chapter: `22` }
        },

        {   chapter: `22`,
            title: `Speaking to Family Members`,
            videoSrc: `https://www.youtube.com/embed/RdRqyFypmkw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon speaks directly to young and adult children who have parents
                living in a HOA. Even though unpleasant to talk about, he suggests
                protecting future assets against the HOA.`,
            prev: { page: `2`, chapter: `21` },
            next: { page: `4`, chapter: `23` }
        },

        {   chapter: `23`,
            title: `Solutions if You Own Your Home Out-Right`,
            videoSrc: `https://www.youtube.com/embed/gFGb1b07EuY?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If you are a homeowner who owns your home out-right or if you have a lot
                of equity it is important to protect your property. Two suggestions for
                protecting your property are: put a new mortgage on your property which
                will decrease your equity or put a lien against your home.`,
            prev: { page: `2`, chapter: `22` },
            next: { page: `4`, chapter: `24` }
        },

        {   chapter: `24`,
            title: `Homesteads`,
            videoSrc: `https://www.youtube.com/embed/_MR6NvEvAVM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A homestead will not protect you and your property from the HOA. HOAs
                are always paid first if there is any legal action or foreclosure. This is called
                a Super Priority Lien.`,
            prev: { page: `2`, chapter: `23` },
            next: { page: `4`, chapter: `25` }
        },

        {   chapter: `25`,
            title: `Liens`,
            videoSrc: `https://www.youtube.com/embed/I-ycF6_Mdbg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `As soon as a homeowner signs the CC&Rs the HOA has an automatic,
                implied lien on the home.`,
            prev: { page: `2`, chapter: `24` },
            next: { page: `4`, chapter: `26` }
        },

        {   chapter: `26`,
            title: `Two Tailed Psychiatric Disorder`,
            videoSrc: `https://www.youtube.com/embed/nz5xLWrJiPQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `This is a concept developed by Dr. Solomon. There are two groups who
                experience psychiatric disorders: 1) Those homeowners who are harassed
                by the HOA and who experience HOA Syndrome symptoms and 2) the
                HOA Board Members. Dr. Solomon describes some of these board
                members as being power hungry, delusional, it is their mission or duty to
                make sure that all homeowners follow the CC&Rs, viewing homeowners
                as second class citizens. Dr. Solomon also believes that many board
                members suffer from anti-social personality disorder.`,
            prev: { page: `2`, chapter: `25` },
            next: { page: `4`, chapter: `27` }
        },

        {   chapter: `27`,
            title: `Another Solution for Homeowners`,
            videoSrc: `https://www.youtube.com/embed/GSN9VE_Ozl0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon enlightens viewers that they do not have permission to attend
                any HOA Board Meetings prior to buying a home in a HOA community.
                Since the potential homeowner can't attend meetings, it would be wise to
                meet those already living in the community to get their thoughts and
                opinions about the HOA and if they have had any problems with the HOA.`,
            prev: { page: `2`, chapter: `26` },
            next: { page: `4`, chapter: `28` }
        },

        {   chapter: `28`,
            title: `CC&Rs & Governing Documents`,
            videoSrc: `https://www.youtube.com/embed/h27xfcAsEMM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Be aware-what you agree to today, may change tomorrow.`,
            prev: { page: `2`, chapter: `27` },
            next: { page: `4`, chapter: `29` }
        },

        {   chapter: `29`,
            title: `The Management Companies`,
            videoSrc: `https://www.youtube.com/embed/VNNYsPj3BbE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `HOAs are non-profit organizations. The association is not suppose to
                make money, but they by fining homeowners. If money is needed to beef-
                up the reserve fund then special assessments, and increase in
                monthly/yearly assessments or increase fining homeowners. The HOA
                contracts with a management company. The management company is paid
                by the HOA to send fine and lien letters and assessment bills to
                homeowners and maintain records. If the HOA and management company
                are unable to collect, then files are sent to collection.`,
            prev: { page: `2`, chapter: `28` },
            next: { page: `4`, chapter: `30` }
        },

        {   chapter: `30`,
            title: `Common Area Interest Communities`,
            videoSrc: `https://www.youtube.com/embed/S_lMAZKO-Rw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `January 25, 2013`,
            description: `Dr. Solomon believes that the best solution for HOA communities is for the banks
                to stop loaning money to builders who build HOA communities. Banks tend to be one of the
                organizations most hardest hit when a home goes into foreclosure. They assume a lot of
                liability. So why do banks loan to HOA communities anyway?`,
            prev: { page: `2`, chapter: `29` },
            next: { page: `4`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);