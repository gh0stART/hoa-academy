const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `31`,
            title: `Super Priority Liens`,
            videoSrc: `https://www.youtube.com/embed/73V46ECoMJs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If a homeowner has fines or liens levied against their home, they are unable
                to sell their home unless these are satisfied. The HOA has what is called a Super Priority
                Lien against any home in the community that is not in good standing. Other people or
                organizations may not get paid, but the HOA will always get paid and first. Most bankers
                and real estate agents do not know what a Super Priority Lien is.`,
            prev: { page: `3`, },
            next: { page: `5`, chapter: `32` }
        },

        {   chapter: `32`,
            title: `Stopping loans`,
            videoSrc: `https://www.youtube.com/embed/XXmhi0AyGqg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `BANKS-don't loan to developers who want to build a HOA community!`,
            prev: { page: `3`, chapter: `31` },
            next: { page: `5`, chapter: `33` }
        },

        {   chapter: `33`,
            title: `HOA Meetings`,
            videoSrc: `https://www.youtube.com/embed/KX_omttZiho?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are two sections to a HOA Board Meeting: An open meeting in which homeowners
                are able to participate and an Executive Board Meeting in which homeowners are not able to
                participate. During the Executive meeting the Board Members discuss homeowners discretions and
                possible fines and liens. This is confidential information for Board Members only.`,
            prev: { page: `3`, chapter: `32` },
            next: { page: `5`, chapter: `34` }
        },

        {   chapter: `34`,
            title: `Who does the board consist of?`,
            videoSrc: `https://www.youtube.com/embed/AUo6K9Ewwc0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Any homeowner in good standing in the community can run for the board and homeowners
                participate in the election process. The Board Members' role is to enforce the CC&Rs. Some board
                members get great pleasure from their new found authoritative role.`,
            prev: { page: `3`, chapter: `33` },
            next: { page: `5`, chapter: `35` }
        },

        {   chapter: `35`,
            title: `New Terms - Equity Theft`,
            videoSrc: `https://www.youtube.com/embed/PnPxbMOxEzs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `This is a relatively new term in which people or organizations steal a person's
                equity, leaving that person with the debt. Mr. and Mrs. Jones pay their assessments on time,
                but they forget to close their garage door. This leads to a fine. For whatever reason the fines
                are compounded. Who profits from Mr. and Mrs. Jones discretion, the management and collections
                companies.`,
            prev: { page: `3`, chapter: `34` },
            next: { page: `5`, chapter: `36` }
        },

        {   chapter: `36`,
            title: `Assessment`,
            videoSrc: `https://www.youtube.com/embed/JwR6ie1MUwg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Assessments are dues paid to the HOA on a monthly/yearly basis. The assessments
                pay for the management company, common area up-keep, special assessments. If a homeowner lives
                in an association that has a Master Association and a sub-association then they pay two assessments.`,
            prev: { page: `3`, chapter: `35` },
            next: { page: `5`, chapter: `37` }
        },

        {   chapter: `37`,
            title: `Pay Protest`,
            videoSrc: `https://www.youtube.com/embed/TxnZJ6_buZk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Again, Dr. Solomon stresses that he is not an attorney, but recommends that each
                time a homeowner sends in their assessment payment or pays a fine, that they write in the memo
                section-"Paid Under Protest". If a homeowner must go to court then they have documentation
                letting the courts know they did not want to pay the assessment or felt the fine was unfairly levied.`,
            prev: { page: `3`, chapter: `36` },
            next: { page: `5`, chapter: `38` }
        },

        {   chapter: `38`,
            title: `Retaliation`,
            videoSrc: `https://www.youtube.com/embed/MlPnGQjp6jc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Many homeowners in a HOA are fearful of retaliation if they speak out against
                their HOA. There are legislative laws against retaliation, but they are not always followed.
                Remember, write "Paid Under Protest" on your check and send it by certified mail. Send a
                demand letter requesting the return of your fine payment. If refused then take the HOA to
                small claims court.`,
            prev: { page: `3`, chapter: `37` },
            next: { page: `5`, chapter: `39` }
        },

        {   chapter: `39`,
            title: `Foreclosures`,
            videoSrc: `https://www.youtube.com/embed/Ja5Uok4dKVo?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Foreclosure, and even the threat of foreclosure, is a nightmare for homeowners.
                Read your CC&Rs and state laws regarding foreclosure. In many states a home can only be
                foreclosed upon if the homeowner doesn't pay their assessments. First the homeowner is fined,
                then the property is liened and after being sent to collections, the property can be foreclosed.`,
            prev: { page: `3`, chapter: `38` },
            next: { page: `5`, chapter: `40` }
        },

        {   chapter: `40`,
            title: `More collection company`,
            videoSrc: `https://www.youtube.com/embed/VESX49ANGes?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A bad day for a collection company is when they are not sent any fines or liens
                from the HOA and the HOA management company.`,
            prev: { page: `3`, chapter: `39` },
            next: { page: `5`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);