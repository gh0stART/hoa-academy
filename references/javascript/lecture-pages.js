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
            prev: `1`,
            next: `2`
        },

        {   chapter: `2`,
            title: `The History of HOAs`,
            videoSrc: `https://www.youtube.com/embed/D5eVyoVXiks?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon gives a brief history of HOAs. What is a HOA? What is the
                function of the Board of Directors, the for profit management and collection
                companies, and the HOA attorneys. For more information about the History
                of HOAs go to www.hoaacademy.com and click on articles.`,
            prev: `1`,
            next: `3`
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
            prev: `2`,
            next: `4`
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
            prev: `3`,
            next: `5`
        },

        {   chapter: `5`,
            title: `What is the #1 Solution?`,
            videoSrc: `https://www.youtube.com/embed/oBuJLc6kBMk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Don't buy a home in a HOA community! If you think it will not happen to me
                you are sorely mistaken.`,
            prev: `4`,
            next: `6`
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
            prev: `5`,
            next: `7`
        },

        {   chapter: `7`,
            title: `Introducing Terms and Concepts`,
            videoSrc: `https://www.youtube.com/embed/vmPekzSnZMs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In the following videos Dr. Solomon will introduce the viewer to terms and
                concepts related to HOAs.`,
            prev: `6`,
            next: `8`
        },

        {   chapter: `8`,
            title: `Homeowners' Associations`,
            videoSrc: `https://www.youtube.com/embed/1QNeH86Vfc8?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `An organization that has come together under what is known as the CC&Rs.`,
            prev: `7`,
            next: `9`
        },

        {   chapter: `9`,
            title: `Community`,
            videoSrc: `https://www.youtube.com/embed/ZUxy4oZ-04E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A homeowners association may live in a larger community.`,
            prev: `8`,
            next: `10`
        },

        {   chapter: `10`,
            title: `The Master Association`,
            videoSrc: `https://www.youtube.com/embed/yq-nDY7g8gw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Larger communities may have more than one HOA. The Master
                Association that oversees the smaller HOAs.`,
            prev: `9`,
            next: `11`
        },

        {  chapter: `11`,
            title: `Capos`,
            videoSrc: `https://www.youtube.com/embed/fYYlgo_Yu6g?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `During WWII some of the prisoners in the concentration camps were put in
                charge of a group of fellow prisoners. These people were called Capos. In
                time the Capos became meaner to their fellow prisoners than the Nazi
                guards. Dr. Solomon defines some HOA Board Members as Capos, getting
                pleasure from harassing and inflicting pain on their neighbors.`,
            prev: `10`,
            next: `12`
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
            prev: `11`,
            next: `13`
        },

        {   chapter: `13`,
            title: `Apartheid`,
            videoSrc: `https://www.youtube.com/embed/2wPRh1ldP-o?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In a HOA the Board of Directors, the dominate minority, oversees the
                majority of homeowners; a small group of people with lots of power, ruling
                a large group of people.`,
            prev: `12`,
            next: `14`
        },

        {   chapter: `14`,
            title: `The Ghetto`,
            videoSrc: `https://www.youtube.com/embed/LWrPSaJit3A?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Ghetto is a negative term used to describe the poor and downtrodden
                minority neighborhoods. HOAs have become Ghettos, with the
                homeowners, the majority minority, being held hostage in their community.`,
            prev: `13`,
            next: `15`
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
            prev: `14`,
            next: `16`
        },

        {   chapter: `16`,
            title: `Epigenetics`,
            videoSrc: `https://www.youtube.com/embed/pnwjhBApYSQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Epigenetics is a process that alters a person's genes by way of stress,
                environment and chemicals.`,
            prev: `15`,
            next: `17`
        },

        {   chapter: `17`,
            title: `Telomeres`,
            videoSrc: `https://www.youtube.com/embed/qIdFOnwr6c8?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Telomeres are found at the ends of chromosomes which help protect the
                chromosomes. When a person is under constant stress the telomeres are
                unable to repair themselves and protect the chromosomes, leading to
                health problems.`,
            prev: `16`,
            next: `18`
        },

        {   chapter: `18`,
            title: `HOA Syndrome`,
            videoSrc: `https://www.youtube.com/embed/qlWVEBbBoKk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `HOA Syndrome is an anxiety disorder identified by Dr. Gary Solomon. Its
                origin in longitudinal harassment, not unlike PTSD. These symptoms can
                lead to severe and permanent illnesses. To learn more about HOA
                Syndrome read Dr. Solomon's article on www.hoaacademy.com.`,
            prev: `17`,
            next: `19`
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
            prev: `18`,
            next: `20`
        },

        {   chapter: `20`,
            title: `Who Gets HOA Syndrome?`,
            videoSrc: `https://www.youtube.com/embed/PUOXEZvmxoc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 4 groups of people who may be harassed more than others.
                They are: single women with children, the elderly, the infirmed or
                handicapped, and people who own their property out-right or have lots of
                equity.`,
            prev: `19`,
            next: `21`
        },

        {   chapter: `21`,
            title: `Elder Abuse`,
            videoSrc: `https://www.youtube.com/embed/F1aALn6vkps?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The elderly are an easy target for the HOA. Quite often they own their
                home out-right or have high equity. Some are not able to or don't know
                how to deal with the HOA and the harassment. Some are on fixed incomes
                and become afraid that if they are fined they will not have the money to
                pay the fine. There are elder abuse organizations that should be able to
                help or give some direction. If you have elderly parents, get involved in
                their HOA. Protect your parents and your inheritance.`,
            prev: `20`,
            next: `22`
        },

        {   chapter: `22`,
            title: `Speaking to Family Members`,
            videoSrc: `https://www.youtube.com/embed/RdRqyFypmkw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon speaks directly to young and adult children who have parents
                living in a HOA. Even though unpleasant to talk about, he suggests
                protecting future assets against the HOA.`,
            prev: `21`,
            next: `23`
        },

        {   chapter: `23`,
            title: `Solutions if You Own Your Home Out-Right`,
            videoSrc: `https://www.youtube.com/embed/gFGb1b07EuY?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If you are a homeowner who owns your home out-right or if you have a lot
                of equity it is important to protect your property. Two suggestions for
                protecting your property are: put a new mortgage on your property which
                will decrease your equity or put a lien against your home.`,
            prev: `22`,
            next: `24`
        },

        {   chapter: `24`,
            title: `Homesteads`,
            videoSrc: `https://www.youtube.com/embed/_MR6NvEvAVM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A homestead will not protect you and your property from the HOA. HOAs
                are always paid first if there is any legal action or foreclosure. This is called
                a Super Priority Lien.`,
            prev: `23`,
            next: `25`
        },

        {   chapter: `25`,
            title: `Liens`,
            videoSrc: `https://www.youtube.com/embed/I-ycF6_Mdbg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `As soon as a homeowner signs the CC&Rs the HOA has an automatic,
                implied lien on the home.`,
            prev: `24`,
            next: `26`
        },

        {   chapter: `26`,
            title: `Two Tailed Psychiatric Disorder`,
            videoSrc: `https://www.youtube.com/embed/nz5xLWrJiPQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `This is a concept developed by Dr. Solomon. There are two groups who
                experience psychiatric disorders: 1) Those homeowners who are harassed
                by the HOA and who experience HOA Syndrome symptoms and 2) the
                HOA Board Members. Dr. Solomon describes some of these board
                members as being power hungry, delusional, it is their mission or duty to
                make sure that all homeowners follow the CC&Rs, viewing homeowners
                as second class citizens. Dr. Solomon also believes that many board
                members suffer from anti-social personality disorder.`,
            prev: `25`,
            next: `27`
        },

        {   chapter: `27`,
            title: `Another Solution for Homeowners`,
            videoSrc: `https://www.youtube.com/embed/GSN9VE_Ozl0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon enlightens viewers that they do not have permission to attend
                any HOA Board Meetings prior to buying a home in a HOA community.
                Since the potential homeowner can't attend meetings, it would be wise to
                meet those already living in the community to get their thoughts and
                opinions about the HOA and if they have had any problems with the HOA.`,
            prev: `26`,
            next: `28`
        },

        {   chapter: `28`,
            title: `CC&Rs & Governing Documents`,
            videoSrc: `https://www.youtube.com/embed/h27xfcAsEMM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Be aware-what you agree to today, may change tomorrow.`,
            prev: `27`,
            next: `29`
        },

        {   chapter: `29`,
            title: `The Management Companies`,
            videoSrc: `https://www.youtube.com/embed/VNNYsPj3BbE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `HOAs are non-profit organizations. The association is not suppose to
                make money, but they by fining homeowners. If money is needed to beef-
                up the reserve fund then special assessments, and increase in
                monthly/yearly assessments or increase fining homeowners. The HOA
                contracts with a management company. The management company is paid
                by the HOA to send fine and lien letters and assessment bills to
                homeowners and maintain records. If the HOA and management company
                are unable to collect, then files are sent to collection.`,
            prev: `28`,
            next: `30`
        },

        {   chapter: `30`,
            title: `Common Area Interest Communities`,
            videoSrc: `https://www.youtube.com/embed/S_lMAZKO-Rw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `January 25, 2013`,
            description: `Dr. Solomon believes that the best solution for HOA communities is for the banks
                to stop loaning money to builders who build HOA communities. Banks tend to be one of the
                organizations most hardest hit when a home goes into foreclosure. They assume a lot of
                liability. So why do banks loan to HOA communities anyway?`,
            prev: `29`,
            next: `31`
        },

        {   chapter: `31`,
            title: `Super Priority Liens`,
            videoSrc: `https://www.youtube.com/embed/73V46ECoMJs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If a homeowner has fines or liens levied against their home, they are unable
                to sell their home unless these are satisfied. The HOA has what is called a Super Priority
                Lien against any home in the community that is not in good standing. Other people or
                organizations may not get paid, but the HOA will always get paid and first. Most bankers
                and real estate agents do not know what a Super Priority Lien is.`,
            prev: `30`,
            next: `32`
        },

        {   chapter: `32`,
            title: `Stopping loans`,
            videoSrc: `https://www.youtube.com/embed/XXmhi0AyGqg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `BANKS-don't loan to developers who want to build a HOA community!`,
            prev: `31`,
            next: `33`
        },

        {   chapter: `33`,
            title: `HOA Meetings`,
            videoSrc: `https://www.youtube.com/embed/KX_omttZiho?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are two sections to a HOA Board Meeting: An open meeting in which homeowners
                are able to participate and an Executive Board Meeting in which homeowners are not able to
                participate. During the Executive meeting the Board Members discuss homeowners discretions and
                possible fines and liens. This is confidential information for Board Members only.`,
            prev: `32`,
            next: `34`
        },

        {   chapter: `34`,
            title: `Who does the board consist of?`,
            videoSrc: `https://www.youtube.com/embed/AUo6K9Ewwc0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Any homeowner in good standing in the community can run for the board and homeowners
                participate in the election process. The Board Members' role is to enforce the CC&Rs. Some board
                members get great pleasure from their new found authoritative role.`,
            prev: `33`,
            next: `35`
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
            prev: `34`,
            next: `36`
        },

        {   chapter: `36`,
            title: `Assessment`,
            videoSrc: `https://www.youtube.com/embed/JwR6ie1MUwg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Assessments are dues paid to the HOA on a monthly/yearly basis. The assessments
                pay for the management company, common area up-keep, special assessments. If a homeowner lives
                in an association that has a Master Association and a sub-association then they pay two assessments.`,
            prev: `35`,
            next: `37`
        },

        {   chapter: `37`,
            title: `Pay Protest`,
            videoSrc: `https://www.youtube.com/embed/TxnZJ6_buZk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Again, Dr. Solomon stresses that he is not an attorney, but recommends that each
                time a homeowner sends in their assessment payment or pays a fine, that they write in the memo
                section-"Paid Under Protest". If a homeowner must go to court then they have documentation
                letting the courts know they did not want to pay the assessment or felt the fine was unfairly levied.`,
            prev: `36`,
            next: `38`
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
            prev: `37`,
            next: `39`
        },

        {   chapter: `39`,
            title: `Foreclosures`,
            videoSrc: `https://www.youtube.com/embed/Ja5Uok4dKVo?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Foreclosure, and even the threat of foreclosure, is a nightmare for homeowners.
                Read your CC&Rs and state laws regarding foreclosure. In many states a home can only be
                foreclosed upon if the homeowner doesn't pay their assessments. First the homeowner is fined,
                then the property is liened and after being sent to collections, the property can be foreclosed.`,
            prev: `38`,
            next: `40`
        },

        {   chapter: `40`,
            title: `More collection company`,
            videoSrc: `https://www.youtube.com/embed/VESX49ANGes?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `A bad day for a collection company is when they are not sent any fines or liens
                from the HOA and the HOA management company.`,
            prev: `39`,
            next: `41`
        },

        {   chapter: `41`,
            title: `Violence`,
            videoSrc: `https://www.youtube.com/embed/kYHYYtf32gU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There is now a generation of children that have grown up in a HOA or have
                experienced the problems their parents have had with their HOA. This is a generation
                that could take revenge on the HOAs.`,
            prev: `40`,
            next: `42`
        },

        {   chapter: `42`,
            title: `Morals, Ethics & Values`,
            videoSrc: `https://www.youtube.com/embed/OYsZcz-0KjA?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The moral imperative, intellectually, intuitively and socially knowing what is
                right and wrong, comprises the majority of people. There are some people, some board members,
                who know when something is morally wrong, but they do it anyway. If all board members lived up
                to the moral imperative of the majority, then there would be no inequities in neighborhoods.`,
            prev: `41`,
            next: `43`
        },

        {   chapter: `43`,
            title: `Garage Sales & Estate Sales`,
            videoSrc: `https://www.youtube.com/embed/yisTCyOLzZU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Most , if not all HOAs allow garage sales in the community, but they are usually planned
                and only allowed 1-4 times a year. By controlling when garage sales happen the HOA can make sure
                that "undesirables" are kept out of the neighborhood. This is also true of estate sales. Someone
                in the community dies and their heirs are left with the deceases home and personal belongings.
                The best and most expeditious way for the heirs to deal with this massive and painful act is to
                have an estate sale company come into the community to organize and sell the deceases belongings.
                Some HOAs are not sympathetic to what the family is going through. They don't want "undesirables"
                in their community.`,
            prev: `42`,
            next: `44`
        },

        {   chapter: `44`,
            title: `More on CC&Rs`,
            videoSrc: `https://www.youtube.com/embed/nLlnmx8qbPg?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The CC&Rs (Covenants, Conditions & Regulations) are a rule book for which the community
                must follow and the Board Members must enforce. The CC&Rs differ from community to community.
                In order to buy a home in a HOA the buyer must sign that they have read and understood the CC&Rs.
                Some rule books are just a few pages and some are hundreds of pages. Quite often the buyer is not
                given the CC&Rs until they sign all real estate and HOA documents.`,
            prev: `43`,
            next: `45`
        },

        {   chapter: `45`,
            title: `Bullying & Harassment`,
            videoSrc: `https://www.youtube.com/embed/CItbS--7Avw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Just about everyone has seen bullying, been bullied or has been a participant in bullying
                someone. HOA Board Members can legally bully homeowners because they have the CC&Rs and state
                law behind them. The word "reasonable" seems to be used often in HOA documents and is very
                subjective. This kind of bullying is very much like extortion.`,
            prev: `44`,
            next: `46`
        },

        {   chapter: `46`,
            title: `Fears`,
            videoSrc: `https://www.youtube.com/embed/Wr5--4OS3jQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Fear is one of the many symptoms someone with HOA Syndrome may experience. At the root
                is harassment which leads to fear, fear leads to stress, stress leads to physical and mental
                health problems. Scientific research indicates that one way to relieve stress is to put stress
                on someone else.`,
            prev: `45`,
            next: `47`
        },

        {   chapter: `47`,
            title: `Why Doesn't the Government Intercede`,
            videoSrc: `https://www.youtube.com/embed/nYXVnCS_guQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon believes that HOAs started with good intentions. The government thought
                they were doing good. But over time, legislators have been swayed by developers, management
                companies, collection companies, and HOA attorneys to give them more and more power over
                the HOAs.`,
            prev: `46`,
            next: `48`
        },

        {   chapter: `48`,
            title: `Children`,
            videoSrc: `https://www.youtube.com/embed/3GCSlDI6XiU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `It is not unusual that the harassment from the HOA pits husband against wife. They
                argue. The children hear the arguing which in turn at stress to the child's life. Remember,
                stress causes illness. This can be very dangerous for a pregnant woman. The stress she
                experiences can be detrimental to her fetus/baby.`,
            prev: `47`,
            next: `49`
        },

        {   chapter: `49`,
            title: `Punitive Fine Letters`,
            videoSrc: `https://www.youtube.com/embed/SsLNPNV7mKc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Many HOA Board Members will say that a "friendly" letter is sent to the homeowner
                letting them know their light is out, they have a weed in their yard or they forgot to take in
                their trash cans. Most HOA violation letters are very punitive: you are on notice, you will be
                fined with references to the CC&Rs and state laws. These letters are intended to induce fear
                and hurt the homeowner.`,
            prev: `48`,
            next: `50`
        },

        {   chapter: `50`,
            title: `The Ombudsman's Office`,
            videoSrc: `https://www.youtube.com/embed/0BDIGryazog?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Many states have an organization called the Ombudsman's Office. This is a governmental
                organization that was created to help the HOA and the homeowner. Unfortunately, the Office
                has failed. Generally, there is just one or two offices in the state. It is difficult to speak
                with anyone. There is a lot of red tape one has to go through to file a complaint and the
                investigation can take weeks to years to be resolved. Another reason the Office has failed is
                that employees need HOAs and homeowners to be in conflict, their jobs depend on it.`,
            prev: `49`,
            next: `51`
        },

        {   chapter: `51`,
            title: `Stalking`,
            videoSrc: `https://www.youtube.com/embed/0HtWO5cnvXc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 3 major ways HOAs stalk the community members: 1) Someone(s) go around the
                community looking for violations, 2) the management company has someone go around the
                neighborhood looking for violations, and 3) Neighbors are pitted against one another-it must
                have been my neighbor who turned me in, I'm going to find something to turn in about them.`,
            prev: `50`,
            next: `52`
        },

        {   chapter: `52`,
            title: `Like a Drug`,
            videoSrc: `https://www.youtube.com/embed/0HtWO5cnvXc?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `There are 3 major ways HOAs stalk the community members: 1) Someone(s) go around the
                community looking for violations, 2) the management company has someone go around the
                neighborhood looking for violations, and 3) Neighbors are pitted against one another-it must
                have been my neighbor who turned me in, I'm going to find something to turn in about them.`,
            prev: `51`,
            next: `53`
        },

        {   chapter: `53`,
            title: `What Can People do to Protect Themselves?`,
            videoSrc: `https://www.youtube.com/embed/6-iurojbUwE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon gives the viewer 6 ways that they can protect themselves against HOAs.`,
            prev: `52`,
            next: `54`
        },

        {   chapter: `54`,
            title: `The HOA Can Sue You, but not the Other Way Around`,
            videoSrc: `https://www.youtube.com/embed/Cb8hBSnCOLE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In most states the homeowner cannot take the HOA to court, but the HOA can sue
                the homeowner. In Nevada the state laws say that Board Members are immune from prosecution.`,
            prev: `53`,
            next: `55`
        },

        {   chapter: `55`,
            title: `Small Claims`,
            videoSrc: `https://www.youtube.com/embed/dbvX-RFQpLU?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon outlines the process a homeowner must go through to file a small claims case against their HOA.`,
            prev: `54`,
            next: `56`
        },

        {   chapter: `56`,
            title: `Psychology for Those Living in a HOA`,
            videoSrc: `https://www.youtube.com/embed/uQE8c7JrbnY?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `It is not in the best interest of the HOA to take care of the psychological
                needs of the community. Dr. Solomon believes that those living in a HOA need
                psychological treatment such as those with PTSD.`,
            prev: `55`,
            next: `57`
        },

        {   chapter: `57`,
            title: `Scientific Proof`,
            videoSrc: `https://www.youtube.com/embed/kVo2nDG1Tyk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `If the HOAs, management and collection companies and HOA attorneys were shown
                the scientific proof that living in a HOA community causes health problems, they
                wouldn't like it, they wouldn't do anything about it.`,
            prev: `56`,
            next: `58`
        },

        {   chapter: `58`,
            title: `Attorneys Jumping on Cases`,
            videoSrc: `https://www.youtube.com/embed/6b4NQI8ITdo?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon encourages attorneys to take on HOA cases as a tort, as there are
                damages to the homeowner: Physical, psychological, equity theft, racketeering, and breach of contract.`,
            prev: `57`,
            next: `59`
        },

        {   chapter: `59`,
            title: `The Myth`,
            videoSrc: `https://www.youtube.com/embed/4CNZ451WdMs?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `The myth is that homes in a HOA are more valuable. Appraiser and assessors don't
                use the fact that the home is in a HOA in their final appraisal or assessment.`,
            prev: `58`,
            next: `60`
        },

        {   chapter: `60`,
            title: `Gated Communities`,
            videoSrc: `https://www.youtube.com/embed/7ey0ViHf29E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `March 08, 2013`,
            description: `In this chapter, Dr. Gary Solomon talks about gated communities.`,
            prev: `59`,
            next: `61`
        },

        {  chapter: `61`,
            title: `How Did it Get This Big?`,
            videoSrc: `https://www.youtube.com/embed/mI1D02sKKnQ`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon diagrams the planning and growth of a community and discusses
                city involvement. Dr. Solomon introduces, but does not endorse, two books written
                about HOA issues. The first book is HOA Murders, a novel about a murder in a
                fictional HOA community, written by Leon Robertson. The other book, Neighbors at
                War, is a compellation of real HOA horror stories, written by Ward Lucas.`,
            prev: `60`,
            next: `62`
        },

        {   chapter: `62`,
            title: `Slander, Libel and Defamation`,
            videoSrc: `https://www.youtube.com/embed/0w9uG8iXsw4`,
            timeStamp: `March 08, 2013`,
            description: `Sometimes a Board undermines the homeowner who speaks-up for their rights.
                Slanderous, libelous and defaming rumors are.`,
            prev: `61`,
            next: `63`
        },

        {   chapter: `63`,
            title: `What's the Driving Force?`,
            videoSrc: `https://www.youtube.com/embed/S_vMoGbtomk`,
            timeStamp: `March 08, 2013`,
            description: `"Follow the money", Dr. Solomon says. The driving force is money in
                the pockets of the management and collection companies and attorneys by way
                of fines, liens and foreclosures.`,
            prev: `62`,
            next: `64`
        },

        {   chapter: `64`,
            title: `Who's Running the Community?`,
            videoSrc: `https://www.youtube.com/embed/SpuXJKSNXQY`,
            timeStamp: `March 08, 2013`,
            description: `Who's Running the Community?`,
            prev: `63`,
            next: `65`
        },
        
        {   chapter: `65`,
            title: `Towing Your Car`,
            videoSrc: `https://www.youtube.com/embed/BqFGjMyr2k4`,
            timeStamp: `March 08, 2013`,
            description: `In some communities homeowners are not permitted to park on the street.
                Tow companies are hired by the HOA Board and management companies to tow any
                car that is on the street. It's all part of the money-making process.`,
            prev: `64`,
            next: `66`
        },

        {   chapter: `66`,
            title: `Religious Agenda`,
            videoSrc: `https://www.youtube.com/embed/7kLPjXJ2sFU`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon suggests, but does not know, that some homeowners are punished
                or banned from moving into a HOA because of their religious, political, racial orientation.`,
            prev: `65`,
            next: `67`
        },

        {   chapter: `67`,
            title: `I View HOAs as Villages`,
            videoSrc: `https://www.youtube.com/embed/v9Kv2U6z-jo`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon views HOA communities as small villages and the HOA Board Members
                as the village leaders, and the villagers have to live by their rules.`,
            prev: `66`,
            next: `68`
        },

        {   chapter: `68`,
            title: `What Can You do to Protect Yourself?`,
            videoSrc: `https://www.youtube.com/embed/ECN1BSPUy8I`,
            timeStamp: `March 08, 2013`,
            description: `Dr. Solomon, not an attorney, gives suggestions to the homeowner on how to
                protect their home from foreclosure.`,
            prev: `67`,
            next: `69`
        },

        {   chapter: `69`,
            title: `The Concept of Smearing`,
            videoSrc: `https://www.youtube.com/embed/HIMt88p6uh4`,
            timeStamp: `March 08, 2013`,
            description: `Smearing is a legal term that incorporates slander, libel and defamation.
                If you, as a homeowner, are smeared, keep documentation described by Dr. Solomon.`,
            prev: `68`,
            next: `70`
        },

        {   chapter: `70`,
            title: `Housing Urban and Development (HUD)`,
            videoSrc: `https://www.youtube.com/embed/H6VHmHCQIi0`,
            timeStamp: `March 08, 2013`,
            description: `HUD is a governmental organization that helps the disabled, elderly
                and harassed. Use this organization to investigate your issues with the HOA.`,
            prev: `69`,
            next: `71`
        },

        {   chapter: `71`,
            title: `Is This a Shakedown?`,
            videoSrc: `https://www.youtube.com/embed/WzSgWKzaYEQ`,
            timeStamp: `April 4, 2013`,
            description: `HOAs, the management company, collection company and the HOA attorney
                are supported by the government. These organizations save money for the government
                and they take money from the pockets of the homeowner.`,
            prev: `70`,
            next: `72`
        },

        {   chapter: `72`,
            title: `An Elder Abuse Update`,
            videoSrc: `https://www.youtube.com/embed/68BjCx9QADk`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon believes that the elderly are easy targets for the HOA,
                management and collection companies and attorneys. Dr. Solomon asks the families
                of their harassed elderly parents to become involved.`,
            prev: `71`,
            next: `73`
        },

        {   chapter: `73`,
            title: `HOAs are Non-profits?`,
            videoSrc: `https://www.youtube.com/embed/Y86Hh7DOHI0`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon proposes that the IRS changes the HOA status to a for-profit organization.`,
            prev: `72`,
            next: `74`
        },

        {   chapter: `74`,
            title: `Health, Welfare and Safety`,
            videoSrc: `https://www.youtube.com/embed/n79mB29aQIg`,
            timeStamp: `April 4, 2013`,
            description: `The HOA is responsible for the homeowner's health, welfare and safety, but this
                is not always the case. Harassment by HOAs is ignored by the very institutions that are
                suppose to protect homeowners.`,
            prev: `73`,
            next: `75`
        },

        {   chapter: `75`,
            title: `Are Things Getting Better?`,
            videoSrc: `https://www.youtube.com/embed/Bgc22zlp3Cw`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon says, "NO!" And again he says, "Don't buy a home in a HOA!"`,
            prev: `74`,
            next: `76`
        },

        {   chapter: `76`,
            title: `Entire Families Under Stress`,
            videoSrc: `https://www.youtube.com/embed/DmYfPWGVnp0`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon states that the stress created by HOA harassment affects the entire family.`,
            prev: `75`,
            next: `77`
        },

        {   chapter: `77`,
            title: `Why Hasn't the Government Done Something?`,
            videoSrc: `https://www.youtube.com/embed/wAhstAZYnsk`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon suggests that the problems haven't gotten "loud enough". There have not been enough deaths and violence.`,
            prev: `76`,
            next: `78`
        },

        {   chapter: `78`,
            title: `Any Other Soloutions?`,
            videoSrc: `https://www.youtube.com/embed/9HqEM8m_tOY`,
            timeStamp: `April 4, 2013`,
            description: `Dr. Solomon suggests that for 3 years there be a stop on fines, liens and foreclosures.`,
            prev: `77`,
            next: `79`
        },

        {   chapter: `79`,
            title: `Another Solution`,
            videoSrc: `https://www.youtube.com/embed/P2t7BMl0_0w`,
            timeStamp: `April 4, 2013`,
            description: `What if HOAs paid for the homeowner's legal fees?`,
            prev: `78`,
            next: `80`
        },

        {   chapter: `80`,
            title: `Divorce`,
            videoSrc: `https://www.youtube.com/embed/IlsBp9VDKpU`,
            timeStamp: `April 4, 2013`,
            description: `HOAs can cause a stress between couples.`,
            prev: `79`,
            next: `81`
        },

        {   chapter: `81`,
            title: `More About Dr. Solomon`,
            videoSrc: `https://www.youtube.com/embed/AyQ-ozQwVls`,
            timeStamp: `August 22, 2013`,
            description: `Go on-line and search: gary solomon hoa, www.hoasyndrome.com and www.hoaacademy.com.`,
            prev: `80`,
            next: `82`
        },

        {   chapter: `82`,
            title: `Pet Problems`,
            videoSrc: `https://www.youtube.com/embed/ITqW8mjJhfY`,
            timeStamp: `August 22, 2013`,
            description: `HOAs decide how many dogs, what size and what breed a homeowner can have.`,
            prev: `81`,
            next: `83`
        },

        {   chapter: `83`,
            title: `How Does the HOA Know About Your Equity?`,
            videoSrc: `https://www.youtube.com/embed/v6KuBn0E08k`,
            timeStamp: `August 22, 2013`,
            description: `Anyone can go on-line and view the public records on the assessors page.`,
            prev: `82`,
            next: `84`
        },

        {   chapter: `84`,
            title: `Relating One of Many HOA Problems`,
            videoSrc: `https://www.youtube.com/embed/HLfm3eQ6hCw`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon talks about "insane behavior" within a HOA community.`,
            prev: `83`,
            next: `85`
        },

        {   chapter: `85`,
            title: `Espionage`,
            videoSrc: `https://www.youtube.com/embed/TjQgaFSvThA`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon takes liberty and explains espionage within a HOA community.`,
            prev: `84`,
            next: `86`
        },

        {   chapter: `86`,
            title: `Closing Lecture`,
            videoSrc: `https://www.youtube.com/embed/GLWebYvXPHM`,
            timeStamp: `August 22, 2013`,
            description: `The viewer may not have agreed with everything Dr. Solomon has lectured on,
                but he is hoping that the lectures have opened some eyes.`,
            prev: `85`,
            next: `87`
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
            prev: `86`,
            next: `88`
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
            prev: `87`,
            next: `89`
        },

        {   chapter: `89`,
            title: `Zeigeist`,
            videoSrc: `https://www.youtube.com/embed/xVfIKu9Dd3U?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon defines zeigeist as the intellectual, moral and cultural values
                given to a situation in a given era. This era of the HOA does not value intelligence,
                morals or cultural values.`,
            prev: `88`,
            next: `90`
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
            prev: `89`,
            next: `91`
        },

        {   chapter: `91`,
            title: `HOA Murders`,
            videoSrc: `https://www.youtube.com/embed/aeJ1f58nLCE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `There have been 3 murders related to HOA Boards-all disgruntled homeowners
                who felt that killing Board members was their only alternative to stop the harassment.
                Dr. Solomon has contacted Las Vegas local TV stations to let them know about these
                murders. They are not interested in reporting on them because it is not local news.
                The will only report "local HOA murders".`,
            prev: `90`,
            next: `92`
        },

        {   chapter: `92`,
            title: `One Solution`,
            videoSrc: `https://www.youtube.com/embed/eYYKi7eS0pM?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `If home owners were given legal access to the courts, then many HOAs would not
                be able to harass as they do. Presently, HOAs can take a home owner to court, but a home
                owner cannot take a HOA to court. Why not even the playing field? You as a home owner pay
                your dues so that your HOA can take you to court. Why not be able to use the HOAs money
                to take the HOA to court? Management and collection companies and HOA attorneys won't let
                this happen as it would cut into their profits.`,
            prev: `91`,
            next: `93`
        },

        {   chapter: `93`,
            title: `Are You Being Spied Upon?`,
            videoSrc: `https://www.youtube.com/embed/iN7IMFcQ4k4?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Many people in HOAs and on the Board have nothing better to do than to drive
                around the community looking for violations. Many get great pleasure from doing
                this-feeling superior to their fellow neighbor. Dr. Solomon speculates that drones
                will be used in the future to spy on neighbors-inside and outside of their homes.`,
            prev: `92`,
            next: `94`
        },

        {   chapter: `94`,
            title: `Disclosures When Buying a Home in a HOA`,
            videoSrc: `https://www.youtube.com/embed/TAZBS5-t29E?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `There is nothing in the real estate closing documents that let a home owner
                know what they are in store for when moving into a HOA. Dr. Solomon suggests that a
                form be made available letting the potential home owner know that by moving into a HOA
                they are giving up their constitutional and civil rights and they will be fined and
                could have their home foreclosed on by the HOA. You can't join the club until you know
                the rules (CC&Rs), and you can't know the rules until you join the club (buy a house
                in an HOA).`,
            prev: `93`,
            next: `95`
        },

        {   chapter: `95`,
            title: `Equality`,
            videoSrc: `https://www.youtube.com/embed/RUYTntRGSqI?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Studies indicate that social and financial equality between people decreases
                violence. The inequality between HOAs and home owners can lead to an increase in violence.`,
            prev: `94`,
            next: `96`
        },

        {   chapter: `96`,
            title: `Retirement`,
            videoSrc: `https://www.youtube.com/embed/_UyYZimOWrQ?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Many people are using the equity in their home for their retirement. Many live
                on fixed incomes and many live in a HOA community. Many of these people are harassed by
                their HOA. They can do one of two things: pay the fines levied against them or go to
                ADR/Mediation which can cost a lot of money. A home owner may ignore the fines, but this
                could lead to a lien on their home with collections costs added on top. Again Dr. Solomon
                says: Don't buy a home in a HOA!`,
            prev: `95`,
            next: `97`
        },

        {   chapter: `97`,
            title: `Health, Safety & Welfare`,
            videoSrc: `https://www.youtube.com/embed/7zYqFeB0UEk?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `The government makes companies recall an item that is defective. These items
                may or may not have caused injury or death. But, the government has not "recalled" HOAs
                who have harassed home owners leading to serious illness and death. The government has
                become habituated to the money that HOAs save them. Home owners in a HOA are subject to
                double taxation.`,
            prev: `96`,
            next: `98`
        },

        {   chapter: `98`,
            title: `Solutions in Nevada`,
            videoSrc: `https://www.youtube.com/embed/4LAWGyji0Qw?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `The Nevada State Legislators can set a standard for the rest of the U.S. by voting
                down any bill that will adversely affect a home owner; financially, socially, physically,
                emotionally, and bills that won't allow foreclosure. Dr. Solomon suggests that the fines levied
                and collected by the HOAs be donated to a local non-profit organizations.`,
            prev: `97`,
            next: `99`
        },

        {   chapter: `99`,
            title: `HOA Banks`,
            videoSrc: `https://www.youtube.com/embed/H3fQYTD_BD0?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon believes that it is very plausible for HOAs to have their own banks-The
                Bank of HOA. Anyone wanting to buy or live in a HOA would have to get their mortgage through
                the bank and do all of their personal banking through the HOA bank. A home owner would be
                giving up all of their personal information to the HOA, thus giving up total control of their
                lives.`,
            prev: `98`,
            next: `100`
        },

        {   chapter: `100`,
            title: `What Can Home Owners Do?`,
            videoSrc: `https://www.youtube.com/embed/CH-EYxWz5GA?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Home owners can get like minded neighbors together to file a recall petition
                against the HOA Board. This would allow new voting to take place to get like minded
                neighborhood friendly people on the board. There is no law that says a HOA has to have
                a management company. Why not take that money spent on paying the management company and
                use it to hire a person whose only job is to travel the neighborhood pulling weeds,
                putting trash cans away, changing burned out light bulbs, trimming trees, painting fences,
                and any other jobs that help to make the community clean and friendly. A home owner could
                volunteer to do the accounting. How much money would be saved and how much happier would
                the neighbors be?`,
            prev: `99`,
            next: `101`
        },

        {   chapter: `101`,
            title: `Last Lecture`,
            videoSrc: `https://www.youtube.com/embed/JW-5zUXqrBE?list=PLcTWdpxJUxUj0eva32uIK8UoljvBEO7xN`,
            timeStamp: `August 22, 2013`,
            description: `Dr. Solomon hopes that the lectures have been helpful and wishes all home owners well.`,
            prev: `100`,
            next: `101`
        },
    ]
};

document.getElementById('lectures').innerHTML = template(context);