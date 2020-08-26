const template = Handlebars.templates['lecture-page'];

const context = {
    lectures: [
        {  chapter: `61`,
            title: `How Did it Get This Big?`,
            videoSrc: `https://www.youtube.com/embed/mI1D02sKKnQ`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon diagrams the planning and growth of a community and discusses
                city involvement. Dr. Solomon introduces, but does not endorse, two books written
                about HOA issues. The first book is HOA Murders, a novel about a murder in a
                fictional HOA community, written by Leon Robertson. The other book, Neighbors at
                War, is a compellation of real HOA horror stories, written by Ward Lucas.`,
            prev: { page: `6`, },
            next: { page: `8`, chapter: `62` }
        },

        {   chapter: `62`,
            title: `Slander, Libel and Defamation`,
            videoSrc: `https://www.youtube.com/embed/0w9uG8iXsw4`,
            timeStamp: `March 08, 2013`,
            description: `Sometimes a Board undermines the homeowner who speaks-up for their rights.
                Slanderous, libelous and defaming rumors are.`,
            prev: { page: `6`, chapter: `61` },
            next: { page: `8`, chapter: `63` }
        },

        {   chapter: `63`,
            title: `What's the Driving Force?`,
            videoSrc: `https://www.youtube.com/embed/S_vMoGbtomk`,
            timeStamp: `March 08, 2013`,
            description: `"Follow the money", Dr. Solomon says. The driving force is money in
                the pockets of the management and collection companies and attorneys by way
                of fines, liens and foreclosures.`,
            prev: { page: `6`, chapter: `62` },
            next: { page: `8`, chapter: `64` }
        },

        {   chapter: `64`,
            title: `Who's Running the Community?`,
            videoSrc: `https://www.youtube.com/embed/SpuXJKSNXQY`,
            timeStamp: `March 08, 2013`,
            description: `Who's Running the Community?`,
            prev: { page: `6`, chapter: `63` },
            next: { page: `8`, chapter: `65` }
        },
        
        {   chapter: `65`,
            title: `Towing Your Car`,
            videoSrc: `https://www.youtube.com/embed/BqFGjMyr2k4`,
            timeStamp: `March 08, 2013`,
            description: `In some communities homeowners are not permitted to park on the street.
                Tow companies are hired by the HOA Board and management companies to tow any
                car that is on the street. It's all part of the money-making process.`,
            prev: { page: `6`, chapter: `64` },
            next: { page: `8`, chapter: `66` }
        },

        {   chapter: `66`,
            title: `Religious Agenda`,
            videoSrc: `https://www.youtube.com/embed/7kLPjXJ2sFU`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon suggests, but does not know, that some homeowners are punished
                or banned from moving into a HOA because of their religious, political, racial orientation.`,
            prev: { page: `6`, chapter: `65` },
            next: { page: `8`, chapter: `67` }
        },

        {   chapter: `67`,
            title: `I View HOAs as Villages`,
            videoSrc: `https://www.youtube.com/embed/v9Kv2U6z-jo`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon views HOA communities as small villages and the HOA Board Members
                as the village leaders, and the villagers have to live by their rules.`,
            prev: { page: `6`, chapter: `66` },
            next: { page: `8`, chapter: `68` }
        },

        {   chapter: `68`,
            title: `What Can You do to Protect Yourself?`,
            videoSrc: `https://www.youtube.com/embed/ECN1BSPUy8I`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon, not an attorney, gives suggestions to the homeowner on how to
                protect their home from foreclosure.`,
            prev: { page: `6`, chapter: `67` },
            next: { page: `8`, chapter: `69` }
        },

        {   chapter: `69`,
            title: `The Concept of Smearing`,
            videoSrc: `https://www.youtube.com/embed/HIMt88p6uh4`,
            timeStamp: `March 08, 2013`,
            description: `Smearing is a legal term that incorporates slander, libel and defamation.
                If you, as a homeowner, are smeared, keep documentation described by Dr. Solomon.`,
            prev: { page: `6`, chapter: `68` },
            next: { page: `8`, chapter: `70` }
        },

        {   chapter: `70`,
            title: `Housing Urban and Development (HUD)`,
            videoSrc: `https://www.youtube.com/embed/H6VHmHCQIi0`,
            timeStamp: `March 08, 2013`,
            description: `HUD is a governmental organization that helps the disabled, elderly
                and harassed. Use this organization to investigate your issues with the HOA.`,
            prev: { page: `6`, chapter: `69` },
            next: { page: `8`, }
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);