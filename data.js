const ENERGY_DATA = {
  project: {
    title: "Papa, j’ai découvert le feu",
    subtitle:
      "Un voyage dans l’histoire de l’énergie, des humains et de leurs choix",
    target_age: "8-14 ans",
    tone: "curieux, pédagogique, narratif, nuancé",
    main_goal:
      "Aider les enfants à comprendre comment l’énergie a transformé le monde et pourquoi chaque technologie implique des choix.",
  },
  chapters: [
    {
      id: "intro",
      order: 0,
      title: "Papa, pourquoi les humains ont besoin d’énergie ?",
      period: "Toutes les époques",
      theme: "Comprendre l’énergie",
      icon: "✨",
      story:
        "Un enfant demande pourquoi la lumière s’allume quand on appuie sur un bouton. Son père lui explique que cette question commence très loin dans le passé, avec la découverte du feu.",
      simple_explanation:
        "L’énergie permet de transformer le monde : chauffer, éclairer, bouger, fabriquer, communiquer, soigner et apprendre.",
      benefits: [
        "Elle rend la vie plus confortable",
        "Elle permet de se déplacer",
        "Elle aide à produire de la nourriture",
        "Elle permet de communiquer",
        "Elle aide à soigner et apprendre",
      ],
      dilemmas: [
        "Certaines énergies polluent",
        "Certaines ressources s’épuisent",
        "Certaines technologies créent des dépendances",
        "Certaines solutions sont utiles mais risquées",
      ],
      child_question:
        "Papa, pourquoi on a besoin d’énergie pour presque tout ?",
      father_answer:
        "Parce que chaque action demande une force ou une transformation, même quand on ne la voit pas.",
      activity: {
        type: "classification",
        title: "Où se cache l’énergie ?",
        description:
          "Retrouve les objets du quotidien qui utilisent de l’énergie.",
        items: [
          "lampe",
          "voiture",
          "four",
          "ordinateur",
          "vélo",
          "frigo",
          "livre",
          "téléphone",
        ],
      },
      key_sentence: "L’énergie est partout, même quand elle est invisible.",
      energy_scores: {
        power: 0,
        pollution: 0,
        availability: 0,
        danger: 0,
        ease: 0,
        storage: 0,
        complexity: 0,
        renewable: null,
      },
    },
    {
      id: "feu",
      order: 1,
      title: "J’ai découvert le feu",
      period: "Préhistoire",
      theme: "Première énergie maîtrisée",
      icon: "🔥",
      story:
        "Un groupe d’humains découvre qu’une flamme peut réchauffer, éclairer et protéger. Pour la première fois, ils ne subissent plus seulement la nature : ils commencent à la transformer.",
      simple_explanation:
        "Le feu produit de la chaleur et de la lumière. Les humains ont appris à l’utiliser pour survivre.",
      benefits: [
        "Se chauffer",
        "Cuire les aliments",
        "Éloigner les animaux dangereux",
        "Éclairer la nuit",
        "Rassembler le groupe autour d’un foyer",
      ],
      dilemmas: [
        "Le feu peut brûler",
        "Il peut détruire une forêt",
        "Il demande de la prudence",
        "Il peut devenir incontrôlable",
      ],
      child_question:
        "Si le feu est dangereux, pourquoi les humains l’ont gardé ?",
      father_answer:
        "Parce qu’un outil dangereux peut devenir très utile quand on apprend à le maîtriser.",
      activity: {
        type: "two_columns",
        title: "Le feu aide ou le feu détruit ?",
        description: "Classe chaque situation du bon côté.",
        columns: ["Le feu aide", "Le feu peut faire du mal"],
        items: [
          "Cuire une soupe",
          "Chauffer une grotte",
          "Brûler une forêt",
          "Allumer une bougie",
          "Incendier une maison",
          "Éloigner un animal sauvage",
        ],
      },
      key_sentence:
        "Le feu est la première grande énergie que l’humain a appris à apprivoiser.",
      energy_scores: {
        power: 2,
        pollution: 2,
        availability: 4,
        danger: 4,
        ease: 4,
        storage: 1,
        complexity: 1,
        renewable: true,
      },
    },
    {
      id: "bois",
      order: 2,
      title: "Le bois : l’énergie des premiers foyers",
      period: "Préhistoire, Antiquité, Moyen Âge",
      theme: "Ressource naturelle",
      icon: "🪵",
      story:
        "Les humains comprennent qu’ils peuvent utiliser les arbres pour faire du feu, construire et fabriquer des outils.",
      simple_explanation:
        "Le bois peut être brûlé pour produire de la chaleur. Il peut aussi servir à construire.",
      benefits: [
        "Disponible dans beaucoup d’endroits",
        "Facile à utiliser",
        "Permet de chauffer les maisons",
        "Permet de cuire les aliments",
        "Sert aussi comme matériau",
      ],
      dilemmas: [
        "Couper trop d’arbres détruit les forêts",
        "Les forêts mettent du temps à repousser",
        "La fumée peut être mauvaise pour la santé",
        "Tout le monde n’a pas la même quantité de bois",
      ],
      child_question: "Est-ce qu’on peut utiliser la nature sans l’abîmer ?",
      father_answer:
        "Oui, si on utilise seulement ce dont on a besoin et si on laisse le temps à la nature de se renouveler.",
      activity: {
        type: "resource_management",
        title: "Fais vivre ta forêt",
        description: "Chauffe un village sans couper tous les arbres.",
        rules: [
          "Couper du bois donne de l’énergie",
          "Planter des arbres permet d’en avoir plus tard",
          "Couper trop vite fait disparaître la forêt",
        ],
      },
      key_sentence:
        "Utiliser une ressource, ce n’est pas la même chose que l’épuiser.",
      energy_scores: {
        power: 2,
        pollution: 3,
        availability: 4,
        danger: 2,
        ease: 5,
        storage: 3,
        complexity: 1,
        renewable: true,
      },
    },
    {
      id: "vent_eau",
      order: 3,
      title: "Le vent pousse, l’eau entraîne",
      period: "Antiquité et Moyen Âge",
      theme: "Forces naturelles",
      icon: "🌊",
      story:
        "Les humains découvrent que le vent peut pousser les voiles et que l’eau peut faire tourner des roues.",
      simple_explanation:
        "Le vent et l’eau peuvent transmettre un mouvement sans qu’on ait besoin de brûler quelque chose.",
      benefits: [
        "Faire avancer les bateaux",
        "Faire tourner les moulins",
        "Moudre le grain",
        "Pomper de l’eau",
        "Économiser la force humaine",
      ],
      dilemmas: [
        "Le vent ne souffle pas toujours",
        "Les rivières ne sont pas partout",
        "Les barrages peuvent modifier les paysages",
        "La production dépend de la météo",
      ],
      child_question: "Pourquoi ne pas toujours utiliser le vent et l’eau ?",
      father_answer:
        "Parce que ces forces sont utiles, mais elles ne sont pas toujours disponibles au bon moment ou au bon endroit.",
      activity: {
        type: "weather_simulation",
        title: "Fais tourner le moulin",
        description:
          "Selon la météo, le moulin produit plus ou moins d’énergie.",
        events: [
          "Grand vent",
          "Petit vent",
          "Pas de vent",
          "Rivière forte",
          "Rivière basse",
        ],
      },
      key_sentence:
        "Certaines énergies sont propres, mais elles ne se commandent pas toujours.",
      energy_scores: {
        power: 3,
        pollution: 1,
        availability: 3,
        danger: 2,
        ease: 3,
        storage: 1,
        complexity: 2,
        renewable: true,
      },
    },
    {
      id: "charbon",
      order: 4,
      title: "Le charbon : la force noire des machines",
      period: "Révolution industrielle",
      theme: "Industrialisation",
      icon: "⚙️",
      story:
        "Les machines arrivent dans les usines. Les trains relient les villes. Le charbon donne une puissance énorme au monde humain.",
      simple_explanation:
        "Le charbon est une roche que l’on brûle pour produire beaucoup de chaleur et faire fonctionner des machines.",
      benefits: [
        "Faire fonctionner les usines",
        "Faire avancer les trains",
        "Produire plus vite",
        "Transporter plus loin",
        "Développer les villes",
      ],
      dilemmas: [
        "Pollution de l’air",
        "Travail dangereux dans les mines",
        "Fumées dans les villes",
        "Maladies respiratoires",
        "Émissions de CO2",
      ],
      child_question:
        "Si le charbon polluait, pourquoi les humains l’ont utilisé autant ?",
      father_answer:
        "Parce qu’il donnait beaucoup de puissance très vite, à une époque où les conséquences étaient mal comprises ou ignorées.",
      activity: {
        type: "before_after",
        title: "Le village devient une ville industrielle",
        description: "Compare le monde avant et après l’arrivée du charbon.",
        clickable_elements: [
          "Usine",
          "Train",
          "Mine",
          "Ciel gris",
          "Ouvriers",
          "Machines",
        ],
      },
      key_sentence:
        "Le charbon a accéléré le monde, mais il a aussi sali l’air.",
      energy_scores: {
        power: 5,
        pollution: 5,
        availability: 4,
        danger: 4,
        ease: 3,
        storage: 4,
        complexity: 3,
        renewable: false,
      },
    },
    {
      id: "petrole",
      order: 5,
      title: "Le pétrole : l’énergie qui fait bouger le monde",
      period: "XIXe, XXe et XXIe siècle",
      theme: "Mobilité et consommation",
      icon: "🛢️",
      story:
        "Les voitures, les avions, les camions et les objets en plastique se multiplient. Le pétrole devient l’énergie du mouvement rapide.",
      simple_explanation:
        "Le pétrole est une énergie fossile liquide. Il est très pratique pour transporter beaucoup d’énergie.",
      benefits: [
        "Faire rouler les voitures",
        "Faire voler les avions",
        "Transporter les marchandises",
        "Fabriquer du plastique",
        "Développer l’agriculture moderne",
      ],
      dilemmas: [
        "Pollution",
        "Marées noires",
        "Changement climatique",
        "Dépendance économique",
        "Déchets plastiques",
      ],
      child_question: "Pourquoi le pétrole est partout ?",
      father_answer:
        "Parce qu’il est très puissant, facile à transporter et utilisé dans énormément d’objets.",
      activity: {
        type: "hidden_objects",
        title: "Trouve le pétrole caché dans la maison",
        description: "Clique sur les objets liés au pétrole.",
        items: [
          "Bouteille plastique",
          "Jouet",
          "Vêtement synthétique",
          "Voiture",
          "Emballage",
          "Peinture",
          "Ordinateur",
        ],
      },
      key_sentence:
        "Le pétrole a rendu le monde plus rapide, mais aussi plus dépendant.",
      energy_scores: {
        power: 5,
        pollution: 5,
        availability: 4,
        danger: 4,
        ease: 5,
        storage: 5,
        complexity: 3,
        renewable: false,
      },
    },
    {
      id: "electricite",
      order: 6,
      title: "L’électricité : l’énergie invisible",
      period: "XIXe siècle à aujourd’hui",
      theme: "Transport de l’énergie",
      icon: "💡",
      story:
        "L’enfant appuie sur un interrupteur. La lumière apparaît. Pourtant, aucune flamme n’est visible dans la pièce.",
      simple_explanation:
        "L’électricité transporte l’énergie jusqu’aux objets. Elle peut venir de plusieurs sources différentes.",
      benefits: [
        "Éclairer",
        "Faire fonctionner les appareils",
        "Conserver les aliments",
        "Communiquer",
        "Soigner",
        "Utiliser internet",
      ],
      dilemmas: [
        "Elle doit être produite quelque part",
        "Sa production peut polluer",
        "Le réseau doit être stable",
        "Elle est difficile à stocker en grande quantité",
      ],
      child_question: "Est-ce que l’électricité est toujours propre ?",
      father_answer:
        "Pas forcément. Elle est propre là où on l’utilise, mais tout dépend de la manière dont elle a été produite.",
      activity: {
        type: "energy_source_selector",
        title: "D’où vient mon ampoule ?",
        description: "Branche une ampoule sur différentes sources d’énergie.",
        sources: [
          "Charbon",
          "Gaz",
          "Nucléaire",
          "Solaire",
          "Éolien",
          "Barrage",
        ],
        metrics: [
          "Pollution",
          "Régularité",
          "Puissance",
          "Coût",
          "Impact paysage",
        ],
      },
      key_sentence:
        "L’électricité est invisible, mais son origine compte beaucoup.",
      energy_scores: {
        power: 5,
        pollution: 2,
        availability: 5,
        danger: 3,
        ease: 5,
        storage: 2,
        complexity: 4,
        renewable: null,
      },
    },
    {
      id: "nucleaire",
      order: 7,
      title:
        "Le nucléaire : une énorme énergie dans un tout petit morceau de matière",
      period: "XXe siècle à aujourd’hui",
      theme: "Puissance et responsabilité",
      icon: "☢️",
      story:
        "Les humains découvrent qu’une quantité minuscule de matière peut produire énormément d’énergie.",
      simple_explanation:
        "Le nucléaire utilise l’énergie contenue dans les atomes pour produire de la chaleur, puis de l’électricité.",
      benefits: [
        "Produit beaucoup d’électricité",
        "Fonctionne jour et nuit",
        "Émet peu de CO2 pendant la production",
        "Occupe relativement peu d’espace",
        "Peut alimenter de grandes villes",
      ],
      dilemmas: [
        "Déchets radioactifs",
        "Risque d’accident",
        "Technologie complexe",
        "Besoin de sécurité très élevée",
        "Débat social et politique",
      ],
      child_question:
        "Pourquoi certaines personnes aiment le nucléaire et d’autres en ont peur ?",
      father_answer:
        "Parce que c’est une énergie très utile et très puissante, mais qui demande beaucoup de prudence.",
      activity: {
        type: "decision_balance",
        title: "La balance du nucléaire",
        description: "Place les avantages et les risques dans une balance.",
        cards: [
          "Beaucoup d’électricité",
          "Peu de CO2",
          "Déchets dangereux",
          "Fonctionne tout le temps",
          "Risque d’accident",
          "Sécurité nécessaire",
        ],
      },
      key_sentence:
        "Plus une énergie est puissante, plus elle demande de responsabilité.",
      energy_scores: {
        power: 5,
        pollution: 1,
        availability: 5,
        danger: 4,
        ease: 2,
        storage: 2,
        complexity: 5,
        renewable: false,
      },
    },
    {
      id: "renouvelables",
      order: 8,
      title: "Le soleil, le vent et l’eau reviennent toujours",
      period: "Aujourd’hui et futur",
      theme: "Énergies renouvelables",
      icon: "🌞",
      story:
        "Les humains cherchent à produire de l’énergie sans vider la planète de ses ressources fossiles.",
      simple_explanation:
        "Les énergies renouvelables utilisent des phénomènes naturels qui reviennent : soleil, vent, eau, chaleur de la Terre.",
      benefits: [
        "Moins d’émissions de CO2 pendant la production",
        "Sources naturelles",
        "Production possible localement",
        "Utile pour réduire la pollution",
        "Compatible avec des maisons autonomes",
      ],
      dilemmas: [
        "Production variable",
        "Besoin de stockage",
        "Besoin de matériaux",
        "Impact sur les paysages",
        "Recyclage des équipements",
      ],
      child_question:
        "Pourquoi on ne met pas juste des panneaux solaires partout ?",
      father_answer:
        "Parce que le soleil ne brille pas tout le temps et qu’il faut stocker ou compléter l’énergie.",
      activity: {
        type: "city_builder",
        title: "Garde ta ville allumée",
        description:
          "Combine solaire, vent, barrage et batteries pour alimenter une ville.",
        resources: [
          "Panneaux solaires",
          "Éoliennes",
          "Barrage",
          "Batteries",
          "Réseau",
        ],
      },
      key_sentence:
        "Les renouvelables sont précieuses, mais elles doivent être bien organisées.",
      energy_scores: {
        power: 3,
        pollution: 1,
        availability: 3,
        danger: 1,
        ease: 3,
        storage: 2,
        complexity: 3,
        renewable: true,
      },
    },
    {
      id: "batteries",
      order: 9,
      title: "Garder l’énergie pour plus tard",
      period: "Aujourd’hui",
      theme: "Stockage",
      icon: "🔋",
      story:
        "L’enfant remarque que son téléphone fonctionne même quand il n’est pas branché. Il découvre le rôle des batteries.",
      simple_explanation:
        "Une batterie garde de l’énergie pour l’utiliser plus tard.",
      benefits: [
        "Utiliser un téléphone sans câble",
        "Rouler en voiture électrique",
        "Stocker l’énergie solaire",
        "Avoir une lampe rechargeable",
        "Rendre les objets portables",
      ],
      dilemmas: [
        "Métaux nécessaires",
        "Recyclage",
        "Durée de vie limitée",
        "Coût",
        "Poids",
      ],
      child_question: "Pourquoi une batterie ne dure pas pour toujours ?",
      father_answer:
        "Parce qu’elle fonctionne avec des réactions chimiques qui s’usent peu à peu.",
      activity: {
        type: "battery_management",
        title: "Économise ta batterie",
        description:
          "Utilise une batterie pour alimenter une maison du soir au matin.",
        actions: [
          "Allumer la lumière",
          "Regarder une vidéo",
          "Charger un téléphone",
          "Éteindre les appareils inutiles",
          "Attendre le soleil",
        ],
      },
      key_sentence: "Stocker l’énergie est aussi important que la produire.",
      energy_scores: {
        power: 3,
        pollution: 2,
        availability: 3,
        danger: 2,
        ease: 4,
        storage: 5,
        complexity: 4,
        renewable: null,
      },
    },
    {
      id: "internet",
      order: 10,
      title: "Quand l’énergie fait circuler les idées",
      period: "Fin XXe siècle à aujourd’hui",
      theme: "Numérique",
      icon: "🌐",
      story:
        "L’enfant envoie une photo à un ami. Il croit qu’elle voyage directement, mais découvre qu’elle passe par tout un réseau de machines.",
      simple_explanation:
        "Internet permet aux informations de circuler grâce à des câbles, antennes, serveurs et appareils qui consomment de l’énergie.",
      benefits: [
        "Communiquer",
        "Apprendre",
        "Partager",
        "Travailler à distance",
        "Créer",
        "Se divertir",
      ],
      dilemmas: [
        "Consommation énergétique",
        "Fausses informations",
        "Dépendance aux écrans",
        "Protection des données",
        "Attention captée",
      ],
      child_question:
        "Est-ce qu’envoyer une vidéo consomme vraiment de l’énergie ?",
      father_answer:
        "Oui, parce que des machines travaillent pour stocker, envoyer et afficher cette vidéo.",
      activity: {
        type: "data_path",
        title: "Le voyage d’une photo",
        description:
          "Suis le trajet d’une photo depuis un téléphone jusqu’à un autre.",
        steps: [
          "Téléphone",
          "Antenne",
          "Serveur",
          "Câble",
          "Box internet",
          "Autre téléphone",
        ],
      },
      key_sentence:
        "Même les choses invisibles du numérique ont besoin d’énergie.",
      energy_scores: {
        power: 4,
        pollution: 2,
        availability: 5,
        danger: 2,
        ease: 5,
        storage: 4,
        complexity: 5,
        renewable: null,
      },
    },
    {
      id: "ia",
      order: 11,
      title: "Quand les machines apprennent",
      period: "Aujourd’hui",
      theme: "Intelligence artificielle",
      icon: "🤖",
      story:
        "L’enfant demande à une IA de lui raconter une histoire. Elle répond très vite. Mais comment a-t-elle appris ?",
      simple_explanation:
        "L’intelligence artificielle apprend à partir de nombreux exemples pour produire des réponses, reconnaître des images ou aider à résoudre des problèmes.",
      benefits: [
        "Aider à apprendre",
        "Traduire",
        "Créer des images",
        "Écrire",
        "Analyser des informations",
        "Aider la médecine",
        "Gagner du temps",
      ],
      dilemmas: [
        "Erreurs possibles",
        "Biais",
        "Consommation énergétique",
        "Données personnelles",
        "Dépendance",
        "Perte d’esprit critique",
      ],
      child_question: "Est-ce que l’IA pense comme un humain ?",
      father_answer:
        "Non. Elle imite certains raisonnements grâce à des exemples, mais elle ne ressent pas les choses comme un humain.",
      activity: {
        type: "critical_thinking",
        title: "Humain, IA ou erreur ?",
        description:
          "Compare plusieurs réponses et repère ce qui est utile, faux ou à vérifier.",
        skills: [
          "Vérifier",
          "Comparer",
          "Questionner",
          "Repérer une erreur",
          "Garder son jugement",
        ],
      },
      key_sentence:
        "L’IA est un outil puissant, mais elle ne remplace pas le jugement humain.",
      energy_scores: {
        power: 4,
        pollution: 3,
        availability: 4,
        danger: 3,
        ease: 5,
        storage: 4,
        complexity: 5,
        renewable: null,
      },
    },
    {
      id: "choisir",
      order: 12,
      title: "Alors, quelle énergie choisir ?",
      period: "Aujourd’hui et demain",
      theme: "Choix et responsabilité",
      icon: "🧭",
      story:
        "Après avoir traversé toute l’histoire de l’énergie, l’enfant comprend qu’aucune solution n’est magique. Il faut apprendre à choisir selon les besoins, les risques et les conséquences.",
      simple_explanation:
        "Chaque énergie a des avantages et des inconvénients. Le bon choix dépend du contexte.",
      benefits: [
        "Comprendre les compromis",
        "Faire des choix éclairés",
        "Éviter les réponses simplistes",
        "Développer son esprit critique",
        "Imaginer des solutions équilibrées",
      ],
      dilemmas: [
        "Confort contre sobriété",
        "Puissance contre sécurité",
        "Prix contre pollution",
        "Local contre global",
        "Court terme contre long terme",
      ],
      child_question: "Comment choisir quand aucune solution n’est parfaite ?",
      father_answer:
        "On regarde les besoins, les impacts, les risques, les ressources disponibles et les personnes concernées.",
      activity: {
        type: "final_city_builder",
        title: "Construis ta ville idéale",
        description:
          "Choisis les sources d’énergie de ta ville et observe les conséquences.",
        scores: [
          "Confort",
          "Pollution",
          "Coût",
          "Autonomie",
          "Sécurité",
          "Durabilité",
        ],
      },
      key_sentence:
        "Le progrès, ce n’est pas seulement inventer. C’est apprendre à choisir.",
      energy_scores: {
        power: 0,
        pollution: 0,
        availability: 0,
        danger: 0,
        ease: 0,
        storage: 0,
        complexity: 0,
        renewable: null,
      },
    },
  ],
  big_questions: [
    {
      question: "Est-ce qu’une invention est toujours un progrès ?",
      answer:
        "Pas forcément. Une invention peut apporter beaucoup de choses utiles, mais aussi créer de nouveaux problèmes. Il faut regarder ce qu’elle change vraiment.",
    },
    {
      question: "Peut-on utiliser une énergie sans conséquence ?",
      answer:
        "Presque jamais. Même les énergies très propres demandent des matériaux, des machines, du transport et de l’entretien.",
    },
    {
      question: "Qui profite d’une technologie ?",
      answer:
        "Certaines technologies profitent à beaucoup de monde, d’autres surtout à ceux qui les possèdent ou les contrôlent. C’est une question importante.",
    },
    {
      question: "Qui en paie le prix ?",
      answer:
        "Parfois, ceux qui profitent d’une technologie ne sont pas ceux qui subissent ses conséquences. Il faut regarder l’ensemble de la chaîne.",
    },
    {
      question:
        "Pourquoi les humains choisissent parfois une solution imparfaite ?",
      answer:
        "Parce qu’ils doivent répondre à un besoin immédiat : se chauffer, se déplacer, produire, soigner ou nourrir une population.",
    },
    {
      question:
        "Comment savoir si une technologie nous aide ou nous rend dépendants ?",
      answer:
        "On peut se demander si elle nous rend plus autonomes, plus capables, ou si au contraire on ne sait plus agir sans elle.",
    },
    {
      question: "Est-ce qu’aller plus vite veut toujours dire mieux vivre ?",
      answer:
        "Non. Aller plus vite peut aider, mais cela peut aussi créer du stress, de la fatigue ou de la consommation inutile.",
    },
    {
      question: "Une énergie propre à un endroit peut-elle polluer ailleurs ?",
      answer:
        "Oui. Une voiture électrique ne pollue pas dans la rue quand elle roule, mais il faut regarder comment l’électricité et la batterie ont été produites.",
    },
    {
      question: "Peut-on être moderne et sobre ?",
      answer:
        "Oui. Être moderne ne veut pas dire tout consommer sans limite. Cela peut aussi vouloir dire choisir des outils plus intelligents et plus durables.",
    },
    {
      question:
        "Est-ce que tout ce qui est possible doit forcément être utilisé ?",
      answer:
        "Non. Une capacité technique n’est pas automatiquement une bonne idée. Il faut réfléchir aux conséquences.",
    },
  ],
  educational_values: [
    {
      id: "curiosity",
      label: "Curiosité",
      description: "Se demander comment les choses fonctionnent.",
    },
    {
      id: "critical_thinking",
      label: "Esprit critique",
      description:
        "Ne pas croire qu’une solution est parfaite sans regarder ses conséquences.",
    },
    {
      id: "responsibility",
      label: "Responsabilité",
      description:
        "Comprendre que chaque outil puissant demande de la prudence.",
    },
    {
      id: "nuance",
      label: "Nuance",
      description: "Voir les avantages et les limites d’une invention.",
    },
    {
      id: "transmission",
      label: "Transmission",
      description: "Partager les connaissances entre générations.",
    },
  ],
  final_city_game: {
    title: "Construis ta ville idéale",
    description:
      "Choisis les énergies pour faire fonctionner une ville et observe les conséquences.",
    places: [
      {
        id: "maison",
        label: "Maison",
        needs: ["chauffage", "lumière", "cuisine", "internet"],
      },
      {
        id: "ecole",
        label: "École",
        needs: ["lumière", "chauffage", "ordinateurs"],
      },
      {
        id: "hopital",
        label: "Hôpital",
        needs: ["électricité stable", "chauffage", "machines médicales"],
      },
      {
        id: "ferme",
        label: "Ferme",
        needs: ["machines", "pompes", "stockage froid"],
      },
      {
        id: "usine",
        label: "Usine",
        needs: ["forte puissance", "machines", "transport"],
      },
      {
        id: "transports",
        label: "Transports",
        needs: ["mouvement", "carburant", "recharge"],
      },
      {
        id: "internet",
        label: "Internet",
        needs: ["serveurs", "réseau", "électricité continue"],
      },
    ],
    energy_options: [
      {
        id: "bois",
        label: "Bois",
        impact: {
          comfort: 2,
          pollution: 3,
          cost: 2,
          autonomy: 4,
          security: 3,
          durability: 3,
        },
      },
      {
        id: "charbon",
        label: "Charbon",
        impact: {
          comfort: 4,
          pollution: 5,
          cost: 2,
          autonomy: 3,
          security: 2,
          durability: 1,
        },
      },
      {
        id: "petrole",
        label: "Pétrole",
        impact: {
          comfort: 5,
          pollution: 5,
          cost: 3,
          autonomy: 2,
          security: 3,
          durability: 1,
        },
      },
      {
        id: "gaz",
        label: "Gaz",
        impact: {
          comfort: 4,
          pollution: 4,
          cost: 3,
          autonomy: 2,
          security: 3,
          durability: 2,
        },
      },
      {
        id: "nucleaire",
        label: "Nucléaire",
        impact: {
          comfort: 5,
          pollution: 1,
          cost: 4,
          autonomy: 4,
          security: 3,
          durability: 3,
        },
      },
      {
        id: "solaire",
        label: "Solaire",
        impact: {
          comfort: 3,
          pollution: 1,
          cost: 3,
          autonomy: 4,
          security: 5,
          durability: 4,
        },
      },
      {
        id: "eolien",
        label: "Éolien",
        impact: {
          comfort: 3,
          pollution: 1,
          cost: 3,
          autonomy: 3,
          security: 5,
          durability: 4,
        },
      },
      {
        id: "barrage",
        label: "Barrage",
        impact: {
          comfort: 4,
          pollution: 1,
          cost: 4,
          autonomy: 4,
          security: 4,
          durability: 4,
        },
      },
      {
        id: "batteries",
        label: "Batteries",
        impact: {
          comfort: 4,
          pollution: 2,
          cost: 4,
          autonomy: 4,
          security: 4,
          durability: 3,
        },
      },
    ],
  },
};
