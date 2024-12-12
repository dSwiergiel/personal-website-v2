export const projects = [
  {
    isActive: true,
    header: "Rickrolled Guest Wi-Fi Prank",
    subheader: "",
    projectName: "Rickrolled Guest Wi-Fi Prank",
    date: "4/20/24",
    description:
      "Created a fun little web app mimicking a public guest Wi-Fi page with a hidden twist. Pressing “Connect” triggers a rickroll video via the browser’s play button API, then reveals Wi-Fi details and copies the password to the clipboard. Users can easily access the app by scanning a printed QR code.",
    url: "https://rickrolled-public-guest-wifi.vercel.app/",
    repoUrl: "https://github.com/dSwiergiel/rickrolled-public-guest-wifi",
    projectType: "personal",
    images: [
      {
        header: "Landing page featuring a disguised ‘Connect’ button",
        description:
          "When the user clicks the button, they are in for a surprise.",
        filename:
          "personal/rickrolled-public-guest-wifi/rickrolled-public-guest-wifi_landing.png",
      },
      {
        header: "Rickrolled!",
        description:
          "When users click “Connect,” they’re greeted with Rick Astley’s “Never Gonna Give You Up” video. Due to browser restrictions on autoplay with sound, the “Connect” button cleverly acts as the disguised play button to bypass this limitation.",
        filename:
          "personal/rickrolled-public-guest-wifi/rickrolled-public-guest-wifi_rickrolled.png",
      },
      {
        header: "Network Details",
        description: "After 5 seconds of Rick, the Wi-Fi details fade in.",
        filename:
          "personal/rickrolled-public-guest-wifi/rickrolled-public-guest-wifi_network_details.png",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    isActive: true,
    header: "Farmers Market Finder",
    subheader: "",
    projectName: "Farmers Market Finder",
    date: "2/5/20",
    description:
      "Web app which allows users to search for nearby farmers markets based on various parameters and visualizes the results on an interactive map. Built as a learning project to deepen my experience with React while incorporating real-world data sourced from data.ny.gov APIs",
    url: "https://farmermarketfinder.now.sh/",
    repoUrl: "https://github.com/dSwiergiel/FarmerMarketFinder",
    projectType: "personal",
    images: [
      {
        header: "Shows app in use",
        description: "",
        filename: "personal/farmers-market-finder/farmers-market-finder.webp",
      },
      {
        header: "Farmers market search results",
        description:
          "Farmers markets within a specified mile radius of searched zipcode",
        filename:
          "personal/farmers-market-finder/farmermarketfinder.now.sh_(1).png",
      },
      {
        header: "Farmers market details",
        description:
          "Find details about an individual farmers market like hours, phone number, website, etc",
        filename:
          "personal/farmers-market-finder/farmermarketfinder.now.sh_(3).png",
      },
      {
        header: "Filtered search results",
        description: "Filter search results",
        filename:
          "personal/farmers-market-finder/farmermarketfinder.now.sh_(2).png",
      },
      {
        header: "Search screen",
        description: "Search by radius of zip code",
        filename:
          "personal/farmers-market-finder/farmermarketfinder.now.sh.png",
      },
    ],
    stack: ["React", "JavaScript"],
  },
  {
    isActive: true,
    header: "Compound Interest Calculator",
    subheader: "",
    projectName: "Compound Interest Calculator",
    date: "1/24/19",
    description: "Web app for calculating compound interest.",
    url: "https://compound-interest-calculator.now.sh/",
    repoUrl: "https://github.com/dSwiergiel/Compound_Interest_Calculator",
    projectType: "personal",
    images: [
      {
        header: "Animations when changing values",
        description:
          "Calculate compound interest over time compounded monthly or annually",
        filename:
          "personal/compound-interest-calculator/compound-interest-calculator.webp",
      },
      {
        header: "Compound Interest Calculator",
        description: "",
        filename:
          "personal/compound-interest-calculator/compound-interest-calculator.png",
      },
      {
        header: "Mobile Version",
        description: "Mobile version",
        filename:
          "personal/compound-interest-calculator/mobile_compound-interest-calculator.png",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    isActive: true,
    header: "Rental Analysis Calculator",
    subheader: "",
    projectName: "Rental Analysis Calculator",
    date: "12/20/17",
    description:
      "A quick and dirty rental analysis calculator to help analyze investment properties for determining buy and hold rental potential. \nNOTE: Built quickly during a rental search, with no focus on best practices, as I was new to web development.",
    url: "https://rental-analysis-calculator.vercel.app/",
    repoUrl: "https://github.com/dSwiergiel/rental_analysis_calculator",
    projectType: "personal",
    images: [
      {
        header: "Results Video",
        description:
          "Generates various calculations as well as expenses pie chart, cashflow, amortization schedule, and future projections table",
        filename: "personal/rental-analysis-calculator/rental-analysis.webp",
      },
      {
        header: "Property Info",
        description: "Enter basic info about the property for personal use.",
        filename: "personal/rental-analysis-calculator/rental-analysis.png",
      },
      {
        header: "Purchase Info",
        description:
          "Enter more specifics about the property and financing details.",
        filename:
          "personal/rental-analysis-calculator/rental-analysis-purchase-info.png",
      },
      {
        header: "Rental Info",
        description: "Enter rental numbers.",
        filename:
          "personal/rental-analysis-calculator/rental-analysis-rental-info.png",
      },
      {
        header: "Calculated Results",
        description:
          "Calculated results are shown with various charts to help visualize the numbers.",
        filename:
          "personal/rental-analysis-calculator/rental-analysis-results.png",
      },
      {
        header: "Future Projections",
        description: "Calculated future projections.",
        filename:
          "personal/rental-analysis-calculator/rental-analysis-future-projections.png",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    isActive: false,
    header: "This Website",
    subheader: "made with love",
    projectName: "Personal Website",
    date: "1/24/20 - Present",
    description:
      "sdf asdff asdfasdf asg dgh sfgjkladwf dfjasdf. asd fasdf.  asdfasdfasdfjasldd kjsldfajlkdsfj asdfas dfasd fasd fasdf asdfasdfasg ergrt hytjert herfaf.",
    url: "http://devenswiergiel.com",
    repoUrl: "sdfsdf.com",
    projectType: "personal",
    images: [
      {
        header: "blah1",
        description:
          "This is a test of readability. Can you read this? MayanThis is a test of readability. Can you read this? Maybe? Not sure if you canThis is a test of readability. Can you read this? Maybe? Not sure if you can",
        filename: "personal/this-website/el-capitan.jpg",
      },
      {
        header: "blah2",
        description: "asdf   adfasdfasdf asd fasd fasd fsdfsdfa",
        filename: "personal/this-website/el-capitan.jpg",
      },
      {
        header: "blah3",
        description: "sdfffsa.",
        filename: "personal/this-website/el-capitan.jpg",
      },
      {
        header: "blah4",
        description:
          "sasdf   adfasdfasdf asd fasd fasd fsdfsdfa asdf    adfasdfasdf asd fasd fasd fsdfsdfa",
        filename: "personal/this-website/el-capitan.jpg",
      },
    ],
    stack: ["React", "JavaScript"],
  },
  {
    isActive: true,
    header: "COVID-19 FAQ AI Chatbot",
    subheader: "",
    projectName: "COVID-19 FAQ AI Chatbot",
    date: "2/25/20",
    description:
      "An AI chatbot powered by Google's Dialogflow natural language processing API. Was in production during the early stages of COVID-19 spread in the US to help alleviate the volume of questions flooding the NYS phone operators. It has since been decommissioned. Angular 8 frontend, Node.js backend.",
    url: "",
    repoUrl: "https://github.com/dSwiergiel/coronavirus-ai-chatbot",
    projectType: "professional",
    images: [
      {
        header: "COVID-19 FAQ AI Chatbot",
        description:
          "Uses natural language processing to help understand and parse the questions. 3rd grade spelling friendly!",
        filename: "professional/covid-19-ai-chatbot/covid-19-ai-chatbot.webp",
      },
      {
        header: "COVID-19 FAQ AI Chatbot",
        description: "Mobile Version",
        filename: "professional/covid-19-ai-chatbot/covid-19-ai-chatbot.png",
      },
    ],
    stack: ["Angular 2+", "Node.js", "TypeScript"],
  },
  {
    isActive: true,
    header: "COVID-19 Screening App",
    subheader: "",
    projectName: "COVID-19 Screening App",
    date: "5/24/20",
    description:
      "Led the frontend development of New York State’s COVID-19 screening web application, utilized by over 50,000 employees daily to ensure workplace safety. The application was built with Angular 9.",
    url: "https://screening.ny.gov",
    repoUrl: "",
    projectType: "professional",
    images: [
      {
        header: "COVID-19 Screening",
        description: "Homepage for employee self-screening",
        filename:
          "professional/screening-ny/screening-dev.ny.gov_self-screening.png",
      },
      {
        header: "COVID-19 Screening",
        description:
          "One of the questions asked during employee self-screening.",
        filename:
          "professional/screening-ny/screening-dev.ny.gov_self-screening-symptoms.png",
      },
      {
        header: "COVID-19 Screening",
        description:
          "After screening, employee either gets a confirmation to come into work or is told to stay home",
        filename:
          "professional/screening-ny/screening-dev.ny.gov_self-screening_confirmation.png",
      },
      {
        header: "COVID-19 Screening",
        description:
          "Coordinator screeners are supervisors who need to check in their employees as well as offer in person screenings for those unable to before coming in. They can search by email or scan the QR code.",
        filename:
          "professional/screening-ny/screening-dev.ny.gov_coordinator-screening(1).png",
      },
      {
        header: "COVID-19 Screening",
        description: "Dashboard for quick reporting.",
        filename: "professional/screening-ny/screening.ny.gov_dashboard.png",
      },
      {
        header: "COVID-19 Screening",
        description: "Dashboard for quick reporting.",
        filename: "professional/screening-ny/screening.ny.gov_dashboard.png",
      },
      {
        header: "COVID-19 Screening",
        description: "Data exporting for finer control.",
        filename:
          "professional/screening-ny/screening-dev.ny.gov_data-export.png",
      },
    ],
    stack: ["Angular 2+", "TypeScript", "C#"],
  },
  {
    isActive: true,
    header: "Nourish-NY",
    subheader: "",
    projectName: "Nourish-NY",
    date: "5/1/20",
    description:
      "Led the frontend development of a web portal for Nourish NY, a state initiative that connects farmers with surplus produce to food banks and shelters. Directed a small team to build the frontend using Angular 9 and integrated it with a backend powered by ASP.NET MVC Core.",
    url: "https://nourish.ny.gov/",
    repoUrl: "",
    projectType: "professional",
    images: [
      {
        header: "Search for products",
        description:
          "Once in the portal, users can search using various filters.",
        filename: "professional/nourish-ny/nourish-ny-search-results.png",
      },
      {
        header: "Search for products",
        description: "",
        filename: "professional/nourish-ny/nourish-ny-search.png",
      },
      {
        header: "Product and farm details",
        description: "Product and farm details",
        filename: "professional/nourish-ny/nourish-ny-details.png",
      },
      {
        header: "Farmer portal",
        description: "Portal for farmers to add their products.",
        filename: "professional/nourish-ny/nourish-ny-farmer-portal.png",
      },
    ],
    stack: ["Angular 2+", "TypeScript", "C#"],
  },
  {
    isActive: true,
    header: "My Open FOIL",
    subheader: "",
    projectName: "My Open FOIL",
    date: "10/1/18 - 1/31/19",
    description:
      "My Open FOIL is an extension of Open FOIL NY that gives users the ability to track and manage their FOIL requests. Users can upload/download documents, communicate with case workers, and view various details of their FOIL request. \nNOTE: Images shown are from an early prototype build.",
    url: "",
    repoUrl: "",
    projectType: "professional",
    images: [
      {
        header: "Landing page",
        description:
          "Users decide if they want to use the My Open FOIL to submit a FOIL request or to submit a FOIL request as a guest without access to My Open FOIL features. ",
        filename: "professional/foil-ny/my-open-foil-landing.png",
      },
      {
        header: "My FOIL requests",
        description:
          "Landing page for the My Open FOIL portal. Users can view all of their FOIL requests or submit a new one.",
        filename: "professional/foil-ny/my-open-foil.png",
      },
      {
        header: "FOIL request details",
        description:
          "FOIL request details. Users can see all information regarding the details of their FOIL request.",
        filename: "professional/foil-ny/my-open-foil-details.png",
      },
      {
        header: "Message Agency",
        description:
          "Ability to message with Records Access Officers about their FOIL request.",
        filename: "professional/foil-ny/my-open-foil-message.png",
      },
      {
        header: "Profile Edit",
        description: "Basic user info editing.",
        filename: "professional/foil-ny/my-open-foil-edit-profile.png",
      },
    ],
    stack: ["Angular 2+", "TypeScript", "C#"],
  },
];
