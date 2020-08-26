const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `51`,
            title: `Stalking`,
            videoSrc: `https://www.youtube.com/embed/0HtWO5cnvXc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 3 major ways HOAs stalk the community members: 1) Someone(s) go around the
                community looking for violations, 2) the management company has someone go around the
                neighborhood looking for violations, and 3) Neighbors are pitted against one another-it must
                have been my neighbor who turned me in, I'm going to find something to turn in about them.`,
                prev: { page: `5`, },
                next: { page: `7`, chapter: `52` }
        },

        {   chapter: `52`,
            title: `Like a Drug`,
            videoSrc: `https://www.youtube.com/embed/0HtWO5cnvXc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 3 major ways HOAs stalk the community members: 1) Someone(s) go around the
                community looking for violations, 2) the management company has someone go around the
                neighborhood looking for violations, and 3) Neighbors are pitted against one another-it must
                have been my neighbor who turned me in, I'm going to find something to turn in about them.`,
            prev: { page: `5`, chapter: `51` },
            next: { page: `7`, chapter: `53` }
        },

        {   chapter: `53`,
            title: `What Can People do to Protect Themselves?`,
            videoSrc: `https://www.youtube.com/embed/6-iurojbUwE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon gives the viewer 6 ways that they can protect themselves against HOAs.`,
            prev: { page: `5`, chapter: `52` },
            next: { page: `7`, chapter: `54` }
        },

        {   chapter: `54`,
            title: `The HOA Can Sue You, but not the Other Way Around`,
            videoSrc: `https://www.youtube.com/embed/Cb8hBSnCOLE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In most states the homeowner cannot take the HOA to court, but the HOA can sue
                the homeowner. In Nevada the state laws say that Board Members are immune from prosecution.`,
            prev: { page: `5`, chapter: `53` },
            next: { page: `7`, chapter: `55` }
        },

        {   chapter: `55`,
            title: `Small Claims`,
            videoSrc: `https://www.youtube.com/embed/dbvX-RFQpLU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon outlines the process a homeowner must go through to file a small claims case against their HOA.`,
            prev: { page: `5`, chapter: `54` },
            next: { page: `7`, chapter: `56` }
        },

        {   chapter: `56`,
            title: `Psychology for Those Living in a HOA`,
            videoSrc: `https://www.youtube.com/embed/uQE8c7JrbnY?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `It is not in the best interest of the HOA to take care of the psychological
                needs of the community. Dr. Solomon believes that those living in a HOA need
                psychological treatment such as those with PTSD.`,
            prev: { page: `5`, chapter: `55` },
            next: { page: `7`, chapter: `57` }
        },

        {   chapter: `57`,
            title: `Scientific Proof`,
            videoSrc: `https://www.youtube.com/embed/kVo2nDG1Tyk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If the HOAs, management and collection companies and HOA attorneys were shown
                the scientific proof that living in a HOA community causes health problems, they
                wouldn't like it, they wouldn't do anything about it.`,
            prev: { page: `5`, chapter: `56` },
            next: { page: `7`, chapter: `58` }
        },

        {   chapter: `58`,
            title: `Attorneys Jumping on Cases`,
            videoSrc: `https://www.youtube.com/embed/6b4NQI8ITdo?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon encourages attorneys to take on HOA cases as a tort, as there are
                damages to the homeowner: Physical, psychological, equity theft, racketeering, and breach of contract.`,
            prev: { page: `5`, chapter: `57` },
            next: { page: `7`, chapter: `59` }
        },

        {   chapter: `59`,
            title: `The Myth`,
            videoSrc: `https://www.youtube.com/embed/4CNZ451WdMs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The myth is that homes in a HOA are more valuable. Appraiser and assessors don't
                use the fact that the home is in a HOA in their final appraisal or assessment.`,
            prev: { page: `5`, chapter: `58` },
            next: { page: `7`, chapter: `60` }
        },

        {   chapter: `60`,
            title: `Gated Communities`,
            videoSrc: `https://www.youtube.com/embed/7ey0ViHf29E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In this chapter, Dr. Gary Solomon talks about gated communities.`,
            prev: { page: `5`, chapter: `59` },
            next: { page: `7`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);