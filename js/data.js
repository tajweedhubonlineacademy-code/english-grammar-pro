// English Grammar Pro - Comprehensive Grammar Database
const GRAMMAR_DATA = {
  tenses: [
    {
      id: "present-simple",
      name: "Present Simple (Indefinite)",
      urduName: "فعل حال مطلق",
      category: "present",
      urduIdentity: "اردو جملوں کے آخر میں 'تا ہے، تی ہے، تے ہیں، تا ہوں' وغیرہ آتا ہے۔",
      helpingVerbs: "Do / Does (صرف منفی اور سوالیہ جملوں میں)",
      mainVerb: "1st Form of Verb (He, She, It, یا واحد نام کے ساتھ s یا es کا اضافہ)",
      formulaPositive: "Subject + Verb 1st form (+s/es) + Object",
      formulaNegative: "Subject + do/does not + Verb 1st form + Object",
      formulaInterrogative: "Do/Does + Subject + Verb 1st form + Object?",
      rules: [
        "He, She, It اور Singular Noun کے ساتھ verb میں s/es لگتا ہے۔",
        "I, We, You, They اور Plural Nouns کے ساتھ صرف پہلی فارم آتی ہے، s/es نہیں لگتا۔",
        "منفی اور سوالیہ میں He/She/It کے ساتھ 'Does' لگتا ہے اور پھر verb سے s/es ختم ہو جاتا ہے۔"
      ],
      examples: [
        { en: "He reads a book every night.", ur: "وہ ہر رات ایک کتاب پڑھتا ہے۔" },
        { en: "They play cricket in the evening.", ur: "وہ شام کو کرکٹ کھیلتے ہیں۔" },
        { en: "She does not tell a lie.", ur: "وہ جھوٹ نہیں بولتی ہے۔" },
        { en: "Do you learn English grammar?", ur: "کیا آپ انگلش گرامر سیکھتے ہیں؟" }
      ]
    },
    {
      id: "present-continuous",
      name: "Present Continuous",
      urduName: "فعل حال جاری",
      category: "present",
      urduIdentity: "اردو جملوں کے آخر میں 'رہا ہے، رہی ہے، رہے ہیں، رہا ہوں' آتا ہے۔",
      helpingVerbs: "Is, Am, Are",
      mainVerb: "1st Form + ing (Present Participle)",
      formulaPositive: "Subject + is/am/are + Verb 1st (+ing) + Object",
      formulaNegative: "Subject + is/am/are + not + Verb 1st (+ing) + Object",
      formulaInterrogative: "Is/Am/Are + Subject + Verb 1st (+ing) + Object?",
      rules: [
        "I کے ساتھ 'Am' استعمال ہوتا ہے۔",
        "He, She, It اور واحد ناموں کے ساتھ 'Is' لگتا ہے۔",
        "We, You, They اور جمع ناموں کے ساتھ 'Are' لگتا ہے۔"
      ],
      examples: [
        { en: "I am learning English grammar right now.", ur: "میں اس وقت انگلش گرامر سیکھ رہا ہوں۔" },
        { en: "It is raining outside.", ur: "باہر بارش ہو رہی ہے۔" },
        { en: "They are not watching television.", ur: "وہ ٹیلی ویژن نہیں دیکھ رہے ہیں۔" },
        { en: "Are you waiting for someone?", ur: "کیا آپ کسی کا انتظار کر رہے ہیں؟" }
      ]
    },
    {
      id: "present-perfect",
      name: "Present Perfect",
      urduName: "فعل حال مکمل",
      category: "present",
      urduIdentity: "اردو جملوں کے آخر میں 'چکا ہے، چکی ہے، چکے ہیں' یا 'لیا ہے، دیا ہے، کیا ہے' آتا ہے۔",
      helpingVerbs: "Has, Have",
      mainVerb: "3rd Form of Verb (Past Participle)",
      formulaPositive: "Subject + has/have + Verb 3rd form + Object",
      formulaNegative: "Subject + has/have + not + Verb 3rd form + Object",
      formulaInterrogative: "Has/Have + Subject + Verb 3rd form + Object?",
      rules: [
        "He, She, It اور واحد ناموں کے ساتھ 'Has' لگتا ہے۔",
        "I, We, You, They اور جمع ناموں کے ساتھ 'Have' لگتا ہے۔",
        "ہمیشہ فعل کی تیسری فارم (3rd Form) استعمال ہوتی ہے۔"
      ],
      examples: [
        { en: "I have completed my homework.", ur: "میں اپنا ہوم ورک مکمل کر چکا ہوں۔" },
        { en: "She has already left for school.", ur: "وہ اسکول جا چکی ہے۔" },
        { en: "We have not received the message yet.", ur: "ہمیں ابھی تک پیغام نہیں ملا ہے۔" },
        { en: "Have you ever visited Lahore?", ur: "کیا آپ نے کبھی لاہور کی سیر کی ہے؟" }
      ]
    },
    {
      id: "present-perfect-continuous",
      name: "Present Perfect Continuous",
      urduName: "فعل حال جاری مکمل",
      category: "present",
      urduIdentity: "کسی کام کا ماضی سے جاری رہنا اور ساتھ وقت کی مدت یا نقطہ (Since / For) کا ذکر ہونا۔ 'رہا ہے، رہی ہے' کے ساتھ وقت دیا ہوتا ہے۔",
      helpingVerbs: "Has been, Have been",
      mainVerb: "1st Form + ing",
      formulaPositive: "Subject + has/have been + Verb 1st (+ing) + Object + since/for + Time",
      formulaNegative: "Subject + has/have + not + been + Verb 1st (+ing) + Object + since/for + Time",
      formulaInterrogative: "Has/Have + Subject + been + Verb 1st (+ing) + Object + since/for + Time?",
      rules: [
        "Since: مقررہ وقت کے لیے (Point in time) جیسے: Since morning, Since 2010, Since 2 o'clock, Since Monday.",
        "For: مدت / وقفہ کے لیے (Period of time) جیسے: For 2 hours, For 5 days, For 3 years."
      ],
      examples: [
        { en: "It has been raining since morning.", ur: "صبح سے بارش ہو رہی ہے۔" },
        { en: "He has been living here for five years.", ur: "وہ پانچ سال سے یہاں رہ رہا ہے۔" },
        { en: "We have not been sleeping for two days.", ur: "ہم دو دن سے نہیں سو رہے ہیں۔" },
        { en: "How long have you been studying English?", ur: "آپ کب سے انگلش پڑھ رہے ہیں؟" }
      ]
    },
    {
      id: "past-simple",
      name: "Past Simple (Indefinite)",
      urduName: "فعل ماضی مطلق",
      category: "past",
      urduIdentity: "اردو جملوں کے آخر میں 'الف، چھوٹی ی، بڑی ے' یا 'تھا، تھی، تھے' آتا ہے (مثلاً گیا، کھایا، دیکھا)۔",
      helpingVerbs: "Did (صرف منفی اور سوالیہ جملوں میں)",
      mainVerb: "مثبت میں 2nd Form، منفی اور سوالیہ میں 1st Form",
      formulaPositive: "Subject + Verb 2nd form + Object",
      formulaNegative: "Subject + did not + Verb 1st form + Object",
      formulaInterrogative: "Did + Subject + Verb 1st form + Object?",
      rules: [
        "انگریزی گرامر کا واحد ٹینس ہے جس کے مثبت جملے میں 2nd Form لگتی ہے۔",
        "جب منفی یا سوالیہ میں 'Did' آ جائے تو فعل کی ہمیشہ 1st Form لگتی ہے (2nd form ختم ہو جاتی ہے)۔"
      ],
      examples: [
        { en: "She wrote an important letter yesterday.", ur: "اس نے کل ایک ضروری خط لکھا۔" },
        { en: "They went to Karachi last week.", ur: "وہ پچھلے ہفتے کراچی گئے۔" },
        { en: "He did not attend the class.", ur: "اس نے کلاس میں شرکت نہیں کی۔" },
        { en: "Did you call me earlier?", ur: "کیا آپ نے مجھے پہلے فون کیا تھا؟" }
      ]
    },
    {
      id: "past-continuous",
      name: "Past Continuous",
      urduName: "فعل ماضی جاری",
      category: "past",
      urduIdentity: "اردو جملوں کے آخر میں 'رہا تھا، رہی تھی، رہے تھے' آتا ہے۔",
      helpingVerbs: "Was, Were",
      mainVerb: "1st Form + ing",
      formulaPositive: "Subject + was/were + Verb 1st (+ing) + Object",
      formulaNegative: "Subject + was/were + not + Verb 1st (+ing) + Object",
      formulaInterrogative: "Was/Were + Subject + Verb 1st (+ing) + Object?",
      rules: [
        "I, He, She, It اور Singular Nouns کے ساتھ 'Was' لگتا ہے۔",
        "We, You, They اور Plural Nouns کے ساتھ 'Were' لگتا ہے۔"
      ],
      examples: [
        { en: "He was driving the car carefully.", ur: "وہ احتیاط سے گاڑی چلا رہا تھا۔" },
        { en: "Children were playing in the garden.", ur: "بچے باغ میں کھیل رہے تھے۔" },
        { en: "I was not sleeping when you called.", ur: "جب آپ نے کال کی تو میں سو نہیں رہا تھا۔" },
        { en: "Were they preparing for the examination?", ur: "کیا وہ امتحان کی تیاری کر رہے تھے؟" }
      ]
    },
    {
      id: "past-perfect",
      name: "Past Perfect",
      urduName: "فعل ماضی مکمل",
      category: "past",
      urduIdentity: "اردو جملوں کے آخر میں 'چکا تھا، چکی تھی، چکے تھے' یا 'لیا تھا، دیا تھا' آتا ہے۔",
      helpingVerbs: "Had (تمام Subjects کے ساتھ)",
      mainVerb: "3rd Form of Verb",
      formulaPositive: "Subject + had + Verb 3rd form + Object",
      formulaNegative: "Subject + had not + Verb 3rd form + Object",
      formulaInterrogative: "Had + Subject + Verb 3rd form + Object?",
      rules: [
        "تمام Subjects (I, He, She, We, They وغیرہ) کے ساتھ صرف 'Had' ہی لگتا ہے۔",
        "اکثر دو کاموں کا ذکر ہوتا ہے: جو کام پہلے ختم ہو اس میں Past Perfect (Had + 3rd form) اور بعد والے میں Past Simple (2nd form) لگتا ہے۔"
      ],
      examples: [
        { en: "The train had left before we reached the station.", ur: "ہمارے اسٹیشن پہنچنے سے پہلے ٹرین جا چکی تھی۔" },
        { en: "She had already cooked dinner.", ur: "وہ پہلے ہی رات کا کھانا پکا چکی تھی۔" },
        { en: "I had never seen such a beautiful view.", ur: "میں نے اتنا خوبصورت منظر پہلے کبھی نہیں دیکھا تھا۔" }
      ]
    },
    {
      id: "past-perfect-continuous",
      name: "Past Perfect Continuous",
      urduName: "فعل ماضی جاری مکمل",
      category: "past",
      urduIdentity: "ماضی میں کسی کام کا جاری رہنا اور ساتھ وقت (Since / For) کا ذکر ہونا ('رہا تھا، رہی تھی' مع وقت)۔",
      helpingVerbs: "Had been",
      mainVerb: "1st Form + ing",
      formulaPositive: "Subject + had been + Verb 1st (+ing) + Object + since/for + Time",
      formulaNegative: "Subject + had not been + Verb 1st (+ing) + Object + since/for + Time",
      formulaInterrogative: "Had + Subject + been + Verb 1st (+ing) + Object + since/for + Time?",
      rules: [
        "سبھی کے ساتھ 'Had been' آتا ہے، اور وقت کی نشان دہی کے لیے Since/For استعمال ہوتا ہے۔"
      ],
      examples: [
        { en: "They had been working on the project for three hours.", ur: "وہ تین گھنٹے سے پروجیکٹ پر کام کر رہے تھے۔" },
        { en: "It had been snowing since yesterday.", ur: "کل سے برف باری ہو رہی تھی۔" }
      ]
    },
    {
      id: "future-simple",
      name: "Future Simple (Indefinite)",
      urduName: "فعل مستقبل مطلق",
      category: "future",
      urduIdentity: "اردو جملوں کے آخر میں 'گا، گی، گے' آتا ہے (مثلاً جائے گا، کرے گی، آئیں گے)۔",
      helpingVerbs: "Will / Shall",
      mainVerb: "1st Form of Verb",
      formulaPositive: "Subject + will/shall + Verb 1st form + Object",
      formulaNegative: "Subject + will/shall not + Verb 1st form + Object",
      formulaInterrogative: "Will/Shall + Subject + Verb 1st form + Object?",
      rules: [
        "ماڈرن انگلش میں اب عام طور پر تمام Subjects کے ساتھ 'Will' کا استعمال درست مانا جاتا ہے۔",
        "روایتی گرامر میں I اور We کے ساتھ 'Shall' استعمال ہوتا تھا۔"
      ],
      examples: [
        { en: "I will call you tomorrow morning.", ur: "میں کل صبح آپ کو فون کروں گا۔" },
        { en: "They will win the match easily.", ur: "وہ میچ آسانی سے جیت جائیں گے۔" },
        { en: "We will not compromise on quality.", ur: "ہم معیار پر کوئی سمجھوتہ نہیں کریں گے۔" },
        { en: "Will you come to the party tonight?", ur: "کیا آپ آج رات تقریب میں آئیں گے؟" }
      ]
    },
    {
      id: "future-continuous",
      name: "Future Continuous",
      urduName: "فعل مستقبل جاری",
      category: "future",
      urduIdentity: "اردو جملوں کے آخر میں 'رہا ہوگا، رہی ہوگی، رہے ہوں گے' آتا ہے۔",
      helpingVerbs: "Will be / Shall be",
      mainVerb: "1st Form + ing",
      formulaPositive: "Subject + will be + Verb 1st (+ing) + Object",
      formulaNegative: "Subject + will not be + Verb 1st (+ing) + Object",
      formulaInterrogative: "Will + Subject + be + Verb 1st (+ing) + Object?",
      rules: [
        "منفی جملے میں 'not' ہمیشہ will اور be کے درمیان آتا ہے (Will not be)۔"
      ],
      examples: [
        { en: "This time tomorrow, I will be flying to London.", ur: "کل اس وقت میں لندن کے لیے سفر کر رہا ہوں گا۔" },
        { en: "She will be waiting for our call.", ur: "وہ ہماری کال کا انتظار کر رہی ہوگی۔" }
      ]
    },
    {
      id: "future-perfect",
      name: "Future Perfect",
      urduName: "فعل مستقبل مکمل",
      category: "future",
      urduIdentity: "اردو جملوں کے آخر میں 'چکا ہوگا، چکی ہوگی، چکے ہوں گے' آتا ہے۔",
      helpingVerbs: "Will have",
      mainVerb: "3rd Form of Verb",
      formulaPositive: "Subject + will have + Verb 3rd form + Object",
      formulaNegative: "Subject + will not have + Verb 3rd form + Object",
      formulaInterrogative: "Will + Subject + have + Verb 3rd form + Object?",
      rules: [
        "کسی آئندہ وقت تک کام کے مکمل ہو چکنے کو ظاہر کرنے کے لیے استعمال ہوتا ہے۔"
      ],
      examples: [
        { en: "He will have finished his exam by 4 PM.", ur: "وہ شام چار بجے تک اپنا امتحان ختم کر چکا ہوگا۔" },
        { en: "They will have built the bridge by next year.", ur: "وہ اگلے سال تک پل تعمیر کر چکے ہوں گے۔" }
      ]
    },
    {
      id: "future-perfect-continuous",
      name: "Future Perfect Continuous",
      urduName: "فعل مستقبل جاری مکمل",
      category: "future",
      urduIdentity: "مستقبل میں کسی کام کا طویل عرصے جاری رہنا مع وقت ('رہا ہوگا' مع Since/For)۔",
      helpingVerbs: "Will have been",
      mainVerb: "1st Form + ing",
      formulaPositive: "Subject + will have been + Verb 1st (+ing) + Object + since/for + Time",
      formulaNegative: "Subject + will not have been + Verb 1st (+ing) + Object + since/for + Time",
      formulaInterrogative: "Will + Subject + have been + Verb 1st (+ing) + Object + since/for + Time?",
      rules: [
        "مستقبل کے وقت کے ساتھ Since کی جگہ اکثر 'From' بھی ترجیح دیا جاتا ہے۔"
      ],
      examples: [
        { en: "By next month, I will have been working here for ten years.", ur: "اگلے ماہ تک مجھے یہاں کام کرتے ہوئے دس سال ہو چکے ہوں گے۔" }
      ]
    }
  ],

  partsOfSpeech: [
    {
      id: "noun",
      title: "Noun (اسم)",
      icon: "fa-solid fa-cube",
      color: "#3b82f6",
      definition: "A Noun is the name of a person, place, animal, thing, or idea.",
      urduDef: "کسی بھی شخص، جگہ، چیز، جانور یا کیفیت/خیال کے نام کو اسم (Noun) کہتے ہیں۔",
      types: [
        { name: "Proper Noun (اسم معرفہ)", desc: "مخصوص نام جیسے: Ali, Lahore, Quran, Pakistan" },
        { name: "Common Noun (اسم نکرہ)", desc: "عام نام جیسے: boy, city, book, river" },
        { name: "Collective Noun (اسم جمع)", desc: "گروہ کا نام جیسے: team, army, class, family" },
        { name: "Abstract Noun (اسم کیفیت)", desc: "خیال یا جذبہ جسے چھوا نہ جا سکے جیسے: honesty, love, courage, knowledge" },
        { name: "Material Noun (اسم مادہ)", desc: "مادہ یا چیزیں جیسے: gold, water, milk, iron" }
      ],
      examples: [
        "Quaid-e-Azam is the founder of Pakistan.",
        "Water is essential for life.",
        "Honesty is the best policy."
      ]
    },
    {
      id: "pronoun",
      title: "Pronoun (اسم ضمیر)",
      icon: "fa-solid fa-user-tag",
      color: "#8b5cf6",
      definition: "A word used in place of a noun to avoid unnecessary repetition.",
      urduDef: "وہ لفظ جو کسی اسم (Noun) کی جگہ بار بار نام دہرانے سے بچنے کے لیے بولا جائے جیسے: He, She, It, They, We.",
      types: [
        { name: "Personal Pronouns", desc: "I, you, he, she, it, we, they (شخصی ضمیر)" },
        { name: "Possessive Pronouns", desc: "mine, yours, his, hers, ours, theirs (ملکیت ظاہر کرنے والے)" },
        { name: "Reflexive Pronouns", desc: "myself, yourself, himself, ourselves" },
        { name: "Relative Pronouns", desc: "who, which, that, whom, whose (جملوں کو جوڑنے والے)" },
        { name: "Demonstrative Pronouns", desc: "this, that, these, those (اشارہ کرنے والے)" }
      ],
      examples: [
        "Ali is an intelligent boy. He studies hard every day.",
        "This is my book and that is yours.",
        "The girl who called you yesterday is my sister."
      ]
    },
    {
      id: "verb",
      title: "Verb (فعل / کام)",
      icon: "fa-solid fa-bolt",
      color: "#ec4899",
      definition: "A Verb is a word that shows an action, state of being, or occurrence.",
      urduDef: "وہ کلمہ جس سے کسی کام کا کرنا یا ہونا کسی زمانے میں ظاہر ہو (جیسے: run, eat, think, is, am, have)۔",
      types: [
        { name: "Action Verbs", desc: "حرکت یا عمل ظاہر کرنے والے (run, speak, write, read)" },
        { name: "Helping/Auxiliary Verbs", desc: "مددگار افعال (is, am, are, was, were, has, have, will)" },
        { name: "Modal Verbs", desc: "امکان یا صلاحیت بتانے والے (can, could, may, might, should, must)" },
        { name: "Transitive & Intransitive", desc: "مفعول (Object) والے اور بغیر مفعول والے افعال" }
      ],
      examples: [
        "She writes beautiful poetry.",
        "They are practicing their speech.",
        "You must speak the truth."
      ]
    },
    {
      id: "adjective",
      title: "Adjective (اسم صفت)",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "#10b981",
      definition: "An Adjective describes, qualifies, or gives more details about a noun or pronoun.",
      urduDef: "وہ لفظ جو کسی اسم یا ضمیر کی اچھائی، برائی، خوبی، خامی یا تعداد/مقدار کو ظاہر کرے (جیسے: good, bad, tall, beautiful, ten)۔",
      types: [
        { name: "Positive Degree", desc: "سادہ صفت: tall, smart, brave" },
        { name: "Comparative Degree", desc: "دو کے درمیان موازنہ (-er یا more): taller, smarter, more brave" },
        { name: "Superlative Degree", desc: "سب سے اعلیٰ یا آخری درجہ (-est یا most): tallest, smartest, most brave" }
      ],
      examples: [
        "The rose is a beautiful flower.",
        "Mount Everest is the highest mountain in the world.",
        "He has three luxury cars."
      ]
    },
    {
      id: "adverb",
      title: "Adverb (متعلق فعل)",
      icon: "fa-solid fa-gauge-high",
      color: "#f59e0b",
      definition: "An Adverb modifies or adds extra meaning to a verb, adjective, or another adverb.",
      urduDef: "وہ لفظ جو فعل (کام)، صفت، یا کسی دوسرے متعلق فعل کی وضاحت کرے کہ کام کب، کہاں، اور کیسے ہوا (جیسے: quickly, very, softly, yesterday)۔",
      types: [
        { name: "Adverb of Manner (کیسے)", desc: "quickly, gracefully, silently, well" },
        { name: "Adverb of Time (کب)", desc: "now, yesterday, soon, already, tomorrow" },
        { name: "Adverb of Place (کہاں)", desc: "here, there, everywhere, outside" },
        { name: "Adverb of Degree (کس حد تک)", desc: "very, extremely, completely, totally" }
      ],
      examples: [
        "The athlete runs very quickly.",
        "She spoke extremely politely to the guests.",
        "They will arrive here tomorrow."
      ]
    },
    {
      id: "preposition",
      title: "Preposition (حرف ربط)",
      icon: "fa-solid fa-location-dot",
      color: "#06b6d4",
      definition: "A word placed before a noun or pronoun to show direction, time, place, location, or relationship.",
      urduDef: "وہ لفظ جو کسی اسم یا ضمیر سے پہلے آ کر اس کا تعلق جملے کے دوسرے الفاظ سے ظاہر کرے (جیسے: in, on, at, under, to, for, with)۔",
      types: [
        { name: "Prepositions of Place", desc: "on the table, in the room, under the tree" },
        { name: "Prepositions of Time", desc: "at 5 PM, on Friday, in July, for two hours" },
        { name: "Prepositions of Direction", desc: "towards the school, into the water, across the road" }
      ],
      examples: [
        "The cat is sleeping under the bed.",
        "Our meeting starts at 9:00 AM on Monday.",
        "He jumped into the river fearlessly."
      ]
    },
    {
      id: "conjunction",
      title: "Conjunction (حرف عطف)",
      icon: "fa-solid fa-link",
      color: "#6366f1",
      definition: "A word that connects words, phrases, clauses, or sentences together.",
      urduDef: "وہ لفظ جو دو الفاظ، فقروں یا جملوں کو آپس میں جوڑنے کا کام کرے (جیسے: and, but, because, although, or, so)۔",
      types: [
        { name: "Coordinating Conjunctions", desc: "FANBOYS: For, And, Nor, But, Or, Yet, So" },
        { name: "Subordinating Conjunctions", desc: "because, although, since, unless, while, if" },
        { name: "Correlative Conjunctions", desc: "either...or, neither...nor, not only...but also" }
      ],
      examples: [
        "Ali wanted to buy the laptop, but it was too expensive.",
        "He worked hard because he wanted to achieve success.",
        "Neither Ahmad nor Bilal attended the lecture."
      ]
    },
    {
      id: "interjection",
      title: "Interjection (حرف فجائیہ / ندائیہ)",
      icon: "fa-solid fa-heart",
      color: "#ef4444",
      definition: "A word or phrase used to express sudden and strong emotions, feelings, or reactions.",
      urduDef: "وہ لفظ جو دل کی اچانک خوشی، غم، حیرت یا جذبات کے اظہار کے لیے بے ساختہ نکلے (جیسے: Wow!, Hurrah!, Alas!, Oops!, Bravo!)۔",
      types: [
        { name: "Joy (خوشی)", desc: "Hurrah!, Yay!, Great!" },
        { name: "Sorrow (غم)", desc: "Alas!, Oh no!, Ouch!" },
        { name: "Surprise (حیرت)", desc: "Wow!, What!, Oh my God!" },
        { name: "Approval (شاباش)", desc: "Bravo!, Well done!" }
      ],
      examples: [
        "Hurrah! We have won the championship trophy!",
        "Alas! The noble king has passed away.",
        "Wow! What a breathtaking sunset!"
      ]
    }
  ],

  activePassive: {
    overview: "Active Voice میں کام کرنے والا (Subject) جملے کے شروع میں ہوتا ہے، جبکہ Passive Voice میں جس پر کام ہوا ہو (Object) وہ اہم بن کر شروع میں آ جاتا ہے۔",
    goldenRules: [
      "Object بن جاتا ہے نیا Subject، اور Subject بن جاتا ہے 'by + Object'۔",
      "Passive Voice میں ہمیشہ فعل کی 3rd Form (Past Participle) ہی لگتی ہے۔",
      "زمانے کے مطابق مناسب Helping Verb (Be Form: is/am/are, was/were, been, being) کا اضافہ کیا جاتا ہے۔",
      "Future Continuous اور تمام Perfect Continuous ٹینسز کا عام طور پر Passive نہیں بنتا۔"
    ],
    tenseTable: [
      {
        tense: "Present Simple",
        active: "Subject + V1 (+s/es) + Object",
        passive: "Object + is/am/are + V3 + by + Subject",
        exampleActive: "He writes a letter.",
        examplePassive: "A letter is written by him."
      },
      {
        tense: "Present Continuous",
        active: "Subject + is/am/are + V1-ing + Object",
        passive: "Object + is/am/are + being + V3 + by + Subject",
        exampleActive: "She is making tea.",
        examplePassive: "Tea is being made by her."
      },
      {
        tense: "Present Perfect",
        active: "Subject + has/have + V3 + Object",
        passive: "Object + has/have + been + V3 + by + Subject",
        exampleActive: "They have won the match.",
        examplePassive: "The match has been won by them."
      },
      {
        tense: "Past Simple",
        active: "Subject + V2 + Object",
        passive: "Object + was/were + V3 + by + Subject",
        exampleActive: "He broke the window.",
        examplePassive: "The window was broken by him."
      },
      {
        tense: "Past Continuous",
        active: "Subject + was/were + V1-ing + Object",
        passive: "Object + was/were + being + V3 + by + Subject",
        exampleActive: "They were painting the room.",
        examplePassive: "The room was being painted by them."
      },
      {
        tense: "Past Perfect",
        active: "Subject + had + V3 + Object",
        passive: "Object + had + been + V3 + by + Subject",
        exampleActive: "She had invited everyone.",
        examplePassive: "Everyone had been invited by her."
      },
      {
        tense: "Future Simple",
        active: "Subject + will + V1 + Object",
        passive: "Object + will be + V3 + by + Subject",
        exampleActive: "We will plant trees.",
        examplePassive: "Trees will be planted by us."
      },
      {
        tense: "Future Perfect",
        active: "Subject + will have + V3 + Object",
        passive: "Object + will have been + V3 + by + Subject",
        exampleActive: "He will have completed the report.",
        examplePassive: "The report will have been completed by him."
      }
    ],
    pronounChanges: [
      { from: "I", to: "me" },
      { from: "He", to: "him" },
      { from: "She", to: "her" },
      { from: "We", to: "us" },
      { from: "They", to: "them" },
      { from: "You", to: "you" },
      { from: "It", to: "it" }
    ]
  },

  directIndirect: {
    overview: "Direct Speech وہ ہوتی ہے جس میں بولنے والے کے اصل الفاظ کو واوین (Inverted Commas) میں نقل کیا جائے۔ Indirect Speech میں بولنے والے کے مفہوم کو اپنے الفاظ میں بیان کیا جاتا ہے۔",
    rules: [
      "Inverted Commas (\"...\") کو ہٹا کر عام طور پر 'that' لگایا جاتا ہے۔",
      "اگر Reporting Verb ماضی میں ہو (Said / Told)، تو اندر والے فقرے کا Tense بدل جاتا ہے۔",
      "SON فارمولا (Pronoun تبدیلی): 1st Person Subject کے مطابق، 2nd Person Object کے مطابق، 3rd Person No Change۔",
      "قریبی الفاظ دوری والے الفاظ میں بدلتے ہیں (e.g. Now -> Then, Today -> That day, Tomorrow -> The next day)۔"
    ],
    tenseChanges: [
      { from: "Present Simple (V1)", to: "Past Simple (V2)" },
      { from: "Present Continuous (is/am/are)", to: "Past Continuous (was/were)" },
      { from: "Present Perfect (has/have)", to: "Past Perfect (had)" },
      { from: "Past Simple (V2)", to: "Past Perfect (had + V3)" },
      { from: "Will / Shall", to: "Would / Should" },
      { from: "Can / May", to: "Could / Might" }
    ],
    examples: [
      {
        direct: "He said, \"I am learning English.\"",
        indirect: "He said that he was learning English.",
        urdu: "اس نے کہا کہ وہ انگلش سیکھ رہا تھا۔"
      },
      {
        direct: "She said to me, \"I have finished my work.\"",
        indirect: "She told me that she had finished her work.",
        urdu: "اس نے مجھے بتایا کہ وہ اپنا کام ختم کر چکی تھی۔"
      },
      {
        direct: "Ali said, \"I will call you tomorrow.\"",
        indirect: "Ali said that he would call me the next day.",
        urdu: "علی نے کہا کہ وہ مجھے اگلے دن کال کرے گا۔"
      },
      {
        direct: "Teacher said, \"The earth moves round the sun.\"",
        indirect: "Teacher said that the earth moves round the sun. (فاقی سچائی / Universal Truth میں ٹینس تبدیل نہیں ہوتا)",
        urdu: "استاد نے کہا کہ زمین سورج کے گرد گھومتی ہے۔"
      }
    ]
  },

  commonMistakes: [
    {
      wrong: "He do not like coffee.",
      right: "He does not like coffee.",
      explanation: "He, She, اور It کے ساتھ Present Simple میں 'does' آتا ہے، 'do' نہیں۔",
      urdu: "وہ کافی پسند نہیں کرتا۔"
    },
    {
      wrong: "I did not saw him yesterday.",
      right: "I did not see him yesterday.",
      explanation: "Did کے بعد ہمیشہ فعل کی پہلی فارم (1st form) لگتی ہے، 2nd form کبھی نہیں۔",
      urdu: "میں نے کل اسے نہیں دیکھا تھا۔"
    },
    {
      wrong: "She is married with a doctor.",
      right: "She is married to a doctor.",
      explanation: "شادی کے لیے preposition 'to' استعمال ہوتا ہے، 'with' غلط ہے۔",
      urdu: "اس کی شادی ایک ڈاکٹر سے ہوئی ہے۔"
    },
    {
      wrong: "Every students must submit homework.",
      right: "Every student must submit homework.",
      explanation: "Every اور Each کے بعد ہمیشہ singular noun (واحد اسم) آتا ہے۔",
      urdu: "ہر طالب علم کو ہوم ورک جمع کروانا چاہیے۔"
    },
    {
      wrong: "I have been working here since three years.",
      right: "I have been working here for three years.",
      explanation: "وقت کے دورانیے (مدت) کے لیے 'for' لگتا ہے، 'since' نہیں۔",
      urdu: "میں تین سال سے یہاں کام کر رہا ہوں۔"
    },
    {
      wrong: "He is senior than me.",
      right: "He is senior to me.",
      explanation: "Senior, Junior, Superior, Inferior کے بعد 'to' لگتا ہے، 'than' نہیں۔",
      urdu: "وہ مجھ سے عہدے میں بڑا ہے۔"
    },
    {
      wrong: "Although it was raining, but he went out.",
      right: "Although it was raining, he went out.",
      explanation: "Although کے ساتھ جملے کے دوسرے حصے میں 'but' نہیں لگایا جاتا۔",
      urdu: "اگرچہ بارش ہو رہی تھی، پھر بھی وہ باہر گیا۔"
    },
    {
      wrong: "One of my friend is a pilot.",
      right: "One of my friends is a pilot.",
      explanation: "'One of' کے بعد اسم ہمیشہ جمع (Plural) آتا ہے (friends)۔",
      urdu: "میرے دوستوں میں سے ایک پائلٹ ہے۔"
    },
    {
      wrong: "She speaks English good.",
      right: "She speaks English well.",
      explanation: "Good ایک Adjective ہے، بولنے کے انداز (فعل کی وضاحت) کے لیے Adverb یعنی 'well' لگے گا۔",
      urdu: "وہ اچھی انگریزی بولتی ہے۔"
    },
    {
      wrong: "I look forward to meet you.",
      right: "I look forward to meeting you.",
      explanation: "'Look forward to' کے بعد Gerund یعنی Verb+ing کا استعمال ہوتا ہے۔",
      urdu: "میں آپ سے ملاقات کا منتظر ہوں۔"
    }
  ],

    quizzes: [
    {
      question: "Which tense is used for universal truths and daily routines?",
      urduHint: "روزمرہ معمولات اور آفاقی سچائی کے لیے کون سا ٹینس استعمال ہوتا ہے؟",
      options: ["Past Simple", "Present Continuous", "Present Simple", "Future Simple"],
      correct: 2,
      explanation: "Present Simple (Indefinite) روزانہ کے کاموں، معمولات اور فطری حقیقتوں کے لیے استعمال ہوتا ہے۔"
    },
    {
      question: "Identify the correct negative sentence for: 'He went to school.'",
      urduHint: "ماضی مطلق (Past Simple) کا درست منفی جملہ منتخب کریں۔",
      options: [
        "He did not went to school.",
        "He did not go to school.",
        "He does not go to school.",
        "He was not went to school."
      ],
      correct: 1,
      explanation: "Did not کے بعد ہمیشہ verb کی پہلی فارم (1st form 'go') لگتی ہے۔"
    },
    {
      question: "What is the passive voice of: 'She is washing the dishes.'?",
      urduHint: "Present Continuous کے Passive Voice میں 'is/am/are being + 3rd form' لگتا ہے۔",
      options: [
        "The dishes are washed by her.",
        "The dishes were being washed by her.",
        "The dishes are being washed by her.",
        "The dishes have been washed by her."
      ],
      correct: 2,
      explanation: "کیونکہ 'dishes' جمع ہے اس لیے 'are being washed by her' درست ہوگا۔"
    },
    {
      question: "Choose the correct preposition: 'The cat jumped ______ the chair.'",
      urduHint: "حرکت کے ساتھ اوپر جانے کے لیے کون سا حرف ربط لگے گا؟",
      options: ["onto", "in", "at", "by"],
      correct: 0,
      explanation: "کسی چیز کے اوپر اچھل کر آنے کے لیے 'onto' درست پریپوزیشن ہے۔"
    },
    {
      question: "Change to Indirect: Ali said, 'I can solve this puzzle.'",
      urduHint: "Can کا ماضی کیا بنتا ہے اور Inverted commas ہٹا کر کیا لگتا ہے؟",
      options: [
        "Ali said that he can solve that puzzle.",
        "Ali said that he could solve that puzzle.",
        "Ali said he will solve this puzzle.",
        "Ali asked if he could solve that puzzle."
      ],
      correct: 1,
      explanation: "Can بدل کر 'could' ہو جائے گا اور 'this' بدل کر 'that' بن جائے گا۔"
    },
    {
      question: "Which of the following is an Abstract Noun?",
      urduHint: "وہ اسم جسے چھوا یا دیکھا نہ جا سکے، صرف محسوس کیا جا سکے۔",
      options: ["Lahore", "Chair", "Bravery", "Teacher"],
      correct: 2,
      explanation: "Bravery (بہادری) ایک صفت یا کیفیت کا نام ہے جسے چھوا نہیں جا سکتا، اس لیے Abstract Noun ہے۔"
    },
    {
      question: "Find the error: 'She has been working here ______ 2018.'",
      urduHint: "مخصوص سال (Point of time) کے لیے Since آئے گا یا For؟",
      options: ["for", "since", "from", "at"],
      correct: 1,
      explanation: "مقررہ سال یا وقت کے نقطے کے لیے 'since' کا استعمال ہوتا ہے۔"
    },
    {
      question: "Correct sentence: 'Neither of the boys ______ present yesterday.'",
      urduHint: "Neither of کے ساتھ فعل واحد (Singular) استعمال ہوتا ہے۔",
      options: ["were", "was", "are", "have"],
      correct: 1,
      explanation: "Neither of the boys کو گرامر میں singular سمجھا جاتا ہے، اس لیے ماضی میں 'was' درست ہے۔"
    },
    {
      question: "What part of speech is the word 'Quickly' in: 'He ran quickly'?",
      urduHint: "یہ لفظ فعل 'ran' کی وضاحت کر رہا ہے کہ وہ کیسے دوڑا۔",
      options: ["Adjective", "Adverb", "Noun", "Conjunction"],
      correct: 1,
      explanation: "جو لفظ فعل کی کیفیت یا طریقہ ظاہر کرے وہ Adverb (متعلق فعل) ہوتا ہے۔"
    },
    {
      question: "Select the sentence with correct punctuation and capital letter:",
      urduHint: "صحیح کیپیٹلائزیشن اور پنکچوایشن دیکھیں۔",
      options: [
        "did you see ali yesterday",
        "Did you see Ali yesterday?",
        "Did you see ali yesterday?",
        "did you see Ali yesterday."
      ],
      correct: 1,
      explanation: "جملے کا پہلا لفظ بڑا (Did)، نام بڑا (Ali) اور آخر میں سوالیہ نشان (?) ہونا چاہیے۔"
    },
    {
      question: "Choose the correct modal verb: 'You ______ obey the traffic rules.'",
      urduHint: "لازمی قانون یا فرض کی ادائیگی کے لیے کون سا لفظ آتا ہے؟",
      options: ["might", "must", "could", "may"],
      correct: 1,
      explanation: "قانون یا لازمی فریضے کے لیے 'must' استعمال ہوتا ہے۔"
    },
    {
      question: "Select the correct sentence:",
      urduHint: "One of my friends واحد ہے یا جمع؟",
      options: [
        "One of my friend are doctor.",
        "One of my friends is a doctor.",
        "One of my friends are doctor.",
        "One of my friend is a doctor."
      ],
      correct: 1,
      explanation: "'One of my friends' کے بعد verb واحد 'is' آئے گا کیونکہ بات ایک دوست کی ہو رہی ہے۔"
    },
    {
      question: "What is the third form (Past Participle) of the verb 'Choose'?",
      urduHint: "Choose کی تیسری فارم کیا ہے؟",
      options: ["Chose", "Choosed", "Chosen", "Choosing"],
      correct: 2,
      explanation: "Choose (1st) -> Chose (2nd) -> Chosen (3rd form)."
    },
    {
      question: "Identify the tense: 'They had already eaten dinner when I arrived.'",
      urduHint: "Had + 3rd form کس ٹینس کا فارمولا ہے؟",
      options: ["Past Simple", "Past Perfect", "Present Perfect", "Past Continuous"],
      correct: 1,
      explanation: "Had + 3rd form 'Past Perfect' کی علامت ہے۔"
    },
    {
      question: "Fill in the blank: 'He is afraid ______ dark places.'",
      urduHint: "Afraid کے بعد کون سی مخصوص Preposition آتی ہے؟",
      options: ["from", "with", "of", "to"],
      correct: 2,
      explanation: "Afraid کے بعد ہمیشہ 'of' کا استعمال ہوتا ہے (Afraid of)."
    },
    {
      question: "What is the comparative degree of 'Good'?",
      urduHint: "Good کا دوسرا درجہ (موازنہ) کیا ہوتا ہے؟",
      options: ["Gooder", "Better", "Best", "More good"],
      correct: 1,
      explanation: "Good (Positive) -> Better (Comparative) -> Best (Superlative)."
    },
    {
      question: "Convert to Passive: 'Someone stole my watch.'",
      urduHint: "جب کام کرنے والے کا معلوم نہ ہو تو Subject ختم یا 'by someone' ہو جاتا ہے۔",
      options: [
        "My watch was stolen.",
        "My watch is stolen.",
        "My watch has been stolen.",
        "My watch had stole."
      ],
      correct: 0,
      explanation: "Past Simple کے Passive میں was/were + 3rd form لگتی ہے (My watch was stolen)."
    },
    {
      question: "Which word is a Conjunction in: 'I like milk and honey'?",
      urduHint: "کون سا لفظ دو چیزوں کو جوڑ رہا ہے؟",
      options: ["like", "milk", "and", "honey"],
      correct: 2,
      explanation: "'and' دو الفاظ کو جوڑنے والا Conjunction (حرف عطف) ہے۔"
    },
    {
      question: "Fill in the blank: 'If it rains, we ______ at home.'",
      urduHint: "First Conditional جملے میں if-clause کے بعد کیا لگتا ہے؟",
      options: ["will stay", "stayed", "had stayed", "would have stay"],
      correct: 0,
      explanation: "First conditional میں Present Simple کے بعد 'will + 1st form' آتا ہے۔"
    },
    {
      question: "Which of the following is correct?",
      urduHint: "Superior کے بعد than آتا ہے یا to؟",
      options: [
        "This cloth is superior than that.",
        "This cloth is superior to that.",
        "This cloth is more superior than that.",
        "This cloth is superior from that."
      ],
      correct: 1,
      explanation: "Superior, Junior, Senior, Prior کے بعد ہمیشہ 'to' آتا ہے۔"
    }
  ]
};
