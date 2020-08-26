const template = Handlebars.templates['news'];

const context = {
    news: [
        {   title: `American Veteran Fighting H.O.A Legal Action for Flying American Flag`,
            timestamp: `June 26, 2011`,
            description: `A retired U.S. Army chaplain is being threatened with legal action
                for flying the American flag in his front yard, the Daily Mail reports. Fred
                Quigley, 77, of Macedonia, Ohio, a minister who served active duty during the
                Vietnam War, has been told by the homeowners' association that his flag
                violates the property rules.`,
            video: `https://www.youtube.com/embed/b5R1bqY6fac`,
        },

        {   title: `Steven Seagal in fight with HOA`,
            timestamp: `June 11, 2011`,
            description: `Large boulders have started appearing in front of the action star's
                north Scottsdale home`,
            video: `https://www.youtube.com/embed/4zV1H-p4TLE`,
        },
        
        {   title: `Car Blocked in Driveway by HOA`,
            timestamp: `June 9, 2011`,
            description: `Man's wife has her car blocked in the garage by construction
                grade pillars. Car was stuck there for two weeks until he finally called
                Channel 5 and had Bill Liss come out and do a story.`,
            video: `https://www.youtube.com/embed/Wo2Kp8oORLw`,
        },

        {   title: `Sun City Anthem: HOA Hall of Shame`,
            timestamp: `Feb 15, 2011`,
            description: `Sun City Anthem HOA in Henderson, Nevada was featured on the
                local Channel 13 HOA Hall of Shame. View the two video segments and tell
                your friends. Channel 13 is at: http://www.ktnv.com/ This video is a
                service of my website at http://www.scadrama.wordpress.com - Thank you
                - Dr. Drama!`,
            video: `https://www.youtube.com/embed/8kbb6dN7eas`,
        },

        {   title: `HOA Hall of Shame`,
            timestamp: `December 3, 2010`,
            description: `The second video in a series starring Joseph Bitsky, President of the
                Autumn Chase Homeowners Association (ACHOA). This clip was aired on KTNV Channel
                13 Las Vegas on 11/22/10.`,
            video: `https://www.youtube.com/embed/LC83NWTm5-Y`,
        },
    ]
};

document.getElementById('newslist').innerHTML = template(context);