const template = Handlebars.templates['news'];

const context = {
    news: [
        {   title: `Fight against HOA corruption`,
            timestamp: `June 8, 2010`,
            description: `Fight against HOA Board members conflict of interest and corruption
                - aired by WPBF Channel News 25, May 22, 2008 (West Palm Beach, FL)`,
            video: `https://www.youtube.com/embed/ZbPGsTenMBM`,
        },

        {   title: `Homeowners Association Needs Regulation`,
            timestamp: `March 26, 2010`,
            description: `Homeowners Association (HOA) regulation is needed to prevent abusive of
                power. Anyone who owns or lives in a HOA property should carefully watch and review
                this video as it may very likely`,
            video: `https://www.youtube.com/embed/dK5eiO59oZM`,
        },

        {   title: `Green Valley Ranch Citizens confront corrupt HOA Board`,
            timestamp: `July 26, 2009`,
            description: `Over 300 Green Valley Ranch residents attend an HOA meeting to
                confront a corrupt board over a special assessment fee never approved by
                delegates or homeowners. Media was banned from the event, but a guerilla
                journalist persisted in documenting it.`,
            video: `https://www.youtube.com/embed/VuYHjdT4qy4`,
        },

        {   title: `Desperate HOA Directors - Your Are Out of Order!`,
            timestamp: `June 6, 2009`,
            description: `On June 2, 2009 GRF Meeting - The Shut Up Rule in Effect Everything
                and everybody was out of order in Laguna Woods Village during the June 2, 2009
                Golden Rain Foundation Meeting, supporting our previous conclusion that "after
                precedent setting decision, local governance: Common Interest Development (CID)
                / Homeowners Association (HOA) board of directors still doe not get it`,
            video: `https://www.youtube.com/embed/m8yrKA-7mBI`,
        },
    ]
};

document.getElementById('newslist').innerHTML = template(context);