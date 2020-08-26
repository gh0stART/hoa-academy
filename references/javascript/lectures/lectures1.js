const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {   chapter: `1`,
            title: `Introduction`,
            videoSrc: `https://www.youtube.com/embed/2IMzDwgcBCM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Gary Solomon, Professor of Psychology at the College of Southern
                Nevada introduces himself , his research and HOA Academy, an
                educational website. Dr. Solomon discloses that he is not an attorney, nor
                does he give legal advice. Some of the statements made by Dr. Solomon
                are his own humble, personal feelings and thoughts.`,
            prev: {},
            next: { page: `2`, chapter: `2` }
        },

        {   chapter: `2`,
            title: `The History of HOAs`,
            videoSrc: `https://www.youtube.com/embed/D5eVyoVXiks?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon gives a brief history of HOAs. What is a HOA? What is the
                function of the Board of Directors, the for profit management and collection
                companies, and the HOA attorneys. For more information about the History
                of HOAs go to www.hoaacademy.com and click on articles.`,
            prev: { chapter: `1` },
            next: { page: `2`, chapter: `3` }
        },

        {   chapter: `3`,
            title: `Why Am I Doing This?`,
            videoSrc: `https://www.youtube.com/embed/W9E9Z6qH2OA?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon has received calls from frustrated and harassed homeowners
                from all over the U.S. and Europe. After hearing so many HOA horror
                stories, Dr. Solomon could not just sit back and listen to the stories, he had
                to do something. Dr. Solomon reports that there is solid scientific evidence
                to explain the HOAs and homeowner's behaviors related to the
                harassment.`,
            prev: { chapter: `2` },
            next: { page: `2`, chapter: `4` }
        },

        {   chapter: `4`,
            title: `Why Is This Happening?`,
            videoSrc: `https://www.youtube.com/embed/kgtneGMOG4o?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The Covenants, Conditions & Restrictions (CC&Rs) is the rule book for
                running the HOA community. Upon signing the CC&Rs the homeowner
                literally give up their constitutional rights to such things as: freedom of
                speech, right to go to court, legal protection, and quiet enjoyment. Dr.
                Solomon reports that government has no financial incentive to disband
                HOAs. Homeowners living in a HOA pay taxes for services they may not
                receive because the homeowner has paid HOA assessments for the same
                services. This is double taxation.`,
            prev: { chapter: `3` },
            next: { page: `2`, chapter: `5` }
        },

        {   chapter: `5`,
            title: `What is the #1 Solution?`,
            videoSrc: `https://www.youtube.com/embed/oBuJLc6kBMk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Don't buy a home in a HOA community! If you think it will not happen to me
                you are sorely mistaken.`,
            prev: { chapter: `4` },
            next: { page: `2`, chapter: `6` }
        },

        {   chapter: `6`,
            title: `A Statement to Attourneys`,
            videoSrc: `https://www.youtube.com/embed/9R6AjpqB0vw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There is a legal in-road in taking action against HOAs. Many homeowners
                are harassed which leads to stress induced medical and psychological
                problems. This is no different than a person injury case. Therefore, it
                appears legal action could be taken against the HOA as a Tort. The HOA
                patient needs medical attention just as the personal injury patient does.`,
            prev: { chapter: `5` },
            next: { page: `2`, chapter: `7` }
        },

        {   chapter: `7`,
            title: `Introducing Terms and Concepts`,
            videoSrc: `https://www.youtube.com/embed/vmPekzSnZMs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In the following videos Dr. Solomon will introduce the viewer to terms and
                concepts related to HOAs.`,
            prev: { chapter: `6` },
            next: { page: `2`, chapter: `8` }
        },

        {   chapter: `8`,
            title: `Homeowners' Associations`,
            videoSrc: `https://www.youtube.com/embed/1QNeH86Vfc8?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `An organization that has come together under what is known as the CC&Rs.`,
            prev: { chapter: `7` },
            next: { page: `2`, chapter: `9` }
        },

        {   chapter: `9`,
            title: `Community`,
            videoSrc: `https://www.youtube.com/embed/ZUxy4oZ-04E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A homeowners association may live in a larger community.`,
            prev: { chapter: `8` },
            next: { page: `2`, chapter: `10` }
        },

        {   chapter: `10`,
            title: `The Master Association`,
            videoSrc: `https://www.youtube.com/embed/yq-nDY7g8gw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Larger communities may have more than one HOA. The Master
                Association that oversees the smaller HOAs.`,
            prev: { chapter: `9` },
            next: { page: `2`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);