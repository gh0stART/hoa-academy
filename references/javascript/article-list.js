const template = Handlebars.templates['articles'];

const context = {
    articles: [
        {   title: `Nevada's Great Disgrace`,
            description: `I am a tenured psychology professor at the College of
                Southern Nevada. For the last four years I have studied, investigated
                and researched the effects of homeowners associations (HOAs) on
                residence living in HOA communities. At the end of the second year
                of my research I identified HOA Syndrome, a constellation of signs
                and symptoms similar to Post Traumatic Stress Disorder rooted in
                longer term harassment from HOAs verses individual or serial trauma...`,
            url: `./article/Nevada's Great Disgrace-8-2-13.pdf`,
            img: `./references/images/disgrace.jpg`
        },

        {   title: `HOA Syndrome`,
            description: `Gone are the days when pets, walking their obedient owners,
                strolled through neighborhoods and waved to fellow neighbors, taking
                a few moments to stop and chat and get caught up on the latest family
                news. Void are the invitations from a neighbor to gather and celebrate
                their child’s high school graduation, retirement party, acquisition of
                a shiny, stealth new car, or a forthcoming marriage. Why?...`,
            url: `./article/HOASyndrome9_12_10V4.pdf`,
            img: `./references/images/hoa-syndrome.jpg`
        },

        {   title: `Elder Abuse and HOAs`,
            description: `I have been a college professor, psychotherapist, published
                author, and expert witness well beyond a decade. In that time I have
                had numerous occasions to work with the elderly. I have witnessed elder
                abuse firsthand. Never have I experienced the current level of elder
                abuse caused as a direct result of Homeowners Associations (HOAs)...`,
            url: `./article/elderabuse.pdf`,
            img: `./references/images/elders.jpg`
        },

        {   title: `History of HOAs`,
            description: `Once Upon A Time ...there was a place called the United States
                of America. It became the United States of America after an up rising
                against those who wanted to control and charge people for living in a
                place that they already owned. The uprising was deadly and bloody; many
                were hurt; many died...`,
            url: `./article/Onceuponatime.HOATales4_final.1.pdf`,
            img: `./references/images/history.jpg`
        },

        {   title: `Stress Realted Illness in HOAs`,
            description: `HOA Syndrome falls into the psychiatric category of Anxiety
            Disorders characterized by a cluster of signs and symptoms–psychophysiological
            indicators–similar to Post Traumatic Stress Disorder. But the biopsychosocialsexual
            signs and symptoms came about not from a single trauma...`,
            url: `./article/StressrelatedHOAillness.2Final.pdf`,
            img: `./references/images/stress.jpg`
        },
    ]
};

document.getElementById('article-list').innerHTML = template(context);