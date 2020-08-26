const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `81`,
            title: `More About Dr. Solomon`,
            videoSrc: `https://www.youtube.com/embed/AyQ-ozQwVls`,
            timeStamp: `August 22, 2013`,
            description: `Go on-line and search: gary solomon hoa, www.hoasyndrome.com and www.hoaacademy.com.`,
            prev: { page: `8`, },
            next: { page: `10`, chapter: `82` }
        },

        {   chapter: `82`,
            title: `Pet Problems`,
            videoSrc: `https://www.youtube.com/embed/ITqW8mjJhfY`,
            timeStamp: `August 22, 2013`,
            description: `HOAs decide how many dogs, what size and what breed a homeowner can have.`,
            prev: { page: `8`, chapter: `81` },
            next: { page: `10`, chapter: `83` }
        },

        {   chapter: `83`,
            title: `How Does the HOA Know About Your Equity?`,
            videoSrc: `https://www.youtube.com/embed/v6KuBn0E08k`,
            timeStamp: `August 22, 2013`,
            description: `Anyone can go on-line and view the public records on the assessors page.`,
            prev: { page: `8`, chapter: `82` },
            next: { page: `10`, chapter: `84` }
        },

        {   chapter: `84`,
            title: `Relating One of Many HOA Problems`,
            videoSrc: `https://www.youtube.com/embed/HLfm3eQ6hCw`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon talks about "insane behavior" within a HOA community.`,
            prev: { page: `8`, chapter: `83` },
            next: { page: `10`, chapter: `85` }
        },

        {   chapter: `85`,
            title: `Espionage`,
            videoSrc: `https://www.youtube.com/embed/TjQgaFSvThA`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon takes liberty and explains espionage within a HOA community.`,
            prev: { page: `8`, chapter: `84` },
            next: { page: `10`, chapter: `86` }
        },

        {   chapter: `86`,
            title: `Closing Lecture`,
            videoSrc: `https://www.youtube.com/embed/GLWebYvXPHM`,
            timeStamp: `August 22, 2013`,
            description: `The viewer may not have agreed with everything Dr. Solomon has lectured on,
                but he is hoping that the lectures have opened some eyes.`,
            prev: { page: `8`, chapter: `85` },
            next: { page: `10`, chapter: `87` }
        },

        {   chapter: `87`,
            title: `Stress, Children & Families`,
            videoSrc: `https://www.youtube.com/embed/zWFEQPPTX2M?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon answers questions proposed by the viewers. He was again asked about
                the children and families of those people living in a HOA. Dr. Solomon states that some
                research indicates that children growing up in stressful environments and around stressful
                families may retaliate against the "thing" causing the stress, ie. HOA harassment. Dr.
                Solomon argues that the government is making a mistake by not addressing the levels of
                stress induced by harassing home owners, thus harassing their children and families.`,
            prev: { page: `8`, chapter: `86` },
            next: { page: `10`, chapter: `88` }
        },

        {   chapter: `88`,
            title: `The HOA Financial Chain`,
            videoSrc: `https://www.youtube.com/embed/QvlwqxlM5f0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `HOAs are non-profit corporations and they hire for-profit businesses, property
                management, collection and attorneys, to help them in the collection of their fines.
                Many of the HOA property management companies and HOA attorneys dictate what the HOA can
                and can't do. They do this to earn more money in fines, court case costs and legal
                advice. The fines generated by the HOA are a very valuable commodity to them.`,
            prev: { page: `8`, chapter: `87` },
            next: { page: `10`, chapter: `89` }
        },

        {   chapter: `89`,
            title: `Zeigeist`,
            videoSrc: `https://www.youtube.com/embed/xVfIKu9Dd3U?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon defines zeigeist as the intellectual, moral and cultural values
                given to a situation in a given era. This era of the HOA does not value intelligence,
                morals or cultural values.`,
            prev: { page: `8`, chapter: `88` },
            next: { page: `10`, chapter: `90` }
        },

        {   chapter: `90`,
            title: `What Could the Future Hold?`,
            videoSrc: `https://www.youtube.com/embed/-3I_faB5Wa4?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon reminds the viewers that HOAs are non-profit corporations and as
                such they have only a few options for collecting money from their home owners. It is
                possible that HOAs may: charge for ingress and egress into the community like a toll
                road or charge for mail delivery or utilities. If this happens, then it will be even
                more expensive to live in a HOA community.`,
            prev: { page: `8`, chapter: `89` },
            next: { page: `10`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);