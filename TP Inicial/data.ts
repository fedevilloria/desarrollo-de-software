
export interface News {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
  category: string;
  stars: number;
  emailUser: string;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  birthdate: string;
  subscriptionPlan: string;
  active: boolean;
}

export interface Plan {
  code: string;
  price: number;
  description: string;
}

export interface DolarConversion {
  ARS: number;
  CLP: number;
  COP: number;
  EUR: number;
  USD: number;
}

export interface Data {
  news: News[];
  users: User[];
  plans: Plan[];
  dolarConversion: DolarConversion;
}

const news:News[] = [
  {
    title: "Illinois Primary Election Results 2024: Live results",
    description:
      "Several races still remain too close to call one day after Tuesday’s Illinois primary election. You can find live election results as they come in here.",
    content:
      "Several races still remain too close to call one day after Tuesday's Illinois primary election.\nAs votes are tallied, results will appear on NBC Chicago's live election results page on the website and the app. Polls closed at 7 p.m. Tuesday, and resu... [4709 chars]",
    url: "https://www.nbcchicago.com/illinois-election-2024/election-results-illinois-primary-live-races-too-close-to-call/3387972/",
    image:
      "https://media.nbcchicago.com/2024/03/election-results-decision-2024.jpg?quality=85&strip=all&resize=1200%2C675",
    publishedAt: "2024-03-20T13:55:52Z",
    source: { name: "NBC Chicago", url: "https://www.nbcchicago.com" },
    category: "general",
    stars: 5,
    emailUser: "carlos@outlook.com",
  },
  {
    title:
      "An Ohio toddler died after her mom left her alone as she took a 10-day vacation. Judge: it was the ‘ultimate act of betrayal’",
    description:
      "Kristel Candelario was sentenced to life in prison by a judge who scolded her for posing for photos on a beach in Puerto Rico while her 16-month-old daughter lay dying alone in a filthy playpen back in Cleveland.",
    content:
      "CNN —\nJailyn’s cries echoed through the quiet streets of Cleveland in the dead of the night. The toddler whimpered and howled, but no one came to her rescue.\nHer mother, Kristel Candelario, was away on a 10-day summer vacation and had left Jailyn alo... [4870 chars]",
    url: "https://www.cnn.com/2024/03/20/us/ohio-mom-toddler-death-sentencing-cec/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2024-03-19-at-4-59-28-pm.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-20T13:06:00Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "general",
    stars: 1,
    emailUser: "elena@gmail.com",
  },
  {
    title: "Ireland's Prime Minister Leo Varadkar unexpectedly resigns",
    description:
      "Irish Prime Minister Leo Varadkar on Wednesday announced that he will step down as soon as his Fine Gael party names a new leader.",
    content:
      'Irish Prime Minister Leo Varadkar on Wednesday announced that he will step down as soon as his Fine Gael party names a new leader.\n"When I became party leader and Taoiseach (prime minister) back in June 2017, I knew that one part of leadership is kno... [1290 chars]',
    url: "https://www.cnbc.com/2024/03/20/irelands-prime-minister-leo-varadkar-resigns.html",
    image:
      "https://image.cnbcfm.com/api/v1/image/107390001-1710937750938-gettyimages-1785855505-grk7605933.jpeg?v=1710937789&w=1920&h=1080",
    publishedAt: "2024-03-20T12:24:50Z",
    source: { name: "CNBC", url: "https://www.cnbc.com" },
    category: "general",
    stars: 4,
    emailUser: "juan@gmail.com",
  },
  {
    title: "Luxury stocks slump as Gucci sales slide",
    description:
      "Luxury stocks tumbled Wednesday after a profit warning from Gucci parent Kering laid bare a sharp slowdown in once soaring demand for high-end goods, especially in China.",
    content:
      "London CNN —\nLuxury stocks tumbled in Europe Wednesday after a profit warning from the owner of Gucci laid bare a sharp slowdown in demand for high-end goods, especially in China.\nShares of Kering plunged as much as 15% in Paris, while LVMH, Europe’s... [2264 chars]",
    url: "https://www.cnn.com/2024/03/20/investing/kering-gucci-luxury-stocks-slump/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2087314602.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-20T11:37:00Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "general",
    stars: 5,
    emailUser: "david@frvm.com",
  },
  {
    title:
      "Georgia set to execute death row inmate Willie Pye, whose lawyers claim he has an intellectual disability",
    description:
      "As Georgia plans to carry out its first execution in more than four years on Wednesday, the condemned inmate’s attorneys argue he should be spared because of an intellectual disability and a troubled upbringing, evidence of which were never heard by his jury at trial.",
    content:
      "CNN —\nAs Georgia plans to carry out its first execution in more than four years on Wednesday, the condemned inmate’s attorneys argue he should be spared because of an intellectual disability and a troubled upbringing, evidence of which were never hea... [4233 chars]",
    url: "https://www.cnn.com/2024/03/20/us/willie-pye-georgia-execution/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-19t153753z-773311608-rc2wo6a2u528-rtrmadp-3-usa-execution-georgia.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-20T11:10:00Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "general",
    stars: 4,
    emailUser: "pedro@gmail.com",
  },
  {
    title:
      "Intel awarded up to $8.5 billion from CHIPS Act, with loans available",
    description:
      "The White House said on Wednesday that Intel has been awarded up to $8.5 billion as part of the CHIPS Act.",
    content:
      "U.S. President Joe Biden listens to Intel CEO Pat Gelsinger as he attends the groundbreaking of the new Intel semiconductor manufacturing facility in New Albany, Ohio, U.S., September 9, 2022.\nThe White House said Intel has been awarded up to $8.5 bi... [3091 chars]",
    url: "https://www.cnbc.com/2024/03/20/intel-awarded-up-to-8point5-billion-from-chips-act-with-loans-available.html",
    image:
      "https://image.cnbcfm.com/api/v1/image/107116197-16627400682022-09-09t155655z_864216168_rc2rdw9tboxe_rtrmadp_0_usa-biden.jpeg?v=1662740736&w=1920&h=1080",
    publishedAt: "2024-03-20T09:00:01Z",
    source: { name: "CNBC", url: "https://www.cnbc.com" },
    category: "general",
    stars: 5,
    emailUser: "carmen@outlook.com",
  },
  {
    title:
      "Missing Riley Strain’s pleads for answers as they call in United Cajun Navy: Live",
    description: "Riley Strain missing update",
    content:
      "✕ Close Related video: Search continues for missing University of Missouri student\nThe latest headlines from our reporters across the US sent straight to your inbox each weekday Your briefing on the latest headlines from across the US Please enter a ... [1308 chars]",
    url: "https://www.independent.co.uk/news/world/americas/riley-strain-missing-nashville-text-message-b2515486.html",
    image:
      "https://static.independent.co.uk/2024/03/19/11/riley%20strain%20split.jpg?quality=75&width=1200&auto=webp",
    publishedAt: "2024-03-20T09:00:00Z",
    source: {
      name: "The Independent",
      url: "https://www.independent.co.uk",
    },
    category: "general",
    stars: 2,
    emailUser: "ruben@gmail.com",
  },
  {
    title: "BBC Star Fuels Conspiracy; Hospital Record Fears",
    description:
      "Kate Middleton still dominating headlines: BBC star Sonja McLaughlan fuels conspiracies; hospital staff accused of attempted medical records breach.",
    content:
      "The Kate Middleton crisis continues to unravel breathlessly in the UK.\nA BBC presenter has locked her Twitter (now X) account after she shared an apparent conspiracy about the Princess of Wales’ sighting on a weekend shopping trip.\nMeanwhile, the pri... [1622 chars]",
    url: "https://deadline.com/2024/03/kate-middleton-bbc-sonja-mclaughlan-shares-conspiracy-hospital-record-fears-1235863058/",
    image:
      "https://deadline.com/wp-content/uploads/2024/03/GettyImages-1832630598-e1710922082168.jpg?w=1024",
    publishedAt: "2024-03-20T08:45:00Z",
    source: { name: "Deadline", url: "https://deadline.com" },
    category: "general",
    stars: 4,
    emailUser: "paula@gmail.com",
  },
  {
    title:
      "Jonathan Majors’ ex-girlfriend sues him over battery and defamation accusations",
    description:
      "Former Marvel actor Jonathan Majors has been sued by his former girlfriend over accusations that he physically and verbally abused her during their nearly two-year relationship.",
    content:
      "CNN —\nMonths after former Marvel actor Jonathan Majors was found guilty of assault of his ex-girlfriend in a 2023 incident, the former girlfriend has sued him over accusations that he physically and verbally abused her during their nearly two-year re... [5033 chars]",
    url: "https://www.cnn.com/2024/03/20/entertainment/jonathan-majors-former-girlfriend-files-lawsuit/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1858329399.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-20T06:42:00Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "general",
    stars: 1,
    emailUser: "adrian@hotmail.com",
  },
  {
    title:
      "Bernie Moreno: Donald Trump’s pick will win GOP Senate primary in Ohio, CNN projects",
    description:
      "Bernie Moreno will win the Republican Senate primary in Ohio, CNN projects, a victory for presumptive GOP presidential nominee Donald Trump, who had endorsed the Cleveland businessman in the three-way contest.",
    content:
      "CNN —\nBernie Moreno will win the Republican Senate primary in Ohio, CNN projects, a victory for presumptive GOP presidential nominee Donald Trump, who had endorsed the Cleveland businessman in the three-way contest.\nMoreno will next take on Democrati... [6650 chars]",
    url: "https://www.cnn.com/2024/03/19/politics/ohio-senate-election-moreno-trump/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/ap24077649589703.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-20T03:55:11Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "general",
    stars: 3,
    emailUser: "ana@frvm.com",
  },
  {
    title: "Indiana Basketball Transfer Portal Watch List: March 20, 2024",
    description:
      "We're just two days into the 45-day period for entering the transfer portal, and there have already been plenty of mentions of Indiana interest in portal entrants.",
    content:
      "Indiana Basketball Transfer Portal Watch List: March 20, 2024 Alex Bozich 2 hours ago in Recruiting\nWe’re just two days into the 45-day period for entering the transfer portal, and there have already been plenty of mentions of Indiana interest in por... [3186 chars]",
    url: "https://www.insidethehall.com/2024/03/20/indiana-basketball-transfer-portal-watch-list-march-20-2024/",
    image:
      "https://www.insidethehall.com/wp-content/uploads/2017/03/101416ssah.jpg",
    publishedAt: "2024-03-20T13:05:20Z",
    source: {
      name: "Inside the Hall",
      url: "https://www.insidethehall.com",
    },
    category: "sports",
    stars: 4,
    emailUser: "paula@gmail.com",
  },
  {
    title: "Ex-Rangers, Islanders enforcer Chris Simon died by suicide",
    description:
      "Ex-Rangers and Islanders forward Chris Simon, 52, died by suicide, his family said in a statement to ESPN. The family of the 15-year NHL veteran believes he dealt with chronic traumatic encephalopathy (CTE), a degenerative brain disease that worsens over time.",
    content:
      "Ex-Rangers and Islanders forward Chris Simon died by suicide, his family said in a statement to ESPN.\nHe was 52.\nThe family of the 15-year NHL veteran believes he dealt with chronic traumatic encephalopathy (CTE), a degenerative brain disease that wo... [2623 chars]",
    url: "https://nypost.com/2024/03/20/sports/ex-rangers-islanders-enforcer-chris-simon-died-by-suicide/",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-kgbewc0h3-1710911411118.jpg?quality=75&strip=all&1710897042&w=1024",
    publishedAt: "2024-03-20T06:06:13Z",
    source: { name: "New York Post ", url: "https://nypost.com" },
    category: "sports",
    stars: 3,
    emailUser: "sofia@outlook.com",
  },
  {
    title:
      "Joel Scott scores 23 as Colorado State routs Virginia 67-42 to cap Day 1 of March Madness",
    description:
      "Joel Scott had 23 points and 11 rebounds as Colorado State won an NCAA Tournament game for the first time in 11 years, blowing out Virginia 67-42 in the First Four.",
    content:
      "DAYTON, Ohio (AP) — Joel Scott scored a season-high 23 points and had 11 rebounds as Colorado State won an NCAA Tournament game for the first time in 11 years, blowing out Virginia 67-42 in the First Four on Tuesday night.\nNique Clifford added 17 poi... [4190 chars]",
    url: "https://apnews.com/article/colorado-state-virginia-score-march-madness-938315eb2267dedcd2fd09257090b6da",
    image:
      "https://dims.apnews.com/dims4/default/1c5d9ae/2147483647/strip/true/crop/8586x4830+0+447/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F93%2F05%2F223b14b3326090b06e8496e72bc0%2F6fe1e103b6f64e7395364d126831f7b8",
    publishedAt: "2024-03-20T05:03:45Z",
    source: { name: "The Associated Press", url: "https://apnews.com" },
    category: "sports",
    stars: 2,
    emailUser: "lucia@gmail.com",
  },
  {
    title: "Kansas star ruled out for March Madness in blow to Jayhawks",
    description:
      "If Kansas is going to go on a run this year during March Madness, they’ll have to do it without star guard Kevin McCullar Jr.",
    content:
      "If Kansas is going to go on a run this year during March Madness, they’ll have to do it without star guard Kevin McCullar Jr.\nKansas coach Bill Self said Tuesday that McCullar was not healthy enough to play in the NCAA Tournament effectively ending b... [1916 chars]",
    url: "https://nypost.com/2024/03/19/sports/kansas-star-ruled-out-for-march-madness-in-blow-to-jayhawks/",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-6dnzjkipa-1710903593944.jpg?quality=75&strip=all&1710889208&w=1024",
    publishedAt: "2024-03-20T04:09:00Z",
    source: { name: "New York Post ", url: "https://nypost.com" },
    category: "sports",
    stars: 1,
    emailUser: "marta@outlook.com",
  },
  {
    title: "Chris Board agrees to terms with Ravens",
    description:
      "The Ravens have agreed to terms with inside linebacker Chris Board, Jeff Zrebiec of TheAthletic.com reports.",
    content:
      "The Ravens have agreed to terms with inside linebacker Chris Board, Jeff Zrebiec of TheAthletic.com reports.\nBoard, 28, spent his first four seasons in Baltimore after the Ravens signed him as an undrafted free agent in 2018.\nHe left in 2022 for Detr... [379 chars]",
    url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/chris-board-agrees-to-terms-with-ravens",
    image:
      "https://nbcsports.brightspotcdn.com/dims4/default/a726ce3/2147483647/strip/true/crop/5329x2998+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F0a%2Fa9%2Fa933a46740429a03f31b86dbc9cc%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1774560263",
    publishedAt: "2024-03-20T01:58:20Z",
    source: { name: "NBC Sports", url: "https://www.nbcsports.com" },
    category: "sports",
    stars: 5,
    emailUser: "pedro@gmail.com",
  },
  {
    title: "Paulie's Picks: 2024 Valspar Championship",
    description:
      "It's Valspar Championship week, and players will have a different kind of Florida test at the Copperhead Course. Value can be had, however.",
    content:
      "The Tour completes the Florida Swing this week with the Valspar Championship at the Copperhead Course at Innisbrook Resort. This is not your normal Florida golf course, as it has thick rough and plays more like many courses in Georgia and the Carolin... [1684 chars]",
    url: "https://thefriedegg.com/paulies-picks-valspar/",
    image:
      "https://thefriedegg.com/wp-content/themes/friedegg/img/logo-preview.svg",
    publishedAt: "2024-03-20T01:46:27Z",
    source: { name: "The Fried Egg", url: "https://thefriedegg.com" },
    category: "sports",
    stars: 3,
    emailUser: "david@frvm.com",
  },
  {
    title: "Flyers stabilize with start-to-finish win over Maple Leafs",
    description:
      "Samuel Ersson and the Flyers stemmed the tide Tuesday night with a 4-3 win over the Maple Leafs at the Wells Fargo Center.",
    content:
      "Samuel Ersson and the Flyers stemmed the tide Tuesday night with a 4-3 win over the Maple Leafs at the Wells Fargo Center.\nScott Laughton scored a massive goal to put a dent into Toronto's third-period comeback bid. The Flyers had just killed off Lau... [6110 chars]",
    url: "https://www.nbcsportsphiladelphia.com/nhl/philadelphia-flyers/flyers-vs-maple-leafs-stabilizing-win-john-tortorellas-club-over-toronto/572242/",
    image:
      "https://media.nbcsportsphiladelphia.com/2024/03/USA-Scott-Laughton-Owen-Tippett.jpg?quality=85&strip=all&resize=1200%2C675",
    publishedAt: "2024-03-20T01:45:41Z",
    source: {
      name: "NBC Sports Philadelphia",
      url: "https://www.nbcsportsphiladelphia.com",
    },
    category: "sports",
    stars: 3,
    emailUser: "paula@gmail.com",
  },
  {
    title: "Chase Daniel talks Justin Fields trade, Caleb Williams",
    description:
      "Ex-Bears QB Chase Daniel gets candid about the Justin Fields trade, Caleb Williams",
    content:
      'Former Bears signal caller Chase Daniel joined NBC Sports Chicago\'s "Football Night in Chicago" on Tuesday to break down his thoughts on the Justin Fields trade and the prospects of Caleb Williams.\nDaniel is a staunch Fields fan who had hoped the Bea... [4240 chars]',
    url: "https://www.nbcsportschicago.com/nfl/chicago-bears/bears-news/chase-daniels-shares-candid-thoughts-on-justin-fields-trade-caleb-williams/548417/",
    image:
      "https://media.nbcsportschicago.com/2023/05/chase_daniel_usa_today-1.png?resize=1200%2C675&quality=85&strip=all",
    publishedAt: "2024-03-20T01:37:21Z",
    source: {
      name: "NBC Sports Chicago",
      url: "https://www.nbcsportschicago.com",
    },
    category: "sports",
    stars: 4,
    emailUser: "david@frvm.com",
  },
  {
    title: "Transfer Portal: Top 10 players to enter on Day Two",
    description:
      "On3's Jamie Shaw discusses and breaks down the top ten players to enter the college basketball transfer portal on Day Two.",
    content:
      "The college basketball transfer portal opened on Monday to start the 45-day window where all men’s college basketball players will be able to enter the transfer portal without penalty. It has been a busy 48 hours with over 350 players submitting thei... [3426 chars]",
    url: "https://www.on3.com/transfer-portal/news/transfer-portal-top-10-players-to-enter-on-day-two/",
    image:
      "https://on3static.com/uploads/dev/assets/cms/2022/11/07092648/Andrej-Stojakovic-2.png",
    publishedAt: "2024-03-20T01:13:07Z",
    source: { name: "On3.com", url: "https://www.on3.com" },
    category: "sports",
    stars: 5,
    emailUser: "carlos@outlook.com",
  },
  {
    title:
      "Examining Plausibility Of Steelers Trading For 49ers WR Brandon Aiyuk",
    description:
      "With rumors swirling surrounding a Steelers trade for Brandon Aiyuk, how plausible is the move from a salary cap standpoint?",
    content:
      "San Francisco 49ers WR Brandon Aiyuk appears to be the main internet buzz on Tuesday when it comes to the Pittsburgh Steelers and their fans. Why? Well, for starters, the buzz seems to be that the 49ers might be interested in trading Aiyuk. On top of... [5112 chars]",
    url: "https://steelersdepot.com/2024/03/examining-plausibility-of-steelers-trading-for-49ers-wr-brandon-aiyuk/",
    image:
      "https://steelersdepot.com/wp-content/uploads/2024/03/brandon-aiyuk-49ers-steelers-2023.jpg",
    publishedAt: "2024-03-20T01:10:04Z",
    source: { name: "Steelers Depot", url: "https://steelersdepot.com" },
    category: "sports",
    stars: 5,
    emailUser: "pedro@gmail.com",
  },
  {
    title: "Eclipses Injured Their Eyes, and the World Never Looked the Same",
    description:
      "A number of case studies published after recent total solar eclipses highlight the importance of safe viewing.",
    content:
      "A young woman visited New York Eye & Ear Infirmary of Mount Sinai Hospital shortly after the eclipse of Aug. 21, 2017. She told Dr. Avnish Deobhakta, an ophthalmologist, that she had a black area in her vision, and then drew a crescent shape for him ... [595 chars]",
    url: "https://www.nytimes.com/2024/03/20/health/total-solar-eclipse-eye-safety.html",
    image:
      "https://static01.nyt.com/images/2024/03/20/multimedia/20sci-eclipse-eyes-hkcf/20sci-eclipse-eyes-hkcf-facebookJumbo.jpg",
    publishedAt: "2024-03-20T13:50:39Z",
    source: {
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
    category: "science",
    stars: 2,
    emailUser: "paula@gmail.com",
  },
  {
    title: "SpaceX and NASA prepare for 30th ISS resupply mission",
    description:
      "NASA and SpaceX are preparing to launch the 30th resupply mission to the International Space Station no earlier than Thursday, March 21st, at 4:55 pm ET.",
    content:
      "By\nNASA and SpaceX are preparing to launch the 30th resupply mission to the International Space Station no earlier than Thursday, March 21st, at 4:55 pm ET.\nThe Cargo Dragon capsule will send thousands of pounds of supplies and experiments to the ISS... [2427 chars]",
    url: "https://www.teslarati.com/spacex-nasa-prepare-30th-iss-resupply-mission/",
    image:
      "https://www.teslarati.com/wp-content/uploads/2024/03/GJEXcCkaYAAR3nS-scaled.jpg",
    publishedAt: "2024-03-19T23:49:58Z",
    source: { name: "TESLARATI", url: "https://www.teslarati.com" },
    category: "science",
    stars: 5,
    emailUser: "ana@frvm.com",
  },
  {
    title: "Cranberries can improve runner performance, fatigue: study",
    description:
      "We've got some berry good news for runners — a new study from Concordia University finds that cranberries are a track star's best friend, boosting speed by 1.5%.",
    content:
      "We’ve got some berry good news for runners — a new study finds that cranberries are a track star’s best friend, boosting speed by 1.5%.\n“The beauty of this is that it is all natural,” senior study author Andreas Bergdahl, an associate professor at Mo... [1624 chars]",
    url: "https://nypost.com/2024/03/19/lifestyle/cranberries-can-improve-runner-performance-fatigue-study/",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-x6eieqkek-1710882063004.jpg?quality=75&strip=all&1710871093&w=1024",
    publishedAt: "2024-03-19T23:08:00Z",
    source: { name: "New York Post ", url: "https://nypost.com" },
    category: "science",
    stars: 2,
    emailUser: "pedro@gmail.com",
  },
  {
    title: "Explosive nova will create a ‘new star’ in the night sky",
    description:
      "Astronomers predict that a “new star” will become visible after an explosive event in the Northern Crown constellation, and it could happen anytime.",
    content:
      "Sign up for CNN’s Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\nCNN —\nAstronomers are expecting a “new star” to appear in the night sky anytime between now and September... [4277 chars]",
    url: "https://www.cnn.com/2024/03/19/world/t-coronae-borealis-nova-new-star-scn/index.html",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2024-03-19-at-2-24-39-pm.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-03-19T20:27:00Z",
    source: { name: "CNN", url: "https://www.cnn.com" },
    category: "science",
    stars: 3,
    emailUser: "elena@gmail.com",
  },
  {
    title: "Meteor seen on video falling just south of Galveston 🌠☄️",
    description:
      "A bright-greenish, blue meteor was caught on camera falling just south of Galveston, Texas.",
    content:
      "GALVESTON, Texas – Talk about a sight for sore eyes! Cameras caught a quick glimpse of a large meteor falling south of Galveston.\nVideo shared by Saltwater-Recon.com via Twitter shows two different angles of the greenish-blue fireball.\nInterestingly,... [379 chars]",
    url: "https://www.click2houston.com/news/local/2024/03/19/meteor-seen-on-video-falling-just-south-of-galveston/",
    image:
      "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/03-19-2024/t_246787da1d8d4b1b87052d96649fcbfb_name_image.jpg?_a=ATAPphC0",
    publishedAt: "2024-03-19T18:13:48Z",
    source: {
      name: "KPRC Click2Houston",
      url: "https://www.click2houston.com",
    },
    category: "science",
    stars: 3,
    emailUser: "lucia@gmail.com",
  },
  {
    title:
      "3D map of over 1 million black holes traces where the universe's dark matter lies",
    description:
      "Nearly 1.3 million quasars are included in a vast cosmic map, with the most distant having existed just 1.5 billion years after the Big Bang.",
    content:
      "Each tiny dot in this three-dimensional representation of the Quaia catalog is a quasar. The split down the middle is where the plane of our Milky Way bisects the sky, blocking the view.\nAn enormous map of the universe has been assembled from the pos... [4347 chars]",
    url: "https://www.space.com/quasar-3d-map-dark-matter-distribution",
    image:
      "https://cdn.mos.cms.futurecdn.net/LimDrY9CawKW3XNcLm2xed-1200-80.gif",
    publishedAt: "2024-03-19T16:24:15Z",
    source: { name: "Space.com", url: "https://www.space.com" },
    category: "science",
    stars: 5,
    emailUser: "elena@gmail.com",
  },
  {
    title: "The world is both subjective and real",
    description:
      "Explore the philosophical debate on reality and experience. Discover how Kant's transcendental idealism aligns with our everyday perception and Einstein's physics of relativity. As part of our series on idealism in partnership with the Essentia Foundation.",
    content:
      "Philosophers since Descartes have questioned whether our experience reflects a reality outside of our minds. In this instalment of our idealism series, in partnership with the Essentia Foundation, Paul Franks argues that the basic insight of Kant’s a... [10198 chars]",
    url: "https://iai.tv/articles/the-world-is-both-subjective-and-real-paul-franks-auid-2789",
    image: "https://iai.tv/favicon.ico",
    publishedAt: "2024-03-19T15:13:54Z",
    source: { name: "IAI", url: "https://iai.tv" },
    category: "science",
    stars: 3,
    emailUser: "elena@gmail.com",
  },
  {
    title: "Quanta Magazine",
    description:
      "Recent controversies bode ill for the effort to detect life on other planets by analyzing the gases in their atmospheres.",
    content:
      "In 2020, scientists detected a gas called phosphine in the atmosphere of an Earth-size rocky planet. Knowing of no way that phosphine could be produced except through biological processes, “the scientists assert that something now alive is the only e... [7978 chars]",
    url: "https://www.quantamagazine.org/doubts-grow-about-the-biosignature-approach-to-alien-hunting-20240319/",
    image:
      "https://d2r55xnwy6nx47.cloudfront.net/uploads/2024/03/BiosignatureDoubts-crVicoSantos-Social.webp",
    publishedAt: "2024-03-19T14:04:16Z",
    source: {
      name: "Quanta Magazine",
      url: "https://www.quantamagazine.org",
    },
    category: "science",
    stars: 3,
    emailUser: "manuel@hotmail.com",
  },
  {
    title:
      "Astrobotic readies next lunar lander following failed Peregrine moon mission",
    description:
      "Despite the failure of the first U.S. commercial lunar lander to ever operate in space, Astrobotic is pressing ahead with its next moon, set for 2024.",
    content:
      "Factory floor work on readying the Astrobotic Griffin Mission One lunar lander that will carry to the moon NASA's VIPER robot.\nDespite the failure of the first U.S. commercial lunar lander to ever operate in space, Astrobotic Technology is pressing f... [5279 chars]",
    url: "https://www.space.com/astrobotic-next-lunar-lander-failed-peregrine-mission",
    image:
      "https://cdn.mos.cms.futurecdn.net/XfFcNKAf8TzjMF3ZEg4vXR-1200-80.jpg",
    publishedAt: "2024-03-19T14:00:25Z",
    source: { name: "Space.com", url: "https://www.space.com" },
    category: "science",
    stars: 5,
    emailUser: "paula@gmail.com",
  },
  {
    title:
      "Thomas Stafford, who flew to the Moon and docked with Soyuz, dies at 93",
    description:
      "Stafford and his Apollo 10 shipmates still hold the speed record on a crew spacecraft.",
    content:
      "Former NASA astronaut Thomas Stafford, a three-star Air Force general known for a historic handshake in space with a Soviet cosmonaut nearly 50 years ago, died Monday in Florida. He was 93.\nStafford was perhaps the most accomplished astronaut of his ... [4007 chars]",
    url: "https://arstechnica.com/space/2024/03/thomas-stafford-who-flew-to-the-moon-and-docked-with-soyuz-dies-at-93/",
    image:
      "https://cdn.arstechnica.net/wp-content/uploads/2024/03/ast-005-296large-760x380.jpg",
    publishedAt: "2024-03-19T12:46:19Z",
    source: { name: "Ars Technica", url: "https://arstechnica.com" },
    category: "science",
    stars: 4,
    emailUser: "adrian@hotmail.com",
  },
  {
    title: "Stardew Valley’s 1.6 update smashes its Steam player record",
    description:
      "Stardew Valley hit 146,159 concurrent players on Steam within 24 hours of the new update, smashing the game’s previous record as players flock to enjoy new content.",
    content:
      "Stardew Valley’s massive 1.6 update has been out on PC for less than 24 hours, and it’s already taken the game’s popularity to staggering new heights. The cozy farming simulator hit 146,159 concurrent players on Steam according to SteamDB data, smash... [1231 chars]",
    url: "https://www.theverge.com/2024/3/20/24106601/stardew-valley-steam-player-record-number",
    image:
      "https://cdn.vox-cdn.com/thumbor/negn6OOzdecA7keMNhypFlYa95o=/445x0:1600x794/1200x628/filters:focal(800x600:801x601)/cdn.vox-cdn.com/uploads/chorus_asset/file/25345673/Stardew_Valley_1.6_farm.jpeg",
    publishedAt: "2024-03-20T10:43:04Z",
    source: { name: "The Verge", url: "https://www.theverge.com" },
    category: "technology",
    stars: 4,
    emailUser: "paula@gmail.com",
  },
  {
    title: "Study on ‘World’s Oldest Pyramid’ Is Retracted by Publisher",
    description:
      "The study, based on research featured in a Netflix documentary, fueled debate over a site that is used for Islamic and Hindu rituals.",
    content:
      "The American publisher of a study that challenged scientific orthodoxy by claiming that an archaeological site in Indonesia may be the world’s “oldest pyramid” says it has been retracted.\nThe October 2023 study in the journal Archaeological Prospecti... [711 chars]",
    url: "https://www.nytimes.com/2024/03/20/science/indonesia-oldest-pyramid-gunung-padang.html",
    image:
      "https://static01.nyt.com/images/2024/03/20/multimedia/20xp-pyramid-cghm/20xp-pyramid-cghm-facebookJumbo.jpg",
    publishedAt: "2024-03-20T09:00:02Z",
    source: {
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
    category: "technology",
    stars: 3,
    emailUser: "sofia@outlook.com",
  },
  {
    title:
      "Google Pixel 8a leak reveals upgrades that make it almost as good as the Pixel 8",
    description:
      "The Google Pixel 8a could debut as early as in a few months, and leaks suggest that big upgrades could be on the way.",
    content:
      "What you need to know\nGoogle's upcoming Pixel 8a is a budget smartphone based on the Pixel 8, and it could debut in a few months.\nThe smartphone was recently spotted in FCC databases, which is a clear indicator that the Pixel 8a is on the way.\nNow, a... [2374 chars]",
    url: "https://www.androidcentral.com/phones/google-pixel-8a-leaked-display-upgrade",
    image:
      "https://cdn.mos.cms.futurecdn.net/YgCoruYwPuJQaXupVMkJmA-1200-80.jpg",
    publishedAt: "2024-03-20T06:27:24Z",
    source: {
      name: "Android Central",
      url: "https://www.androidcentral.com",
    },
    category: "technology",
    stars: 4,
    emailUser: "daniel@frvm.com",
  },
  {
    title: "To Build Muscle, It’s the Sets That Count",
    description:
      "Short workouts can make you stronger, but longer workouts are better for building muscle, according to new research",
    content:
      "Earlier this year, I wrote a column on the “minimal effective dose” of strength training. Remarkably, newbie lifters can make gains with as little as one set of six to 15 reps per week—on average, at least. But average results don’t tell the full sto... [5204 chars]",
    url: "https://www.outsideonline.com/health/training-performance/strength-training-non-responders/?scope=anon",
    image:
      "https://cdn.outsideonline.com/wp-content/uploads/2024/03/man-lifting-sitting_h-1024x576.jpg?width=1200",
    publishedAt: "2024-03-20T06:00:00Z",
    source: { name: "Outside", url: "https://www.outsideonline.com" },
    category: "technology",
    stars: 3,
    emailUser: "alejandro@hotmail.com",
  },
  {
    title: "Apex Legends devs break silence after devastating ALGS hack",
    description:
      "Respawn has announced a new suite of security updates for Apex Legends after a series of devastating hacks derailed an ALGS tournament.",
    content:
      "Respawn has announced a new suite of security updates for Apex Legends after a series of devastating hacks derailed an ALGS tournament.\nOn March 17, Apex Legends was hit with a series of hacks when two players in a private pro ALGS lobby were given c... [1743 chars]",
    url: "https://www.dexerto.com/apex-legends/apex-legends-devs-break-silence-after-devastating-algs-hack-2600352/",
    image:
      "https://editors.dexerto.com/wp-content/uploads/2023/12/17/Apex-Legends-Stormpoint.jpg",
    publishedAt: "2024-03-20T03:38:22Z",
    source: { name: "Dexerto", url: "https://www.dexerto.com" },
    category: "technology",
    stars: 5,
    emailUser: "lucia@gmail.com",
  },
  {
    title:
      "Fatal Fury: City of the Wolves Director and Producer talk reviving the series after 25 years, Story Mode, lane system, rollback and more",
    description:
      "The floodgates are finally starting to open for information surrounding Fatal Fury: City of the Wolves, but it probably be best to hear more about it from those actively working to make this sequel a reality after 25 years. I ...",
    content:
      "The floodgates are finally starting to open for information surrounding Fatal Fury: City of the Wolves, but it probably be best to hear more about it from those actively working to make this sequel a reality after 25 years.\nI was one of the lucky few... [4052 chars]",
    url: "https://www.eventhubs.com/news/2024/mar/19/fatal-fury-developer-interview/",
    image:
      "https://media.eventhubs.com/images/2024/03/19-fatal-fury-developer-interviewt.webp",
    publishedAt: "2024-03-20T02:35:15Z",
    source: { name: "EventHubs", url: "https://www.eventhubs.com" },
    category: "technology",
    stars: 3,
    emailUser: "pedro@gmail.com",
  },
  {
    title:
      "Entirely accurate 3D-printed Mac Plus built in these 29 painstaking steps",
    description:
      "What could have been a dozen separate videos is instead one 48-minute marvel.",
    content:
      "Have you ever worked on a hobby project where modifying and compiling the source code for a Linux-based emulator was possibly the easiest and most straightforward part of the whole thing?\nKevin Noki really, really wanted a functioning Macintosh Plus,... [5629 chars]",
    url: "https://arstechnica.com/gadgets/2024/03/3d-printed-mac-replica-is-a-maker-masterwork-inside-an-entirely-accurate-shell/",
    image:
      "https://cdn.arstechnica.net/wp-content/uploads/2024/03/booted_mac_replica-760x380.jpg",
    publishedAt: "2024-03-19T22:24:08Z",
    source: { name: "Ars Technica", url: "https://arstechnica.com" },
    category: "technology",
    stars: 2,
    emailUser: "david@frvm.com",
  },
  {
    title: "New Festivals, Features, And Fixes",
    description:
      "Carrots, broccoli, a bookseller, AND hats for pets?! Sign us up",
    content:
      "Stardew Valley’s 1.6 update is finally here—and it’s bigger than any of us anticipated. The developer, Eric “ConcernedApe” Barone has been coy about some of the bigger features the update would introduce, teasing a festival and some new dialogue, but... [4159 chars]",
    url: "https://kotaku.com/stadew-valley-16-update-new-features-content-crops-pets-1851350199",
    image:
      "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/70293ff4714baf9cb32f8269d6f34344.png",
    publishedAt: "2024-03-19T21:15:00Z",
    source: { name: "Kotaku", url: "https://kotaku.com" },
    category: "technology",
    stars: 3,
    emailUser: "david@frvm.com",
  },
  {
    title: "Segway debuts Navimow i110N Robot Lawn Mower",
    description:
      "Segway debuts its new Navimow i110N Robot Lawn Mower with satellite positioning and AI-assisted navigation that is available for pre-order.",
    content:
      "Segway debuts its new Navimow i110N Robot Lawn Mower on Amazon after a successful European launch that began two weeks ago. Now available for pre-order, the new i Series models are designed for yards up to 1/4-acre in size on a single charge and intr... [4009 chars]",
    url: "https://9to5toys.com/2024/03/19/segway-navimow-i110n-robot-lawn-mower/",
    image:
      "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2024/03/Segway-Navimow-i110N-robot-lawn-mower-3.jpg?resize=1200%2C628&ssl=1",
    publishedAt: "2024-03-19T20:55:16Z",
    source: { name: "9to5Toys", url: "https://9to5toys.com" },
    category: "technology",
    stars: 3,
    emailUser: "carlos@outlook.com",
  },
  {
    title: "Into The Light Reveals New Horde Mode, Onslaught",
    description:
      "Onslaught introduces a permanent horde mode to Bungie’s looter shooter",
    content:
      "We’ve still got a couple more months to wait for Destiny 2’s next expansion, The Final Shape, which is set to launch June 4. But players finally have something to get excited about, thanks to a new developer stream. Into the Light, the game’s next up... [2578 chars]",
    url: "https://kotaku.com/destiny-2-onslaught-into-the-light-horde-mode-1851349944",
    image:
      "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d8601cce2f872056fa25ede0f77c3839.jpg",
    publishedAt: "2024-03-19T20:30:00Z",
    source: { name: "Kotaku", url: "https://kotaku.com" },
    category: "technology",
    stars: 1,
    emailUser: "daniel@frvm.com",
  },
  {
    title: "Vietnam’s President Resigns, State Media Says",
    description:
      "The nature of President Vo Van Thuong’s wrongdoing was unclear, but his departure could be a sign of an internal power struggle among Vietnam’s leaders.",
    content:
      "President Vo Van Thuong of Vietnam has resigned after violating Communist Party regulations, state media reported on Wednesday, the second president to step down in a little over a year. The reports did not offer any details about his alleged wrongdo... [1125 chars]",
    url: "https://www.nytimes.com/2024/03/20/world/asia/vietnam-president-thuong-resigns.html",
    image:
      "https://static01.nyt.com/images/2024/03/20/multimedia/00hfo-vietnam-tbzm/00hfo-vietnam-tbzm-facebookJumbo.jpg",
    publishedAt: "2024-03-20T12:50:43Z",
    source: {
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
    category: "world",
    stars: 5,
    emailUser: "ruben@gmail.com",
  },
  {
    title: "NATO Ally Could Command 60,000 Strong Force in Ukraine: General",
    description:
      "French President Emmanuel Macron has been advancing a debate on whether to send allied troops to the country.",
    content:
      'French troops are ready for "the toughest engagements," the commander of the country\'s ground forces has said, as President Emmanuel Macron mulls an official military deployment to Ukraine despite repeated Russian threats of retaliation.\nIn an op-ed ... [4010 chars]',
    url: "https://www.newsweek.com/nato-ally-sixty-thousand-soldiers-ukraine-general-france-macron-1881216",
    image:
      "https://d.newsweek.com/en/full/2364837/french-tanks-cross-vistula-river-poland.jpg",
    publishedAt: "2024-03-20T12:00:30Z",
    source: { name: "Newsweek", url: "https://www.newsweek.com" },
    category: "world",
    stars: 4,
    emailUser: "lucia@gmail.com",
  },
  {
    title: "Ukraine Drones Attack Russian Nuclear-Capable Aviation Hub",
    description:
      "The city of Engels, home to an important air base, lies around 300 miles from the Ukrainian border, deep into Russian territory.",
    content:
      "Drones attacked a southwestern Russian city, home of one of Russia's strategic bomber bases overnight, according to Russian authorities.\nAn unspecified number of drones were destroyed over the city of Engels in Russia's Saratov Oblast, regional gover... [3047 chars]",
    url: "https://www.newsweek.com/russia-engels2-airbase-drone-attack-ukraine-1881141",
    image: "https://d.newsweek.com/en/full/2364745/engels-2-airbase.jpg",
    publishedAt: "2024-03-20T10:59:03Z",
    source: { name: "Newsweek", url: "https://www.newsweek.com" },
    category: "world",
    stars: 4,
    emailUser: "carlos@outlook.com",
  },
  {
    title: "The Terrifying Allure of Mona Island",
    description:
      "Why had immigrants, seekers and pilgrims been drawn for centuries to the treacherous shores of Mona Island? I set off to find out.",
    content:
      "Every year, I spend a month or two in Puerto Rico, where my mother’s family is from. Often I go in winter, with the other snowbirds, finding solace among palm trees. But I’m not a tourist, not really. I track the developers that privatize the shoreli... [1609 chars]",
    url: "https://www.nytimes.com/2024/03/20/magazine/mona-island-puerto-rico.html",
    image:
      "https://static01.nyt.com/images/2024/03/24/magazine/24mag-Mona-04/24mag-Mona-04-facebookJumbo.jpg",
    publishedAt: "2024-03-20T09:05:22Z",
    source: {
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
    category: "world",
    stars: 3,
    emailUser: "paula@gmail.com",
  },
  {
    title:
      "US and UK doctors in Washington to warn of IDF’s ‘appalling atrocities’ in Gaza",
    description:
      "Doctors who have returned from volunteering at besieged hospitals to tell officials aid is meaningless without a ceasefire",
    content:
      "A delegation of American and British doctors is in Washington DC to tell the Biden administration the Israeli military is systematically destroying Gaza’s health infrastructure in order to drive Palestinians out of their homes.\nThe doctors, who have ... [7226 chars]",
    url: "https://www.theguardian.com/us-news/2024/mar/20/us-uk-doctors-biden-idf-atrocities-gaza-ceasefire",
    image:
      "https://i.guim.co.uk/img/media/9b84a97ab38aa064c986f9efbcdb754fe40f5209/0_86_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=05f531c702a865ce1721dad84c013eab",
    publishedAt: "2024-03-20T09:03:00Z",
    source: {
      name: "The Guardian US",
      url: "https://www.theguardian.com",
    },
    category: "world",
    stars: 3,
    emailUser: "lucia@gmail.com",
  },
  {
    title: "Keoyoung Sun : South Korean tanker capsizes off southwestern Japan",
    description:
      "The coast guard said it had rescued eight crew members and was still searching for three who were missing",
    content:
      "TOKYO (AP) — A South Korean tanker capsized off an island in southwestern Japan early Wednesday, and the coast guard said it had rescued nine crew members and was still searching for two who were missing.\nThe coast guard said it received a distress c... [1136 chars]",
    url: "https://apnews.com/article/japan-south-korean-tanker-capsized-coast-guard-b947a1a32ae089882edc6b033bfa2fef",
    image:
      "https://dims.apnews.com/dims4/default/0cd038f/2147483647/strip/true/crop/5000x2813+0+192/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F70%2F13%2F703746e873fbec7d14fba036f67a%2Ffc08c06554d644d0b2277236502f8bf1",
    publishedAt: "2024-03-20T04:10:39Z",
    source: { name: "The Associated Press", url: "https://apnews.com" },
    category: "world",
    stars: 3,
    emailUser: "javier@frvm.com",
  },
  {
    title: "Brazil: Jair Bolsonaro's COVID decisions are catching up to him",
    description:
      "Bolsonaro wasn't the only one indicted on Tuesday: Cid and 15 others were accused of involvement in the scheme to falsify records for themselves and others.",
    content:
      "RIO DE JANEIRO (AP) — As Brazilian President Jair Bolsonaro’s term wound down in the final days of December 2022, he had decided to skip the ritual of handing over the presidential sash to his successor, and instead made plans to travel abroad.\nBut t... [4904 chars]",
    url: "https://apnews.com/article/brazil-bolsonaro-covid19-vaccination-indictment-2e9194bb1a6dc56e421f71016487e76f",
    image:
      "https://dims.apnews.com/dims4/default/6b1540b/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff0%2F29%2F86a6cc5dd08d78505fc00e5bacf4%2F96f878cc33954591aa1edf1fb9d59125",
    publishedAt: "2024-03-20T04:10:00Z",
    source: { name: "The Associated Press", url: "https://apnews.com" },
    category: "world",
    stars: 4,
    emailUser: "sofia@outlook.com",
  },
  {
    title:
      "Ukraine’s Drones Threaten Russian Oil Industry With Refinery Strikes",
    description:
      "Ukraine’s fight against Russia’s invasion has entered a new phase, pitting homegrown drone technology against a 2,000 kilometer (1,200 mile) swathe of largely Soviet-era oil facilities.",
    content:
      "Ukraine’s fight against Russia’s invasion has entered a new phase, pitting homegrown drone technology against a 2,000 kilometer (1,200 mile) swathe of largely Soviet-era oil facilities.\nAt least nine major refineries have been successfully attacked t... [267 chars]",
    url: "https://www.bloomberg.com/news/articles/2024-03-20/ukraine-s-drones-threaten-russian-oil-industry-with-refinery-strikes",
    image:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ime3oD2Vaa8w/v3/1200x800.jpg",
    publishedAt: "2024-03-20T04:00:00Z",
    source: { name: "Bloomberg", url: "https://www.bloomberg.com" },
    category: "world",
    stars: 3,
    emailUser: "ruben@gmail.com",
  },
  {
    title: "China launches Queqiao-2 relay satellite to support moon missions",
    description:
      "China launches Queqiao-2 relay satellite to support moon missions China launched its Queqiao-2 relay satellite Tuesday to support upcoming lunar far side and south polar missions.",
    content:
      "HELSINKI — China launched its Queqiao-2 relay satellite Tuesday to support upcoming lunar far side and south polar missions.\nA Long March 8 rocket lifted off from Wenchang Satellite Launch Center at 8:31 p.m. Eastern, March 19 (0031 UTC March 20). Th... [3836 chars]",
    url: "https://spacenews.com/china-launches-queqiao-2-relay-satellite-to-support-moon-missions/",
    image:
      "https://spacenews.com/wp-content/uploads/2024/03/queqiao-2-CZ8-launch-20-march2024-CNSA-1.jpg",
    publishedAt: "2024-03-20T01:20:14Z",
    source: { name: "SpaceNews", url: "https://spacenews.com" },
    category: "world",
    stars: 3,
    emailUser: "elena@gmail.com",
  },
  {
    title:
      "Cambodia's prime minister sounds a sour note on trucks' musical horns",
    description:
      "Cambodian Prime Minister Hun Manet has ordered a ban on musical horns, after videos posted on social media showed people dancing on roads and roadsides as passing trucks blasted rhythmic little tunes.",
    content:
      "PHNOM PENH, Cambodia (AP) — Cambodian Prime Minister Hun Manet has ordered a ban on musical horns, after videos posted on social media showed people dancing on roads and roadsides as passing trucks blasted rhythmic little tunes.\nHun Manet, who last y... [1082 chars]",
    url: "https://apnews.com/article/cambodia-truck-horns-music-hun-manet-e3eba65be026e470a4c2aecd76b302ae",
    image:
      "https://dims.apnews.com/dims4/default/452af94/2147483647/strip/true/crop/5000x2813+0+249/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F95%2F50%2F60e1a65ebcaf7052d9aaa90348d1%2F4aef673a801a4a209bdd46b1cebe234f",
    publishedAt: "2024-03-20T01:12:00Z",
    source: { name: "The Associated Press", url: "https://apnews.com" },
    category: "world",
    stars: 5,
    emailUser: "javier@frvm.com",
  },
];

const users:User[] = [
  {
    id: 1,
    name: "Juan",
    lastName: "Pérez",
    email: "juan@gmail.com",
    birthdate: "1990-05-15",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 2,
    name: "María",
    lastName: "Gómez",
    email: "maria@hotmail.com",
    birthdate: "1985-10-20",
    subscriptionPlan: "basic",
    active: false,
  },
  {
    id: 3,
    name: "Carlos",
    lastName: "López",
    email: "carlos@outlook.com",
    birthdate: "1995-03-08",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 4,
    name: "Ana",
    lastName: "Martínez",
    email: "ana@frvm.com",
    birthdate: "1988-12-03",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 5,
    name: "Pedro",
    lastName: "García",
    email: "pedro@gmail.com",
    birthdate: "1992-07-18",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 6,
    name: "Laura",
    lastName: "Rodríguez",
    email: "laura@hotmail.com",
    birthdate: "1987-09-25",
    subscriptionPlan: "premium",
    active: false,
  },
  {
    id: 7,
    name: "Sofía",
    lastName: "Hernández",
    email: "sofia@outlook.com",
    birthdate: "1994-02-11",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 8,
    name: "David",
    lastName: "Díaz",
    email: "david@frvm.com",
    birthdate: "1983-06-30",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 9,
    name: "Lucía",
    lastName: "Sánchez",
    email: "lucia@gmail.com",
    birthdate: "1993-11-07",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 10,
    name: "Manuel",
    lastName: "Romero",
    email: "manuel@hotmail.com",
    birthdate: "1986-04-22",
    subscriptionPlan: "free",
    active: true,
  },
  {
    id: 11,
    name: "Marta",
    lastName: "Fernández",
    email: "marta@outlook.com",
    birthdate: "1991-08-14",
    subscriptionPlan: "basic",
    active: false,
  },
  {
    id: 12,
    name: "Javier",
    lastName: "Gutiérrez",
    email: "javier@frvm.com",
    birthdate: "1984-01-29",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 13,
    name: "Elena",
    lastName: "Pérez",
    email: "elena@gmail.com",
    birthdate: "1996-06-09",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 14,
    name: "Alejandro",
    lastName: "Torres",
    email: "alejandro@hotmail.com",
    birthdate: "1989-03-05",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 15,
    name: "Carmen",
    lastName: "Jiménez",
    email: "carmen@outlook.com",
    birthdate: "1997-09-02",
    subscriptionPlan: "premium",
    active: false,
  },
  {
    id: 16,
    name: "Daniel",
    lastName: "Ruiz",
    email: "daniel@frvm.com",
    birthdate: "1990-11-25",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 17,
    name: "Paula",
    lastName: "Molina",
    email: "paula@gmail.com",
    birthdate: "1987-04-17",
    subscriptionPlan: "premium",
    active: true,
  },
  {
    id: 18,
    name: "Adrián",
    lastName: "Ortega",
    email: "adrian@hotmail.com",
    birthdate: "1992-02-08",
    subscriptionPlan: "basic",
    active: true,
  },
  {
    id: 19,
    name: "Sara",
    lastName: "Navarro",
    email: "sara@outlook.com",
    birthdate: "1986-07-12",
    subscriptionPlan: "premium",
    active: false,
  },
  {
    id: 20,
    name: "Rubén",
    lastName: "Serrano",
    email: "ruben@gmail.com",
    birthdate: "1994-12-21",
    subscriptionPlan: "premium",
    active: true,
  },
];

const plans:Plan[] = [
  {
    code: "premium",
    price: 19.99,
    description: "Acceso completo a todas las funciones premium.",
  },
  {
    code: "basic",
    price: 9.99,
    description: "Funcionalidades esenciales para usuarios estándar.",
  },
  {
    code: "free",
    price: 0,
    description: "Plan gratuito con características básicas limitadas.",
  },
];

const dolarConversion:DolarConversion = {
  ARS: 1030,
  CLP: 970,
  COP: 3871,
  EUR: 0.92,
  USD: 1,
};

export const data: Data = {
  news,
  users,
  plans,
  dolarConversion,
};
