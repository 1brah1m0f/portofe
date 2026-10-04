// All visible text, per language. Keys match ids in data.js.

export const content = {
  en: {
    nav: {
      logo: 'Shikhi',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      awards: 'Awards',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      theme: 'Toggle color theme',
      menu: 'Open menu',
      close: 'Close menu',
      language: 'Language',
    },
    present: 'Present',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    location: 'Baku, Azerbaijan',
    hero: {
      status: 'Open to internships & collaborations',
      greeting: "Hi, I'm",
      name: 'Shikhi Ibrahimov',
      role: 'Software Engineer & Tech Community Builder',
      intro:
        "IT student in Baku building AI-powered products, competing in hackathons, and growing Azerbaijan's student tech community as AWS Student Builder Group Leader at Odlar Yurdu University.",
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      photoAlt: 'Shikhi Ibrahimov in Shanghai',
      photoCaption: 'Shanghai · PG Connects 2026',
    },
    stats: {
      awards: 'Hackathon podiums',
      products: 'Products built',
      repos: 'Open-source repos',
      summit: 'International summit',
    },
    about: {
      label: 'About',
      title: 'I turn ideas into digital products that make a real impact.',
      paragraphs: [
        "I'm studying Information Technology at Odlar Yurdu University while completing the Full Stack Web Development program at Holberton School. My focus is entrepreneurship and product development — taking an idea all the way to a working product.",
        "I'm active across Baku's startup ecosystem through tech trainings, hackathons and innovation programs. As AWS Student Builder Group Leader and coordinator at the OYU Incubation Center, I work to empower the next generation of Azerbaijani tech talent.",
      ],
      mottoLabel: 'My loop',
      motto: ['Build', 'Learn', 'Ship', 'Repeat'],
      facts: [
        { label: 'Based in', value: 'Baku, Azerbaijan' },
        { label: 'Focus', value: 'AI products · Full-stack · Cloud' },
        { label: 'Languages', value: 'Azerbaijani, Turkish, English (B2)' },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Where I’ve been building',
      items: {
        aws: {
          role: 'AWS Student Builder Group Leader',
          org: 'AWS Student Builder Group · Odlar Yurdu University',
          points: [
            'Lead a community of students at Odlar Yurdu University who are passionate about cloud computing.',
            'Organize workshops, tech talks and hands-on events where young people learn AWS services and cloud fundamentals.',
            'Help members gain practical, career-ready cloud skills.',
          ],
        },
        neurotime: {
          role: 'Software Engineer',
          org: 'Neurotime',
          points: [
            'Developed an LLM-based chatbot with semantic search — integrated embedding models for data vectorization and connected vector databases for accurate, context-aware answers.',
            'Designed and implemented automated test suites with Playwright and Python, covering end-to-end UI and API flows to keep the system reliable.',
          ],
        },
        oyu: {
          role: 'Event Organizer & Coordinator',
          org: 'OYU Startup & Incubation Center',
          points: [
            'Coordinate startup events, trainings and innovation programs at the university’s incubation center.',
            'Support student teams as a project manager on their way from idea to product.',
          ],
        },
      },
    },
    projects: {
      label: 'Projects',
      title: 'Things I’ve built',
      featured: 'Featured',
      active: 'In development',
      live: 'Live site',
      code: 'Code',
      video: 'Demo video',
      more: 'More on GitHub',
      items: {
        openly: {
          title: 'Openly',
          desc: 'Openly helps young people from Azerbaijan find and apply for opportunities abroad. Programs like Erasmus+, the European Solidarity Corps and UN Volunteers offer youth exchanges, training and volunteering — often with travel, accommodation and food covered. The hard part is finding them in time: Openly brings them together in one place, reminds you before deadlines close and tracks what you’ve saved and applied to. Browse for free, no account needed.',
          highlights: [
            'All opportunities in one place, with deadline reminders',
            'Openly Student: scholarships, universities & a step-by-step roadmap',
            'Compare universities side by side by level and budget',
            'AI assistant for motivation letters, CV & essay review',
          ],
        },
        kiberedu: {
          title: 'KiberEdu.az',
          desc: 'An interactive cybersecurity education platform that helps school students learn security in a simple, engaging and practical way. Teachers create virtual classes, assign challenges and track progress; students build real skills through hands-on tasks.',
          highlights: [
            '7 rooms across Red Team, Blue Team & GRC',
            'Points, daily streaks & leaderboards',
            'Separate student, teacher & admin roles',
          ],
        },
        farmorfx: {
          title: 'FarMorfX',
          desc: 'Azerbaijan’s agritourism platform — “Rediscover the village”. Travelers discover and book farms, gardens and rural stays on a map, meet local farmers and earn coins they can exchange for partner discounts, while farm owners list and manage their places.',
          highlights: ['Map-based discovery & booking with QR check-in', 'Reviews, ratings & owner dashboard', 'AI recommendations & chatbot'],
        },
        nextevent: {
          title: 'NextEvent',
          desc: 'An event management platform to create, discover and join events. Users manage their own events, join public ones and explore upcoming activities by interest — with an interactive map to see what’s happening nearby.',
          highlights: ['Create & manage your own events', 'Interest-based discovery', 'Interactive map of nearby events'],
        },
        asc: {
          title: 'Azerbaijan Startup Community',
          desc: 'A bilingual platform that connects startups and mentors in Azerbaijan’s ecosystem. Startups and mentors register, find each other by sector, stage and needs, and partner organizations get a showcase.',
          highlights: ['Startup & mentor directories with filters', 'Full Azerbaijani / English support', 'Registration flows on Supabase'],
        },
      },
    },
    awards: {
      label: 'Awards',
      title: 'Hackathons & recognition',
      places: { 2: '2nd place', 3: '3rd place', nom: 'Second Prize nomination' },
      news: 'In the news',
      items: {
        gamejam: { title: 'OYU Game Jam', org: 'Xsolla & Odlar Yurdu University' },
        farm2tour: { title: 'Farm2Tour Hackathon', org: 'Agrarian Development Volunteers' },
        rccode: { title: 'RC Code Programming Contest', org: 'RobotChallenge Azerbaijan' },
        azcon: { title: 'AZCON Future Tech: Transport, Telecom & AI Challenge', org: 'Holberton School & AZCON' },
        gencvizyon: { title: 'GəncVizyon 2026', org: 'Azerbaijan Youth Foundation' },
        ai4cyber: { title: 'Ai4Cyber Hackathon', org: 'Holberton School' },
      },
      spotlight: {
        kicker: 'Conference · Jul 2026',
        title: 'PG Connects Shanghai 2026',
        text: 'After the Xsolla Game Jam, I was invited to Shanghai for the Pocket Gamer Connects Summit 2026. I presented my own project, met dozens of developers, investors and publishers, and built meaningful relationships with people from every corner of the gaming industry.',
        place: 'Shanghai, China',
      },
    },
    education: {
      label: 'Education',
      title: 'Learning, always',
      items: {
        oyu: {
          title: 'Bachelor of Information Technology',
          org: 'Odlar Yurdu University',
          note: 'Software and applications development and analysis · EQF level 6',
        },
        holberton: {
          title: 'Full Stack Web Development',
          org: 'Holberton School Azerbaijan',
          note: 'Certification program',
        },
        hit: {
          title: 'Entrepreneurship, Satellite Technology & AI',
          org: 'Holon Institute of Technology',
          note: 'Through the Vistar program',
        },
      },
    },
    skills: {
      label: 'Skills',
      title: 'My toolkit',
      groups: {
        frontend: 'Languages & Frontend',
        backend: 'Backend & Data',
        ai: 'AI & Testing',
        cloud: 'Cloud & Tools',
        soft: 'Beyond code',
      },
      soft: ['Event management', 'Team communication', 'Problem solving', 'Project management', 'Hackathons', 'Algorithms'],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Azerbaijani', level: 'Native', value: 100 },
        { name: 'Turkish', level: 'Native', value: 100 },
        { name: 'English', level: 'B2 · Upper-intermediate', value: 70 },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Let’s build something together',
      text: 'Have a project, an internship, a hackathon team — or just want to connect? My inbox is open.',
      email: 'Send an email',
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: {
      built: 'Built with React & Tailwind CSS',
      top: 'Back to top',
    },
  },

  az: {
    nav: {
      logo: 'Şıxı',
      about: 'Haqqımda',
      experience: 'Təcrübə',
      projects: 'Layihələr',
      awards: 'Mükafatlar',
      education: 'Təhsil',
      skills: 'Bacarıqlar',
      contact: 'Əlaqə',
      theme: 'Rəng rejimini dəyiş',
      menu: 'Menyunu aç',
      close: 'Menyunu bağla',
      language: 'Dil',
    },
    present: 'İndi',
    months: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyn', 'İyl', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'],
    location: 'Bakı, Azərbaycan',
    hero: {
      status: 'Təcrübə proqramlarına və əməkdaşlığa açığam',
      greeting: 'Salam, mən',
      name: 'Şıxı İbrahimov',
      role: 'Proqram mühəndisi və texnologiya icması qurucusu',
      intro:
        'Bakıda yaşayan İT tələbəsiyəm. Süni intellekt əsaslı məhsullar qurur, hakatonlarda yarışır və Odlar Yurdu Universitetində AWS Student Builder Group lideri kimi tələbə texnologiya icmasını böyüdürəm.',
      ctaProjects: 'Layihələrə bax',
      ctaContact: 'Əlaqə saxla',
      ctaCv: 'CV-ni yüklə',
      photoAlt: 'Şıxı İbrahimov Şanxayda',
      photoCaption: 'Şanxay · PG Connects 2026',
    },
    stats: {
      awards: 'Hakatonda mükafat',
      products: 'Qurduğum məhsul',
      repos: 'Açıq repozitoriya',
      summit: 'Beynəlxalq sammit',
    },
    about: {
      label: 'Haqqımda',
      title: 'İdeyaları real təsiri olan rəqəmsal məhsullara çevirirəm.',
      paragraphs: [
        'Odlar Yurdu Universitetində İnformasiya Texnologiyaları üzrə təhsil alıram, eyni zamanda Holberton School-da Full Stack Web Development proqramını keçirəm. Əsas marağım sahibkarlıq və məhsul inkişafıdır — ideyadan başlayıb işləyən məhsula qədər.',
        'Bakının startap ekosistemində texniki təlimlərə, hakatonlara və innovasiya proqramlarına fəal qoşuluram. AWS Student Builder Group lideri və OYU İnkubasiya Mərkəzində koordinator kimi yeni nəsil Azərbaycan texnologiya istedadlarını gücləndirməyə çalışıram.',
      ],
      mottoLabel: 'Prinsipim',
      motto: ['Qur', 'Öyrən', 'Yayımla', 'Təkrarla'],
      facts: [
        { label: 'Yaşadığım yer', value: 'Bakı, Azərbaycan' },
        { label: 'Fokus', value: 'Sİ məhsulları · Full-stack · Bulud' },
        { label: 'Dillər', value: 'Azərbaycan, türk, ingilis (B2)' },
      ],
    },
    experience: {
      label: 'Təcrübə',
      title: 'Harada nə qurmuşam',
      items: {
        aws: {
          role: 'AWS Student Builder Group lideri',
          org: 'AWS Student Builder Group · Odlar Yurdu Universiteti',
          points: [
            'Odlar Yurdu Universitetində bulud texnologiyalarına maraq göstərən tələbələrdən ibarət icmaya rəhbərlik edirəm.',
            'Gənclərin AWS xidmətlərini və bulud texnologiyalarının əsaslarını öyrəndiyi seminarlar, texniki çıxışlar və praktiki tədbirlər təşkil edirəm.',
            'Üzvlərin karyera üçün hazır, praktiki bulud bacarıqları qazanmasına kömək edirəm.',
          ],
        },
        neurotime: {
          role: 'Proqram mühəndisi',
          org: 'Neurotime',
          points: [
            'Semantik axtarış imkanlı LLM əsaslı çatbot sistemi hazırladım — məlumatların vektorlaşdırılması üçün embedding modellərini inteqrasiya etdim və dəqiq, kontekstə uyğun cavablar üçün vektor verilənlər bazalarını qoşdum.',
            'Playwright və Python ilə UI və API axınlarını uçdan-uca yoxlayan avtomatlaşdırılmış test dəstləri hazırlayıb tətbiq etdim.',
          ],
        },
        oyu: {
          role: 'Tədbir təşkilatçısı və koordinator',
          org: 'OYU Startap və İnkubasiya Mərkəzi',
          points: [
            'Universitetin inkubasiya mərkəzində startap tədbirlərini, təlimləri və innovasiya proqramlarını koordinasiya edirəm.',
            'Layihə meneceri kimi tələbə komandalarını ideyadan məhsula qədər dəstəkləyirəm.',
          ],
        },
      },
    },
    projects: {
      label: 'Layihələr',
      title: 'Qurduğum məhsullar',
      featured: 'Seçilmiş',
      active: 'İnkişafdadır',
      live: 'Sayta bax',
      code: 'Kod',
      video: 'Demo video',
      more: 'GitHub-da daha çox',
      items: {
        openly: {
          title: 'Openly',
          desc: 'Openly Azərbaycan gənclərinə xaricdəki imkanları tapmağa və onlara müraciət etməyə kömək edir. Erasmus+, Avropa Həmrəylik Korpusu və BMT Könüllüləri kimi proqramlar gənclər mübadiləsi, təlim və könüllülük imkanları təklif edir — çox vaxt yol, yaşayış və qida xərcləri qarşılanır. Çətin olan onları vaxtında tapmaqdır: Openly bu imkanları bir yerə toplayır, son tarixlərdən əvvəl xatırladır və saxladığın, müraciət etdiyin proqramları izləyir. Hesab açmadan pulsuz baxa bilərsən.',
          highlights: [
            'Bütün imkanlar bir yerdə, son tarix xatırlatmaları ilə',
            'Openly Student: təqaüdlər, universitetlər və addım-addım yol xəritəsi',
            'Universitetləri səviyyə və büdcəyə görə yan-yana müqayisə',
            'Motivasiya məktubu, CV və esse üçün Sİ köməkçisi',
          ],
        },
        kiberedu: {
          title: 'KiberEdu.az',
          desc: 'Məktəblilərə kibertəhlükəsizliyi sadə, maraqlı və praktiki şəkildə öyrədən interaktiv təhsil platforması. Müəllimlər virtual siniflər yaradır, tapşırıqlar verir və irəliləyişi izləyir; şagirdlər isə praktiki tapşırıqlarla real bacarıqlar qazanır.',
          highlights: [
            'Red Team, Blue Team və GRC üzrə 7 otaq',
            'Xallar, gündəlik seriyalar və reytinq cədvəlləri',
            'Ayrı şagird, müəllim və admin rolları',
          ],
        },
        farmorfx: {
          title: 'FarMorfX',
          desc: 'Azərbaycanın aqroturizm platforması — “Kəndi yenidən kəşf et”. Səyahətçilər xəritədə fermaları, bağları və kənd evlərini tapıb rezerv edir, yerli fermerlərlə tanış olur və alışlardan qazandıqları coin-ləri tərəfdaş endirimlərinə dəyişir; ferma sahibləri isə öz məkanlarını əlavə edib idarə edir.',
          highlights: ['Xəritə üzərində kəşf və QR ilə təsdiqlənən rezervasiya', 'Rəylər, reytinqlər və sahibkar paneli', 'Sİ tövsiyələri və çatbot'],
        },
        nextevent: {
          title: 'NextEvent',
          desc: 'Tədbirləri yaratmaq, kəşf etmək və onlara qoşulmaq üçün platforma. İstifadəçilər öz tədbirlərini idarə edir, açıq tədbirlərə qoşulur və maraqlarına uyğun yaxınlaşan fəaliyyətləri tapır — interaktiv xəritə ilə yaxınlıqdakı tədbirləri görmək asandır.',
          highlights: ['Öz tədbirlərini yarat və idarə et', 'Maraqlara əsaslanan kəşf', 'Yaxınlıqdakı tədbirlərin interaktiv xəritəsi'],
        },
        asc: {
          title: 'Azerbaijan Startup Community',
          desc: 'Azərbaycan ekosistemində startapları və mentorları birləşdirən ikidilli platforma. Startaplar və mentorlar qeydiyyatdan keçir, sahə, mərhələ və ehtiyaclara görə bir-birini tapır, tərəfdaş təşkilatlar isə nümayiş olunur.',
          highlights: ['Filtrli startap və mentor kataloqları', 'Tam Azərbaycan / ingilis dili dəstəyi', 'Supabase ilə qeydiyyat axınları'],
        },
      },
    },
    awards: {
      label: 'Mükafatlar',
      title: 'Hakatonlar və nailiyyətlər',
      places: { 2: '2-ci yer', 3: '3-cü yer', nom: '“İkinci mükafat” nominasiyası' },
      news: 'Xəbərlərdə',
      items: {
        gamejam: { title: 'OYU Game Jam', org: 'Xsolla və Odlar Yurdu Universiteti' },
        farm2tour: { title: '“Farm2Tour” hakatonu', org: 'Aqrar İnkişaf Könüllüləri' },
        rccode: { title: '“RC Code” proqramlaşdırma yarışması', org: 'RobotChallenge Azerbaijan' },
        azcon: { title: 'AZCON Future Tech: Nəqliyyat, Telekom və Sİ çağırışı', org: 'Holberton School və AZCON' },
        gencvizyon: { title: 'GəncVizyon 2026', org: 'Azərbaycan Gənclər Fondu' },
        ai4cyber: { title: 'Ai4Cyber hakatonu', org: 'Holberton School' },
      },
      spotlight: {
        kicker: 'Konfrans · İyl 2026',
        title: 'PG Connects Şanxay 2026',
        text: 'Xsolla Game Jam-dən sonra Şanxaya, Pocket Gamer Connects Summit 2026-ya dəvət aldım. Öz layihəmi təqdim etdim, onlarla tərtibatçı, investor və naşirlə tanış oldum, dünyanın hər yerindən oyun sənayesində çalışan insanlarla dəyərli əlaqələr qurdum.',
        place: 'Şanxay, Çin',
      },
    },
    education: {
      label: 'Təhsil',
      title: 'Daim öyrənirəm',
      items: {
        oyu: {
          title: 'İnformasiya Texnologiyaları üzrə bakalavr',
          org: 'Odlar Yurdu Universiteti',
          note: 'Proqram təminatı və tətbiqlərin hazırlanması və təhlili · EQF 6-cı səviyyə',
        },
        holberton: {
          title: 'Full Stack Web Development',
          org: 'Holberton School Azərbaycan',
          note: 'Sertifikat proqramı',
        },
        hit: {
          title: 'Sahibkarlıq, peyk texnologiyaları və süni intellekt',
          org: 'Holon Texnologiya İnstitutu',
          note: 'Vistar proqramı çərçivəsində',
        },
      },
    },
    skills: {
      label: 'Bacarıqlar',
      title: 'Alətlərim',
      groups: {
        frontend: 'Dillər və Frontend',
        backend: 'Backend və verilənlər',
        ai: 'Sİ və test',
        cloud: 'Bulud və alətlər',
        soft: 'Koddan kənar',
      },
      soft: ['Tədbir idarəetməsi', 'Komanda daxili ünsiyyət', 'Problem həlli', 'Layihə idarəetməsi', 'Hakatonlar', 'Alqoritmlər'],
      languagesTitle: 'Dillər',
      languages: [
        { name: 'Azərbaycan dili', level: 'Ana dili', value: 100 },
        { name: 'Türk dili', level: 'Ana dili', value: 100 },
        { name: 'İngilis dili', level: 'B2 · Orta-yuxarı', value: 70 },
      ],
    },
    contact: {
      label: 'Əlaqə',
      title: 'Gəlin birlikdə nəsə quraq',
      text: 'Layihə, təcrübə proqramı, hakaton komandası və ya sadəcə tanışlıq üçün — yazmaqdan çəkinməyin.',
      email: 'E-poçt göndər',
      copy: 'E-poçtu kopyala',
      copied: 'Kopyalandı!',
    },
    footer: {
      built: 'React və Tailwind CSS ilə hazırlanıb',
      top: 'Yuxarı qayıt',
    },
  },
}
