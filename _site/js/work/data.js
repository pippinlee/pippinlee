var work = {
  'parade': {
    'item-title': 'Parade SF',
    'item-anchor': 'http://www.parade-sf.com',
    'item-link': 'parade-sf.com',
    'item-description': "I led development alongside the designers at Parade to help build a new website for their design firm. Craft CMS gives a powerful architecture, while allowing us to build all UI's from scratch. Optimizing animations on the homepage allowed us to really bring the site alive.",
    'tech': ['Craft CMS, MAMP stack', 'CSS and jQuery for animation', 'SASS and boostrap grid system that allowed us to build 3 customized styles for different screen sizes', 'Asset optimization: SVG, device, specific load'],
    'images': ['../img/work/parade-2-op.png'],
    'color': '#4b3fb5',
    'shadow1': 'rgba(36, 58, 214, 0.5)',
    'shadow2': 'rgba(44, 32, 234, 0.22)'
  },
  'riverdale': {
    'item-title': 'Riverdale Athletics',
    'item-anchor': 'http://www.riverdaleathletics.ca',
    'item-link': 'riverdaleathletics.ca',
    'item-description': 'Built and designed Riverdale Athletics, with the goal of having a simplified one-page landing with clean info and actions. Specifically built with the understanding that the vast majority of users will come from mobile viewports.',
    'tech': ['Uses the lightweight Jekyll generator to serve up static pages', 'For a quick and easy grid system Bootstrap was used'],
    'images': ['../img/work/rac-promo-op.png'],
    'color': '#ffd509',
    'shadow1': '../rgba(152, 148, 26, 0.5)',
    'shadow2': 'rgba(234, 228, 32, 0.15)'
  },
  'get-issues': {
    'item-title': 'Get Issues',
    'item-anchor': 'http://www.github.com/pippinlee/get-issues',
    'item-link': 'get-issues',
    'item-description': 'A small command line tool I built to be the fastest way to get Github issues offline. It can be run in any local Github repo, and downloads all open issues, includes markdown syntax. I initially built this help me better understand Node\'s async.waterfall.',
    'tech': ['Uses Node.js as a simple way to make a CLI', 'Github API to get any open issues', 'Additional command line flow if user has 2-factor authentication setup on Github'],
    'images': ['../img/work/get-issues.gif'],
    'color': '#162b3e',
    'shadow1': 'rgba(36, 58, 214, 0.5)',
    'shadow2': 'rgba(44, 32, 234, 0.22)'
  },
  'holymackinaw': {
    'item-title': 'Holy Mackinaw',
    'item-anchor': 'http://www.github.com/pippinlee',
    'item-link': 'holy-mackinaw',
    'item-description': 'I built a system to help describe scoring plays in hockey in hopes of understanding highly complex and random events. Interactive elements were used that allows a user to describe video, that includes both passes, player position, and goalie weaknesses. ',
    'tech': ['Database to store scoring play data with MongoDB','Express.js was used to create a lightweight API for interacting with the database', 'Uses d3.js to build interactive system for describing plays'],
    'images': ['../img/work/holymackinaw.png'],
    'color': '#ff4d4d',
    'shadow1': 'rgba(214, 36, 36, 0.5)',
    'shadow2': 'rgba(234, 32, 32, 0.22)'
  },
  'koala': {
    'item-title': 'Koala Testers',
    'item-anchor': 'http://www.koalatesters.com',
    'item-link': 'koalatesters.com',
    'item-description': 'Koala Testers was built alongside the Heist Design team to quickly prototype a product that would help both internal and external design firms with their design process. User feedback is critical to the design process, this tool aims to make the user feedback loop quick and easy.',
    'tech': ['jQuery to keep interactions and animation simple accross browsers', 'SASS variables to build a consistant style for elements', 'Grid system: boostrap'],
    'images': ['../img/work/koala.png'],
    'color': '#f03c8f',
    'shadow1': 'rgba(152, 26, 90, 0.5)',
    'shadow2': 'rgba(152, 26, 90, 0.5)'
  },
  'global-hockey': {
    'item-title': 'Global Hockey',
    'item-anchor': 'https://github.com/pippinlee/100-years-leafs',
    'item-link': '100-years-leafs',
    'item-description': 'Built as a personal project, I wanted to understand how hockey has grown globally over 100 years of the NHL. With 1000+ players I scraped and plotted all Leafs players birth cities over the franchise\'s history.',
    'tech': ['Node.js and MongoDB were used to scrape and store data', 'Google\'s reverse-geocode API was used to find lat/long of each player\'s birth city', 'Leaflet.js was then used to render lat/long on a map'],
    'images': ['../img/work/100-years.png'],
    'color': 'rgb(42,207,224)',
    'shadow1': 'rgba(42,207,224,0.5)',
    'shadow2': 'rgba(42,207,224,0.5)'
  },
  'react-formation': {
    'item-title': 'React Formation',
    'item-anchor': 'http://www.github.com/k88hudson/react-formation',
    'item-link': 'react-formation',
    'item-description': 'A friend and I wanted to make building forms with React simpler, so we a made small React library to do just that. The library makes implementating forms easy, and with just a few dozen lines of code includes validation and A/B testing.',
    'tech': ['React for component based views', 'npm scripts for optimized development', 'Mocha.js for unit testing'],
    'images': ['../img/work/react-formation-op.png'],
    'color': '#00c596',
    'shadow1': 'rgba(36, 214, 156, 0.5)',
    'shadow2': 'rgba(32, 234, 159, 0.22)'
  },
  'driving-dashboard': {
    'item-title': 'Drive Dashboard',
    'item-anchor': 'http://www.github.com/pippinlee/drive-dashboard',
    'item-link': 'drive-dashboard',
    'item-description': 'I wanted to explore some car data a friend had given me as a quick interface to understand a route.',
    'tech': ['Uses d3.js for animating line charts', 'Uses Leaflet.js for mapping and driving animation'],
    'images': ['../img/work/drive-op.png'],
    'color': '#99da00',
    'shadow1': 'rgba(80, 214, 36, 0.5)',
    'shadow2': 'rgba(100, 234, 32, 0.22)'
  },
  'get-headlines': {
    'item-title': 'Get Headlines',
    'item-anchor': 'http://www.github.com/pippinlee/news-cli',
    'item-link': 'get-headlines',
    'item-description': 'I started by asking what would change about our relationship to different regions if we could know what is happening. I made this small command line tool that given a city, goes to the different news websites of that region and outputs the latests headlines.',
    'tech': ['Using Node.js to scrape data from different news sites', 'Distributed on npm', 'Used as part of simple local news API'],
    'images': ['../img/work/get-headlines-op.png'],
    'color': '#ff5343',
    'shadow1': 'rgba(214, 36, 36, 0.5)',
    'shadow2': 'rgba(234, 32, 32, 0.22)'
  },
  'yorku-sunshine': {
    'item-title': 'Sunshine List',
    'item-anchor': 'http://pippinlee.github.io/yorku-sunshine-list',
    'item-link': 'yorku-sunshine',
    'item-description': 'Every year the Canadian government must disclose the university staff that earn more than $100,000. This was made for an article in the student paper to show the trends and gender breakdown.',
    'tech': ['Data was scraped using a small module called scraperJS that makes querying the DOM simple', 'jQuery and Dynatable were used to display the data'],
    'images': ['../img/work/yorku-sunshine.png'],
    'color': '#ec143d',
    'shadow1': 'rgba(214, 36, 36, 0.5)',
    'shadow2': 'rgba(234, 32, 32, 0.22)'
  },
  'ghana-world-cup': {
    'item-title': 'Ghana World Cup',
    'item-anchor': 'http://www.github.com/pippinlee/ghana-world-cup',
    'item-link': 'ghana-cup',
    'item-description': 'I had a collection of photos and audio from when I covered the world cup events in Toronto. Using popcorn.js I was able to create a unique story that captures the happy choas of the Ghanese community in Toronto during the World Cup.',
    'tech': ['Uses Popcorn.js to cue audio and images by frame'],
    'images': ['../img/work/ghana.png'],
    'color': '#00bf60',
    'shadow1': 'rgba(57, 152, 26, 0.5)',
    'shadow2': 'rgba(100, 234, 32, 0.22)'
  }
};
