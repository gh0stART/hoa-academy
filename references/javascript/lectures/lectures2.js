const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {  chapter: `11`,
            title: `Capos`,
            videoSrc: `https://www.youtube.com/embed/fYYlgo_Yu6g?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `During WWII some of the prisoners in the concentration camps were put in
                charge of a group of fellow prisoners. These people were called Capos. In
                time the Capos became meaner to their fellow prisoners than the Nazi
                guards. Dr. Solomon defines some HOA Board Members as Capos, getting
                pleasure from harassing and inflicting pain on their neighbors.`,
            prev: { page: `1`, },
            next: { page: `3`, chapter: `12` }
        },

        {   chapter: `12`,
            title: `Barbed Wire Syndrome`,
            videoSrc: `https://www.youtube.com/embed/6rFTV73yqxM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `During WWII many soldiers who were prisoners of war were diagnosed
                with Barbed Wire Syndrome. Many homeowners feel like they are
                imprisoned in their HOA community, not able to get out. The gate once
                used to keep people from coming into their community keep the
                homeowners from leaving the community.`,
            prev: { page: `1`, chapter: `11` },
            next: { page: `3`, chapter: `13` }
        },

        {   chapter: `13`,
            title: `Apartheid`,
            videoSrc: `https://www.youtube.com/embed/2wPRh1ldP-o?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In a HOA the Board of Directors, the dominate minority, oversees the
                majority of homeowners; a small group of people with lots of power, ruling
                a large group of people.`,
            prev: { page: `1`, chapter: `12` },
            next: { page: `3`, chapter: `14` }
        },

        {   chapter: `14`,
            title: `The Ghetto`,
            videoSrc: `https://www.youtube.com/embed/LWrPSaJit3A?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Ghetto is a negative term used to describe the poor and downtrodden
                minority neighborhoods. HOAs have become Ghettos, with the
                homeowners, the majority minority, being held hostage in their community.`,
            prev: { page: `1`, chapter: `13` },
            next: { page: `3`, chapter: `15` }
        },
        
        {   chapter: `15`,
            title: `Stress`,
            videoSrc: `https://www.youtube.com/embed/SXeaXfPt5S8?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Extensive research regarding stress has been done by Robert Sapolsky at
                Stanford University. Stress causes major health problems. Most illnesses
                are stress related. People living in HOA communities are a culture under
                stress. Dr. Solomon postulates that people who live in a HOA may have
                more health problems than those people who don't.`,
            prev: { page: `1`, chapter: `14` },
            next: { page: `3`, chapter: `16` }
        },

        {   chapter: `16`,
            title: `Epigenetics`,
            videoSrc: `https://www.youtube.com/embed/pnwjhBApYSQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Epigenetics is a process that alters a person's genes by way of stress,
                environment and chemicals.`,
            prev: { page: `1`, chapter: `15` },
            next: { page: `3`, chapter: `17` }
        },

        {   chapter: `17`,
            title: `Telomeres`,
            videoSrc: `https://www.youtube.com/embed/qIdFOnwr6c8?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Telomeres are found at the ends of chromosomes which help protect the
                chromosomes. When a person is under constant stress the telomeres are
                unable to repair themselves and protect the chromosomes, leading to
                health problems.`,
            prev: { page: `1`, chapter: `16` },
            next: { page: `3`, chapter: `18` }
        },

        {   chapter: `18`,
            title: `HOA Syndrome`,
            videoSrc: `https://www.youtube.com/embed/qlWVEBbBoKk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `HOA Syndrome is an anxiety disorder identified by Dr. Gary Solomon. Its
                origin in longitudinal harassment, not unlike PTSD. These symptoms can
                lead to severe and permanent illnesses. To learn more about HOA
                Syndrome read Dr. Solomon's article on www.hoaacademy.com.`,
            prev: { page: `1`, chapter: `17` },
            next: { page: `3`, chapter: `19` }
        },

        {   chapter: `19`,
            title: `What Are You Going to do About This?`,
            videoSrc: `https://www.youtube.com/embed/kELDI6aYINs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If you are experiencing any of the HOA Syndrome symptoms then Dr.
                Solomon recommends that you see your primary care doctor, let them
                know about your symptoms, and the relationship to your HOA. Get the
                help you need. These records and documents can be used if legal action is
                necessary.`,
            prev: { page: `1`, chapter: `18` },
            next: { page: `3`, chapter: `20` }
        },

        {   chapter: `20`,
            title: `Who Gets HOA Syndrome?`,
            videoSrc: `https://www.youtube.com/embed/PUOXEZvmxoc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 4 groups of people who may be harassed more than others.
                They are: single women with children, the elderly, the infirmed or
                handicapped, and people who own their property out-right or have lots of
                equity.`,
            prev: { page: `1`, chapter: `19` },
            next: { page: `3`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);