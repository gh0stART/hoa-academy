const template = Handlebars.templates['lectures'];

const context = {
    lectures: [
        {   chapter: `1`,
            page: `1`,
            title: `Introduction`,
        },

        {   chapter: `2`,
            page: `1`,
            title: `The History of HOAs`,
        },

        {   chapter: `3`,
            page: `1`,
            title: `Why Am I Doing This?`,
        },

        {   chapter: `4`,
            page: `1`,
            title: `Why Is This Happening?`,
        },

        {   chapter: `5`,
            page: `1`,
            title: `What is the #1 Solution?`,
        },

        {   chapter: `6`,
            page: `1`,
            title: `A Statement to Attourneys`,
        },

        {   chapter: `7`,
            page: `1`,
            title: `Introducing Terms and Concepts`,
        },

        {   chapter: `8`,
            page: `1`,
            title: `Homeowners' Associations`,
        },

        {   chapter: `9`,
            page: `1`,
            title: `Community`,
        },

        {   chapter: `10`,
            page: `1`,
            title: `The Master Association`,
        },

        {  chapter: `11`,
            page: `2`,
            title: `Capos`,
        },

        {   chapter: `12`,
            page: `2`,
            title: `Barbed Wire Syndrome`,
        },

        {   chapter: `13`,
            page: `2`,
            title: `Apartheid`,
        },

        {   chapter: `14`,
            page: `2`,
            title: `The Ghetto`,
        },
        
        {   chapter: `15`,
            page: `2`,
            title: `Stress`,
        },

        {   chapter: `16`,
            page: `2`,
            title: `Epigenetics`,
        },

        {   chapter: `17`,
            page: `2`,
            title: `Telomeres`,
        },

        {   chapter: `18`,
            page: `2`,
            title: `HOA Syndrome`,
        },

        {   chapter: `19`,
            page: `2`,
            title: `What Are You Going to do About This?`,
        },

        {   chapter: `20`,
            page: `2`,
            title: `Who Gets HOA Syndrome?`,
        },

        {   chapter: `21`,
            page: `3`,
            title: `Elder Abuse`,
        },

        {   chapter: `22`,
            page: `3`,
            title: `Speaking to Family Members`,
        },

        {   chapter: `23`,
            page: `3`,
            title: `Solutions if You Own Your Home Out-Right`,
        },

        {   chapter: `24`,
            page: `3`,
            title: `Homesteads`,
        },

        {   chapter: `25`,
            page: `3`,
            title: `Liens`,
        },

        {   chapter: `26`,
            page: `3`,
            title: `Two Tailed Psychiatric Disorder`,
        },

        {   chapter: `27`,
            page: `3`,
            title: `Another Solution for Homeowners`,
        },

        {   chapter: `28`,
            page: `3`,
            title: `CC&Rs & Governing Documents`,
        },

        {   chapter: `29`,
            page: `3`,
            title: `The Management Companies`,
        },

        {   chapter: `30`,
            page: `3`,
            title: `Common Area Interest Communities`,
        },

        {   chapter: `31`,
            page: `4`,
            title: `Super Priority Liens`,
        },

        {   chapter: `32`,
            page: `4`,
            title: `Stopping loans`,
        },

        {   chapter: `33`,
            page: `4`,
            title: `HOA Meetings`,
        },

        {   chapter: `34`,
            page: `4`,
            title: `Who does the board consist of?`,
        },

        {   chapter: `35`,
            page: `4`,
            title: `New Terms - Equity Theft`,
        },

        {   chapter: `36`,
            page: `4`,
            title: `Assessment`,
        },

        {   chapter: `37`,
            page: `4`,
            title: `Pay Protest`,
        },

        {   chapter: `38`,
            page: `4`,
            title: `Retaliation`,
        },

        {   chapter: `39`,
            page: `4`,
            title: `Foreclosures`,
        },

        {   chapter: `40`,
            page: `4`,
            title: `More collection company`,
        },

        {   chapter: `41`,
            page: `5`,
            title: `Violence`,
        },

        {   chapter: `42`,
            page: `5`,
            title: `Morals, Ethics & Values`,
        },

        {   chapter: `43`,
            page: `5`,
            title: `Garage Sales & Estate Sales`,
        },

        {   chapter: `44`,
            page: `5`,
            title: `More on CC&Rs`,
        },

        {   chapter: `45`,
            page: `5`,
            title: `Bullying & Harassment`,
        },

        {   chapter: `46`,
            page: `5`,
            title: `Fears`,
        },

        {   chapter: `47`,
            page: `5`,
            title: `Why Doesn't the Government Intercede`,
        },

        {   chapter: `48`,
            page: `5`,
            title: `Children`,
        },

        {   chapter: `49`,
            page: `5`,
            title: `Punitive Fine Letters`,
        },

        {   chapter: `50`,
            page: `5`,
            title: `The Ombudsman's Office`,
        },

        {   chapter: `51`,
            page: `6`,
            title: `Stalking`,
        },

        {   chapter: `52`,
            page: `6`,
            title: `Like a Drug`,
        },

        {   chapter: `53`,
            page: `6`,
            title: `What Can People do to Protect Themselves?`,
        },

        {   chapter: `54`,
            page: `6`,
            title: `The HOA Can Sue You, but not the Other Way Around`,
        },

        {   chapter: `55`,
            page: `6`,
            title: `Small Claims`,
        },

        {   chapter: `56`,
            page: `6`,
            title: `Psychology for Those Living in a HOA`,
        },

        {   chapter: `57`,
            page: `6`,
            title: `Scientific Proof`,
        },

        {   chapter: `58`,
            page: `6`,
            title: `Attorneys Jumping on Cases`,
        },

        {   chapter: `59`,
            page: `6`,
            title: `The Myth`,
        },

        {   chapter: `60`,
            page: `6`,
            title: `Gated Communities`,
        },

        {  chapter: `61`,
            page: `7`,
            title: `How Did it Get This Big?`,
        },

        {   chapter: `62`,
            page: `7`,
            title: `Slander, Libel and Defamation`,
        },

        {   chapter: `63`,
            page: `7`,
            title: `What's the Driving Force?`,
        },

        {   chapter: `64`,
            page: `7`,
            title: `Who's Running the Community?`,
        },
        
        {   chapter: `65`,
            page: `7`,
            title: `Towing Your Car`,
        },

        {   chapter: `66`,
            page: `7`,
            title: `Religious Agenda`,
        },

        {   chapter: `67`,
            page: `7`,
            title: `I View HOAs as Villages`,
        },

        {   chapter: `68`,
            page: `7`,
            title: `What Can You do to Protect Yourself?`,
        },

        {   chapter: `69`,
            page: `7`,
            title: `The Concept of Smearing`,
        },

        {   chapter: `70`,
            page: `7`,
            title: `Housing Urban and Development (HUD)`,
        },

        {   chapter: `71`,
            page: `8`,
            title: `Is This a Shakedown?`,
        },

        {   chapter: `72`,
            page: `8`,
            title: `An Elder Abuse Update`,
        },

        {   chapter: `73`,
            page: `8`,
            title: `HOAs are Non-profits?`,
        },

        {   chapter: `74`,
            page: `8`,
            title: `Health, Welfare and Safety`,
        },

        {   chapter: `75`,
            page: `8`,
            title: `Are Things Getting Better?`,
        },

        {   chapter: `76`,
            page: `8`,
            title: `Entire Families Under Stress`,
        },

        {   chapter: `77`,
            page: `8`,
            title: `Why Hasn't the Government Done Something?`,
        },

        {   chapter: `78`,
            page: `8`,
            title: `Any Other Soloutions?`,
        },

        {   chapter: `79`,
            page: `8`,
            title: `Another Solution`,
        },

        {   chapter: `80`,
            page: `8`,
            title: `Divorce`,
        },

        {   chapter: `81`,
            page: `9`,
            title: `More About Dr. Solomon`,
        },

        {   chapter: `82`,
            page: `9`,
            title: `Pet Problems`,
        },

        {   chapter: `83`,
            page: `9`,
            title: `How Does the HOA Know About Your Equity?`,
        },

        {   chapter: `84`,
            page: `9`,
            title: `Relating One of Many HOA Problems`,
        },

        {   chapter: `85`,
            page: `9`,
            title: `Espionage`,
        },

        {   chapter: `86`,
            page: `9`,
            title: `Closing Lecture`,
        },

        {   chapter: `87`,
            page: `9`,
            title: `Stress, Children & Families`,
        },

        {   chapter: `88`,
            page: `9`,
            title: `The HOA Financial Chain`,
        },

        {   chapter: `89`,
            page: `9`,
            title: `Zeigeist`,
        },

        {   chapter: `90`,
            page: `9`,
            title: `What Could the Future Hold?`,
        },

        {   chapter: `91`,
            page: `10`,
            title: `HOA Murders`,
        },

        {   chapter: `92`,
            page: `10`,
            title: `One Solution`,
        },

        {   chapter: `93`,
            page: `10`,
            title: `Are You Being Spied Upon?`,
        },

        {   chapter: `94`,
            page: `10`,
            title: `Disclosures When Buying a Home in a HOA`,
        },

        {   chapter: `95`,
            page: `10`,
            title: `Equality`,
        },

        {   chapter: `96`,
            page: `10`,
            title: `Retirement`,
        },

        {   chapter: `97`,
            page: `10`,
            title: `Health, Safety & Welfare`,
        },

        {   chapter: `98`,
            page: `10`,
            title: `Solutions in Nevada`,
        },

        {   chapter: `99`,
            page: `10`,
            title: `HOA Banks`,
        },

        {   chapter: `100`,
            page: `10`,
            title: `What Can Home Owners Do?`,
        },

        {   chapter: `101`,
            page: `10`,
            title: `Last Lecture`,
        },
    ]
};

document.getElementById('lecture-list').innerHTML = template(context);