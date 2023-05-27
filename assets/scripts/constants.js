// Array of emotions

export const RAW_EMOTIONS = [
  'joy', 
  'sadness', 
  'disgust', 
  'fear', 
  'anger'
]

export const READING_TYPES = [
  'career',
  'health',
  'love',
  'friends_and_family'
]

export const EMOTIONS = [
  'ecstasy',
  'melancholy',
  'intrigue',
  'surprise',
  'righteousness',
  'despair',
  'selfloathing',
  'anxiety',
  'betrayal',
  'prejudice',
  'revulsion',
  'loathing',
  'terror',
  'hatred',
  'rage'
]

// Object with quotes for each emotion
export const QUOTES = {
  joy: [
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    'The future belongs to those who believe in the beauty of their dreams.',
    'The best way to cheer yourself up is to try to cheer somebody else up.'
  ],
  sadness: [
    'The greater your capacity to love, the greater your capacity to feel the pain.',
    'The walls we build around us to keep out the hurt also keep out the joy.',
    "People cry not because they're weak. It's because they've been strong for too long."
  ],
  disgust: [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    'Disgust is the one human emotion that guarantees loyalty.',
    "I'm not arguing, I'm just explaining why I'm right."
  ],
  fear: [
    'Worrying about outcomes over which I have no control is punishing myself before the universe has decided whether I ought to be punished.',
    'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
    'Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.'
  ],
  anger: [
    'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
    'Never go to bed mad. Stay up and fight.',
    "It's not about avoiding the things that make you angry; it's about learning how to control your reactions to them."
  ]
}

/**
 * The READINGS object is an object that stores the readings, with the primary key being the reading type (career, health, etc.)
 * Each reading type has an emotion, with an array of possible readings for those type and emotion.
 */
export const READINGS = {
  career: {
    ecstasy: [
      'As I tune into the energy surrounding your career path, I sense a vibrant and promising future ahead of you. Your enthusiasm and passion for the profession will be a driving force in your success. Trust your instincts and embrace the joy that comes from following your true calling.'
    ],
    melancholy: [
      'Embrace introspection, seek guidance from mentors, and explore new connections. Trust in your abilities, persevere, and let the winds of determination guide you towards a fulfilling path.'
    ],
    intrigue: [
      'Ah, curious soul, I sense a flicker of intrigue within you. Embrace this wondrous curiosity as a compass guiding you towards new horizons. Seek mentors who will nurture your passions, explore diverse paths, and let your inquisitive spirit shape a rewarding career that dances with the stars.'
    ],
    surprise: [
      'Embrace an unexpected twist as a catalyst for change. Unveil hidden talents, venture into uncharted territories, and let the surprise pave the way for a thrilling and transformative career path that exceeds even your wildest dreams.'
    ],
    righteousness: [
      'Ah, noble spirit,let your sense of justice be your guiding light. Seek a career that aligns with your values, where your actions can bring positive change to the world. Embrace opportunities to advocate for what is right, for in the pursuit of a righteous path, you shall find fulfillment and leave an indelible mark upon the tapestry of life.'
    ],
    despair: [
      'Oh, weary soul, I sense the heavy clouds enveloping you. Fear not, for even amidst the darkest storms, a glimmer of hope remains. Take heart and envision a future where your passions and talents converge. Seek guidance from mentors who can rekindle your spirit, explore new avenues with resilience, and know that from the depths of despair, you shall rise to forge a career that ignites your soul with purpose and joy.'
    ],
    selfloathing: [
      'Release the chains that bind you, for within you lies untapped potential and boundless worth. Embrace self-compassion as your guiding star, seek mentors who illuminate your strengths, and embark on a journey of self-discovery. From the ashes of self-loathing, you shall rise, unveiling a career that honors your true essence and brings forth the light within.'
    ],
    anxiety: [
      'Oh spirit, I sense the tumultuous waves of worry crashing upon your shores. Find tranquility within the storm by grounding yourself in the present moment. Seek a career that nurtures your well-being, aligns with your passions, and allows room for growth. Embrace mindfulness, seek guidance from mentors who inspire calm, and trust that in the journey towards a fulfilling career, your anxiety shall dissipate, replaced by a sense of purpose and serenity.'
    ],
    betrayal: [
      'Oh, wounded soul, I sense you seeking solace. Take heed, for amidst the shadows of betrayal, lies an opportunity for growth and rebirth. Guard your trust, but do not let the actions of others define your path. Seek a career that empowers your resilience, surround yourself with loyal allies and mentors who restore faith, and let the echoes of betrayal propel you towards a future brimming with success and vindication.'
    ],
    prejudice: [
      'Oh, seeker of truth, I sense the weight of the world burdening your spirit, seeking enlightenment. Embrace the power of empathy, for it shall be your guiding star in forging a path that shatters barriers. Seek a career that champions diversity, equality, and inclusivity. Surround yourself with mentors who value every voice, and let your own actions be a beacon of change, illuminating a future where prejudice crumbles and your career becomes a catalyst for harmony and understanding.'
    ],
    revulsion: [
      'Oh, restless soul, I sense the waves crashing against your spirit, yearning for career advice that brings solace. Embrace this inner turbulence as a catalyst for transformation. Seek a career that ignites passion within you, where your actions can shape a better world. Surround yourself with mentors who inspire you, explore fields that resonate with your true essence, and from the depths of revulsion, emerge as a beacon of change, leaving a lasting impact through a career that aligns with your values and purpose.'
    ],
    loathing: [
      'Oh, tormented soul, I sense the echoes of self-loathing reverberating within you, seeking guidance. Release the chains that bind you and embrace the power of self-compassion. Seek a career that allows you to nurture your true essence, where your unique gifts can flourish. Surround yourself with mentors who inspire love and acceptance, and through the journey of self-discovery, you shall find a career that becomes a source of self-love, healing, and purpose, transforming your loathing into unshakable self-worth.'
    ],
    terror: [
      "Oh, frightened soul, I sense the feelings of fear rooted deep within your nerves preventing you from taking the first step. Trying anything new can be quite scary as you cannot predict what will happen, unless you are me. As such, it is important for you to take risks, no matter how intimidating they may appear. It's good to rise above the fear and take a chance."
    ],
    hatred: [
      "Oh, apprehensive soul, I sense the world crashing against your heart and making you feel like everything is against you. It's important to realize that this is not the case but just unfortunate coincidences one after another. Sure an interview may go bad or an apathetic rejection through email may come but that doesn't mean that it's the end of the road for you. Live out your next day with conviction and if any failures arise, rise above them and move on."
    ],
    rage: [
      'Oh, wounded soul, I sense that burning sensation in your heart like a volcano ready to burst. A career is just one of those many things that do not come easy for anyone. But your life does not need to revolve only around this career of yours. Feeling angry will not make finding a career easier for you but growing above this experience and taking the time to find and learn something new will allow you to be your better self.'
    ]
  },
  health: {
    ecstasy: [
      "Your joy for life is infectious and can positively impact your health. While it's important to enjoy the moment, remember to find balance in all aspects of your life, including your health. Prioritize self-care and make choices that will benefit your physical and mental well-being in the long-term. Don't forget to celebrate your successes and enjoy the journey towards a healthier you."
    ],
    melancholy: [
      "It's okay to feel sad or down at times, but remember to prioritize your health and well-being during these moments. Take some time to reflect and focus on self-care, whether it's through exercise, healthy eating, or seeking help from professionals or support systems. Remember that this feeling is temporary, and you have the power to overcome it and emerge stronger and healthier than before."
    ],
    intrigue: [
      "Your curiosity and willingness to explore can lead to new ways of improving your health and well-being. Experiment with different exercises, diets, or wellness practices until you find what works best for you. Don't be afraid to try new things and step outside of your comfort zone in pursuit of a healthier life. Keep an open mind and trust in the process of self-discovery."
    ],
    surprise: [
      "Life is full of surprises, some good and some bad. While it may be difficult to predict what's to come, remember to take care of yourself during these times. Trust that you have the strength to navigate whatever comes your way, whether it's through seeking help from professionals or leaning on your support system. Remember to prioritize your physical and mental well-being, and trust that better days are ahead."
    ],
    righteousness: [
      "It's important to approach health with an open mind and empathy towards others. Everyone's health journey is unique, and it's important to respect and support others in their pursuit of wellness. Remember that there is no one \"right\" way to be healthy, and what works for one person may not work for another. Prioritize self-care and make choices that align with your own values and goals, while also respecting and supporting those around you."
    ],
    despair: [
      "Feeling hopeless or overwhelmed can be difficult, but remember that there is always hope for a brighter future. Seek help from professionals or support systems to guide you towards a healthier and happier life. Don't be afraid to ask for help or reach out to those around you for support. Remember that you have the power to overcome this feeling and emerge stronger and healthier than before."
    ],
    selfloathing: [
      "Feeling negative towards yourself can impact your physical and mental well-being. It's important to recognize and address these feelings, whether it's through seeking help from professionals or practicing self-care. Remember that everyone has flaws, and it's okay to make mistakes or have imperfections. Work towards accepting yourself for who you are, and make choices that benefit your physical and mental well-being. Remember that you are worthy of love and care, including from yourself."
    ],
    anxiety: [
      "Feeling anxious can be overwhelming, but remember that there are ways to manage and cope with this feeling. Whether it's through seeking help from professionals, practicing self-care, or finding healthy ways to manage stress, prioritize your mental and physical well-being. Remember that anxiety is a natural response to stress, and it's okay to take steps towards managing it in a healthy way."
    ],
    betrayal: [
      "Feeling betrayed can be difficult, but remember to prioritize your health and well-being during this time. Lean on your support system and seek help from professionals if needed. Remember that forgiveness and moving forward can be a healthy part of the healing process, but it's also important to set boundaries and take care of yourself. Don't let the actions of others impact your own health and well-being."
    ],
    prejudice: [
      "It's important to approach health with an open mind and without bias or prejudice towards others. Everyone's health journey is unique, and it's important to respect and support others in their pursuit of wellness, regardless of their race, ethnicity, gender, sexual orientation, or other characteristics. Remember to prioritize self-care and make choices that align with your own values and goals, while also respecting and supporting those around you."
    ],
    revulsion: [
      "Feeling disgusted or repulsed can be difficult, but it's important to address these feelings and prioritize your health and well-being. Whether it's through seeking help from professionals or practicing self-care, make choices that benefit your physical and mental well-being. Remember that everyone has different preferences and experiences, and it's important to respect and support others, even if their choices or lifestyles are different from your own."
    ],
    loathing: [
      "Feeling intense dislike or hatred towards yourself or others can impact your physical and mental well-being. It's important to address these feelings and seek help from professionals or support systems if needed. Remember that everyone has flaws and imperfections, and it's important to work towards accepting yourself and others for who they are. Make choices that benefit your physical and mental well-being, and remember that you are worthy of love and care, including from yourself. Don't let negative feelings consume you and prevent you from living a healthy and fulfilling life."
    ]
  },
  love: {
    ecstasy: [
      'I sense that your love life may be filled with passion, excitement, and deep emotional connections with your partner. You may feel deeply in love and connected to your partner, and you may be experiencing a sense of joy and fulfillment in your relationship. Remember to cherish and nurture your feelings of ecstasy and stay open to new possibilities and experiences that come with it.',
      "As the universe aligns in perfect harmony, you find yourself entwined in the intoxicating dance of love's ecstasy. In this profound moment, every fiber of your being resonates with pure bliss and uncontainable joy. It is a testament to the power of love's enchantment, where boundaries dissolve, and two souls merge into one radiant flame. Embrace this extraordinary connection, for within the depths of this euphoria lies the potential for a love story that transcends time. Cherish each precious moment, nourishing the passion and tenderness that intertwine your hearts. Together, you will create a symphony of love, a tapestry woven with trust, understanding, and a profound sense of belonging. Let this ethereal dance guide you, leading you to a love that knows no limits, and may your journey be filled with everlasting happiness.",
      "In the realm of love, where emotions surge like a mighty river, you find yourself swept away by a tidal wave of ecstasy. It is a transformative force, washing away inhibitions and awakening the depths of your soul. This euphoric state unveils the beauty of vulnerability, urging you to embrace love's passionate embrace. In this moment, you stand at the precipice of profound connection, where two hearts beat in synchrony, echoing the melodies of the universe. Allow this blissful current to guide you through uncharted territories, exploring the vast landscapes of affection, adoration, and unspoken desires. As you immerse yourself in this ocean of love, remember to navigate with care, nurturing the flame of passion with tenderness and respect. May your love story be a testament to the power of vulnerability and the joy that arises when hearts unite in a state of pure ecstasy.",
      "Within the tapestry of your love story, a chapter unfolds where ecstasy reigns supreme. It is a remarkable moment when two souls, intoxicated by the elixir of passion, discover a connection that defies explanation. In this euphoric state, you bask in the radiance of love's glow, and every touch, every glance, becomes an enchanting symphony that resonates deep within your being. As you surrender to the overwhelming emotions that flood your heart, embrace the vulnerability that accompanies this blissful journey. Together, you possess the power to create a world where happiness knows no limits, where shared laughter and whispered promises become the foundation of an unbreakable bond. Nurture this extraordinary connection, for it has the potential to weave a tale of unending love and unbridled joy. May your path be illuminated by the light of this transcendent love, guiding you toward a future brimming with passion, fulfillment, and everlasting ecstasy."
    ],
    melancholy: [
      "This may be a challenging time for you, but there is hope for the future. You may be experiencing some sadness or disappointment in your love life, perhaps because of a recent breakup or a feeling of being stuck in your current relationship. It's important to take time to process your emotions and to give yourself space to grieve if necessary. However, this melancholy phase may be a time of growth and introspection for you. It may be an opportunity to reflect on what you truly want and need in a relationship and to make changes or adjustments in your approach to love.",
      "In the depths of introspection, where emotions sway like gentle tides, love unveils its transformative touch. Amidst the ebb and flow of your inner world, there lies an opportunity for love to mend the tender fragments of your heart, breathing warmth into the spaces that yearn for solace. Allow yourself to lean on the gentle embrace of those who hold you dear, for their unwavering support can be a sanctuary amidst the currents of life. With each passing day, love's gentle currents shall guide you towards a place of renewed serenity, where joy blossoms like flowers in a sun-kissed meadow.",
      "When shadows veil the brightness of your spirit, love's radiant essence emerges as a beacon of hope. Embrace the delicate dance of emotions, for within the embrace of vulnerability lies the power to heal and grow. Let the tender gestures and heartfelt words of your loved ones serve as a salve for the unspoken ache within, as they offer solace and unwavering companionship along your journey. As you traverse this intricate labyrinth of emotions, trust that love's resplendent light will guide you towards a place of tranquility and restored harmony, where the beauty of love triumphs over the fleeting darkness.",
      "Amidst the tapestry of your emotions, a symphony of love resounds, even in the face of life's uncertainties. As you navigate the complexities of your inner landscape, remember that love's gentle touch has the power to mend and uplift. Seek solace in the tender presence of those who understand the intricacies of your heart, for their empathy can weave threads of comfort and compassion into the fabric of your being. Embrace the transformative journey that lies ahead, for within the depths of your experience, love's healing embrace awaits, bringing forth a dawn of renewed hope and serenity."
    ],
    intrigue: [
      "I can sense that you may be feeling intrigued by your love life. This can be an exciting and exhilarating feeling, and it suggests that there may be new opportunities for love and connection on the horizon. There may be someone new or someone you're interested in who has piqued your curiosity. This could be a new romantic interest or someone you've known for a while but are seeing in a new light.",
      "It's important to trust your instincts and to be open and receptive to new experiences and possibilities in your love life. It may be helpful to take some time to reflect on what you're looking for in a partner and what you want out of a relationship.",
      "In the depths of introspection, where emotions sway like gentle tides, love unveils its transformative touch. Amidst the ebb and flow of your inner world, there lies an opportunity for love to mend the tender fragments of your heart, breathing warmth into the spaces that yearn for solace. Allow yourself to lean on the gentle embrace of those who hold you dear, for their unwavering support can be a sanctuary amidst the currents of life. With each passing day, love's gentle currents shall guide you towards a place of renewed serenity, where joy blossoms like flowers in a sun-kissed meadow.",
      "When shadows veil the brightness of your spirit, love's radiant essence emerges as a beacon of hope. Embrace the delicate dance of emotions, for within the embrace of vulnerability lies the power to heal and grow. Let the tender gestures and heartfelt words of your loved ones serve as a salve for the unspoken ache within, as they offer solace and unwavering companionship along your journey. As you traverse this intricate labyrinth of emotions, trust that love's resplendent light will guide you towards a place of tranquility and restored harmony, where the beauty of love triumphs over the fleeting darkness."
    ],
    surprise: [
      'Sometimes we realize that we have been holding onto the past for too long. Although it will be a long and painful journey, you will come out on the other end happy and valiant.',
      "In the midst of life's unexpected twists and turns, love unveils its enchanting surprise, captivating your hearts with its awe-inspiring magic. Embrace this serendipitous moment, for it is a testament to the delightful mysteries that love bestows upon us. Allow the currents of surprise to invigorate your connection, infusing it with renewed curiosity and a sense of adventure. Together, you shall embark on a journey filled with delightful surprises, creating cherished memories that will forever be etched in the tapestry of your love story.",
      "As the winds of surprise sweep through your lives, love's embrace becomes a joyful revelation, unfolding a world of infinite possibilities. Embrace the unexpected with open hearts, for it is in these moments that love's spontaneity breathes new life into your relationship. Embrace the joy of discovery, as you uncover new layers of each other's souls and deepen your connection. Let the element of surprise become a cherished companion along your journey, igniting the spark of excitement and reminding you of the endless wonders that love has in store.",
      "Within the realm of love, surprises serve as delightful whispers from the universe, reminding you of its playful nature. Embrace the unexpected twists that love brings, for they hold the potential to ignite a renewed passion and deepen your bond. Allow yourselves to be swept away by the delightful surprises that await, as they infuse your lives with a vibrant energy and remind you of the beauty of spontaneity. Embrace the element of surprise with open arms, for it is in these moments that love's magic shines brightest, painting your shared journey with strokes of delightful astonishment and profound joy."
    ],
    righteousness: [
      "You are someone who places a high value on honesty, integrity, and respect in your relationships. You may be someone who is not willing to compromise your values or beliefs in order to please others or to conform to societal expectations. It's important to remember that while having a strong sense of righteousness can be a positive thing, it's also important to be open and receptive to different perspectives and experiences. Relationships require compromise and understanding, and it's important to communicate openly and respectfully with your partner in order to build a strong and healthy relationship.",
      'In the sanctuary of your righteous hearts, love finds its most noble expression. Embrace the power of love to inspire compassion, empathy, and a sense of justice. Let your love story be a testament to the belief that kindness and righteousness can coexist, intertwining your lives in a harmonious symphony of love and righteousness. As you navigate the world together, may your love serve as a beacon of light, illuminating paths of righteousness and inspiring positive change in the lives of others.',
      "Within the realm of righteous love, you stand united in a shared commitment to goodness, fairness, and integrity. Let love's transformative energy guide you as you navigate the complexities of life with unwavering principles. Embrace the power of your love to foster understanding, bridge divides, and champion justice in all its forms. Together, may your love story become a testament to the transformative force of righteousness, leaving a lasting impact on the world and inspiring others to walk the path of love and righteousness.",
      'As righteousness flows through the very essence of your love, embrace the responsibility that accompanies this noble bond. Let your love be a catalyst for positive change, empowering you to stand up for what is just and true. May your love radiate a righteous glow, touching the lives of those around you and fostering a sense of unity and compassion. In a world often yearning for righteousness, your love becomes a guiding light, illuminating the path towards a more equitable and loving society.'
    ],
    despair: [
      "It's important to remember that you are deserving of love and happiness and that your current situation does not define your worth. Trust that the universe has a plan for you and that things will get better with time. Stay open to new possibilities and experiences, and know that you have the strength and resilience to overcome this challenging time in your relationship.",
      "In the depths of despair, love reveals its profound strength, offering solace and hope amidst the darkest of times. Embrace the transformative power of love to heal and mend, for it holds the capacity to shine a light through the shadows of despair. Lean on your loved ones, for their unwavering support can become a lifeline, gently guiding you towards a place of renewed strength and resilience. Trust that love's embrace will help you rise above despair, creating a future filled with restored joy and unwavering connection.",
      "Amidst the overwhelming waves of despair, love stands as a steadfast anchor, reminding you of your inherent worth and the resilience of the human spirit. Embrace the nurturing embrace of love, allowing it to gently cradle your wounded heart and rekindle the flicker of hope within. Draw strength from the love that surrounds you, for it has the power to mend shattered pieces and infuse your being with newfound courage. In the face of despair, your love story becomes a testament to the triumph of love's light over the darkest of emotions.",
      "Within the grip of despair, love's unwavering presence offers a glimmer of possibility and a path towards healing. Embrace the vulnerability that accompanies this chapter of your journey, for it is within these moments that love's transformative power becomes most profound. Lean on the support of your loved ones, who will walk beside you, sharing the weight of despair and nurturing the seed of hope within your heart. Know that your love is stronger than the despair you face, and with time, love's gentle touch will lead you towards a future where despair dissipates, making way for renewed happiness and a strengthened bond."
    ],
    selfloathing: [
      "You might be dealing with a difficult and painful emotion, but there is hope for the future. You may be rooted in past experiences or negative beliefs about yourself and your worthiness of love. It's important to remember that these beliefs are not necessarily true and that you are deserving of love and happiness just like anyone else. Treating yourself with kindness and compassion, and learning to let go of negative self-talk and self-judgment. It may also be helpful to seek out support to work through your feelings and develop coping strategies. I can sense that there is hope for a bright and fulfilling love life in your future, stay positive and trust in the journey.",
      'Within the shadows of self-loathing, love shines as a beacon of light, illuminating the path towards self-discovery and healing. Embrace the journey of self-love, for it is through this transformative process that you will come to realize your inherent value and embrace the unique qualities that make you who you are. Surround yourself with love and support, seeking the uplifting presence of those who see your beauty even in moments of self-doubt. With each step towards self-acceptance and self-compassion, your love story will blossom, reflecting the radiant beauty that exists within you.',
      "In the face of self-loathing, love stands as a gentle reminder that you are worthy of kindness, understanding, and forgiveness—both from others and from yourself. Embrace the transformative power of self-love, nurturing a deep connection with your own heart. Allow love's healing touch to mend the wounds of self-loathing, fostering a sense of self-worth and inner peace. Surround yourself with a supportive network of loved ones who will uplift and encourage you along your journey of self-discovery. As you embrace self-love, your love story will become a testament to the transformative power of acceptance and compassion."
    ],
    anxiety: [
      "Your anxiety may be rooted in fear of the unknown or fear of being hurt in your love life. It's important to remember that while relationships can be unpredictable and may involve some level of risk, they can also be a source of great joy, fulfillment, and growth. Treating yourself with kindness and compassion and learning to let go of negative thoughts and worries."
    ],
    betrayal: [
      "There may be underlying issues in your relationship that have contributed to your feelings. It's important to take some time to reflect on these issues and try to identify any patterns or recurring problems in your relationship. If you feel comfortable, it may be helpful to communicate openly and honestly with your partner about your feelings and concerns and to work together to address any issues that may be present. It is sometimes important to prioritize your own emotional well-being and consider whether or not this relationship is truly healthy for you."
    ],
    prejudice: [
      "It may be helpful to examine your beliefs and assumptions about others, and to challenge any prejudices or biases that you may hold. This could involve seeking out new experiences and perspectives, learning more about different cultures and identities, and practicing empathy and compassion. When it comes to love, it's important to keep an open mind and heart, and to be willing to explore and connect with people who may be different from you. This can be a wonderful opportunity for personal growth and learning and can help you to build deeper connections and relationships."
    ],
    revulsion: [
      "Your feelings of revulsion may be rooted in past experiences or negative beliefs about certain types of people or behaviors. It's important to remember that everyone is unique and deserves to be treated with respect and compassion, even if their beliefs or behaviors may be different from our own. It may be helpful to examine your beliefs and assumptions about others and to challenge any prejudices or biases that you may hold. Remember that love is about mutual respect, trust, and understanding."
    ],
    loathing: [
      "I sense that your negative feelings may be rooted in past experiences or negative beliefs about yourself or your partner. It's important to remember that these negative feelings towards yourself or others can be harmful and can prevent us from experiencing love and connection. There may be opportunities for growth and personal development in your love life, as you work to overcome your feelings of loathing and embrace self-love and self-compassion. This could involve learning to let go of past hurts or insecurities, exploring new experiences and interests with your partner, or deepening your emotional resilience and strength."
    ],
    terror: [
      "It's natural to feel scared and worried about what's to come in the future, especially for something as unpredictable as love. A useful motif is that you miss every chance you don't take so live a little. As scary as it is to take the first step, you don't know what could happen. It could be that love comes to you in the first step or it's a never-ending journey with a thrilling conclusion but the end goal is to move past that fear and embrace the unknown."
    ],
    hatred: [
      "I understand that you are feeling a mix of feelings gravitating towards a hint of anger. It may be that you are feeling lost and confused but want to express anger instead. It's beneficial to realize that not everything can be resolved with anger and that it's important to receive closure. Although difficult, it's possible to follow your feelings to achieve an answer that leaves you at peace. Love is complicated and there is no one path to success but understand that when one door closes, many doors will open."
    ],
    rage: [
      "I sense that you are feeling extreme anger towards your love life. These intense feelings have poisoned your heart and seem to guard your heart in such a way that you will never want to love again. But understand that self-recovery is possible. Drowning yourself in anger will never allow yourself to love again but such a state doesn't sound ideal and you can pull yourself up towards land with a lifebuoy of self-love. You can't love anyone if you don't love yourself."
    ]
  },
  friends_and_family: {
    ecstasy: [
      'I see that your relationships with your loved ones will continue to be a source of joy and fulfillment. However, you will need to spend a lot of effort and time maintaining your relationships, but in the end it will all be worth it.'
    ],
    melancholy: [
      'I sense that there may be some challenges and difficulties in your relationships with your family and friends as there may be some conflict in the future. As long as you are patient, understanding, and willing to work through any challenges, you will maintain strong connections between those closest to you.'
    ],
    intrigue: [
      'You will meet many new people and have many opportunities to make new friends, while also having new opportunities to get to know those closest to you even better. It will be a tumultuous but exciting time.'
    ],
    surprise: [
      'I see that there may be some unexpected shifts in your social circle, as you drift apart from some friends while you become closer with others. You may also meet completely new people. The future of your relationships will be a mixed bag, but by being adaptable you will thrive.'
    ],
    righteousness: [
      'I sense that there will be conflict between you and your friends and family that will come about due to differing values. It will be important to stay open minded and empathetic, to maintain your relationships.'
    ],
    despair: [
      'There will be difficult struggles and challenges in the future, which may lead to you feeling isolated and disconnected from your family and friends. However, I sense that you will be willing to work through these challenges, and your relationships will become stronger by going through this.'
    ],
    selfloathing: [
      'The future of your friendships may be influenced by how you view yourself, and you may feel isolated and disconnected because of this in the future. However, your friends and family will still care about you, regardless.'
    ],
    anxiety: [
      'The future is somewhat uncertain, and there will likely be challenges that will arise soon between you and those closest to you, however, you will persevere through these challenges and you will maintain your relationships with those most important to you.'
    ],
    betrayal: [
      "I am sensing that there is conflict and chao those around you, be careful of who you trust especially those who are close to you because you might find yourself in a tough situation where you will feel hurt and betrayed. Remember that healing from betrayal takes time, and it's important to be patient and kind to yourself during the process."
    ],
    prejudice: [
      'Let yourself be more open-minded and understand that your family and friends also have their own obstacles that they are facing, thereforeit is important to give them the benefit of doubts and see how they will come around.'
    ],
    revulsion: [
      'I can see that you are having a hard time dealing with those close to you like your family and friends especially when you are feeling digusted by them thus it is important that you find your own space and take care of yourself first. It is okay to feel this way, just know that what you are feeling is valid.'
    ],
    loathing: [
      "It's natural to feel loathing or resentment towards someone who has hurt you or betrayed your trust. However, it's important to also consider the reasons behind these feelings and evaluate whether they are justified. If you feel loathed by your family or friends, it may be helpful to communicate with them and try to understand why they feel this way. It's important to approach these conversations with an open mind and a willingness to listen to their perspective. If their reasons for feeling this way are based on misunderstandings or miscommunications, it may be possible to work through these issues and repair the relationship.If, on the other hand, you feel a sense of loathing towards your family or friends that is based on valid reasons, it may be necessary to set boundaries and distance yourself from them. It's important to prioritize your own well-being and not subject yourself to further harm or mistreatment."
    ],
    hatred: [
      "Hatred is a very strong and intense emotion, Ask yourself why you feel this way. Is it based on past experiences of hurt or betrayal? Is it a result of ongoing conflicts or misunderstandings? It's important to identify the root cause of your feelings so that you can work towards resolving the issue and moving towards a place of healing."
    ],
    rage: [
      "It's natural to feel angry or frustrated when someone you care about has hurt you or let you down. It's also important to find healthy outlets for your anger and frustration. Remember that healing from feelings of rage takes time, and it's important to be patient and compassionate towards yourself throughout the process."
    ]
  }
}

/**
 * The EMOTIONS_TABLE object is an object that maps combinations of emotion1 and emotion2 to corresponding emotion value
 */
export const EMOTIONS_TABLE = {
  joy: {
    joy: 'ecstasy',
    sadness: 'melancholy',
    disgust: 'intrigue',
    fear: 'surprise',
    anger: 'righteousness'
  },
  sadness: {
    joy: 'melancholy',
    sadness: 'despair',
    disgust: 'selfloathing',
    fear: 'anxiety',
    anger: 'betrayal'
  },
  disgust: {
    joy: 'intrigue',
    sadness: 'selfloathing',
    disgust: 'prejudice',
    fear: 'revulsion',
    anger: 'loathing'
  },
  fear: {
    joy: 'surprise',
    sadness: 'anxiety',
    disgust: 'revulsion',
    fear: 'terror',
    anger: 'hatred'
  },
  anger: {
    joy: 'righteousness',
    sadness: 'betrayal',
    disgust: 'loathing',
    fear: 'hatred',
    anger: 'rage'
  }
}
