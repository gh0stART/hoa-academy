const template = Handlebars.templates['news'];

const context = {
    news: [
        {   title: `Calico Ridge Sidewalk problems for the Handicap`,
            timestamp: `July 29, 2013`,
            description: `This video shows what it is like trying to enter Calico Ridge
                while being handicap. It is a very dangerous experience.`,
            video: `https://www.youtube.com/embed/fnkxn4_UoW8`,
        },
        
        {   title: `Homeowners Association Tries to Ban Independent Website`,
            timestamp: `June 4, 2013`,
            description: `TheWoodlandsTamarac.com had been operating for 3 years providing news for
                the community in Tamarac Florida. It had several disclaimers on it that it was not
                affiliated with the HOA At the May 2013 HOA Meeting after the HOA President hired
                an attorney to serve a resident with a cease and desist notice to shut down her
                website, the President would not allow the homeowner's husband, an attorney, to
                speak on her behalf at the meeting, Nor would she allow any other residents to speak.`,
            video: `https://www.youtube.com/embed/lbM7VuHdpYE`,
        },

        {   title: `Man accused in HOA shooting indicted on 2 counts of murder`,
            timestamp: `September 28, 2012`,
            description: `The man accused of killing two men at a Louisville homeowners
                association meeting has been indicted on two counts of murder and seven
                counts of wanton endangerment.`,
            video: `https://www.youtube.com/embed/syQ71TlcATE`,
        },

        {   title: `Little Pink Playhouse causes a stir`,
            timestamp: `September 21, 2012`,
            description: `CNN's Anderson Cooper adds an outcry over a playhouse to the RidicuList
                after a pink building causes local controversy.`,
            video: `https://www.youtube.com/embed/iYLtjaCDDb0`,
        },

        {   title: `Homeowners association rents home it doesn't own`,
            timestamp: `May 2, 2012`,
            description: `A Pasco County homeowners association is once again in the spotlight,
                this time taking possession of homes and renting them out.`,
            video: `https://www.youtube.com/embed/FZm-W2ba-90`,
        },
    ]
};

document.getElementById('newslist').innerHTML = template(context);