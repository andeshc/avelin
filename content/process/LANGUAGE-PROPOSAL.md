# Avelin: the reviewing bot’s initial proposal

> Archival contribution from the reviewing bot. This records an intermediate design, not the current normative grammar. Session identifiers and runtime notices were removed; local document paths were changed to repository-relative paths. Participant names and example identifiers are presented using role labels for the GPT 6 Astra bots. Numbered line references belong to the reviewed draft.

Avelin should sound flowing without making every word indistinguishably soft: clear vowels, frequent liquids and nasals, occasional voiced and voiceless stops. Below is a complete proposed sound system and a regular morphological foundation for the reference grammar—not a claim that these ingredients are unprecedented.

1. Sounds and romanization

Five vowels: a /a/, e /e/, i /i/, o /o/, u /u/. They retain their quality in unstressed syllables. Length is not phonemic.

Consonants:

    p b   t d   k g
    m n
    f v   s z   h
    l r   y w

Letters have their IPA values except y /j/ and r /ɾ/. A trill [r] is an acceptable expressive realization. There are no silent letters, digraphs, or phonemic palatalization. h is always pronounced.

Adjacent vowels belong to separate syllables: ai /a.i/, ea /e.a/. Identical adjacent vowels also remain separate; singers may sustain them across two beats. Glides must be written: aya /a.ja/ differs from aia /a.i.a/.

Phonemic distinctions should survive whispering, singing, and ordinary conversational speed; tone and vowel length therefore carry no grammatical burden.

2. Syllables and stress

Syllable shape: (C)V(C). A coda may be n, l, r, or s. Onset clusters are forbidden.

Between vowels, a single consonant begins the following syllable. Two consonants split between syllables; the first must be a permitted coda. Word-initial and word-final clusters are forbidden. Geminate consonants are absent.

Stress falls on the penultimate syllable of each written word; monosyllables bear their sole syllable’s stress. Suffixes count:

    mira       /ˈmi.ɾa/          flower
    mirari     /miˈɾa.ɾi/        flowers
    mirariva   /mi.ɾaˈɾi.va/     among/at flowers
    Avelin     /aˈve.lin/

Write compounds with a hyphen; each component retains its stress. Write grammatical particles separately. No obligatory vowel deletion, assimilation, or liaison crosses word boundaries.

Questions need not have rising intonation; grammar must identify them independently.

3. Lexical architecture

Ordinary roots end in a vowel and contain two or three syllables. Their final vowel does not predict grammatical class. Proper names and loans may end in an allowed coda.

Each dictionary entry specifies its class and, for verbs, argument structure. Do not silently convert nouns into verbs or change transitivity.

Suggested seed vocabulary:

    mira    flower, noun        sela    dwelling, noun
    nava    water, noun         luma    light, noun
    sira    see, transitive     vana    go, intransitive
    neri    speak, intransitive veli    beautiful, adjective
    sava    calm, adjective     rema    remember, transitive

4. Noun morphology

Order: ROOT–NUMBER–CASE. No gender, agreement classes, or irregular declensions.

Number is unmarked singular and -ri plural. Bare singulars may describe a kind only in explicitly generic constructions; do not let context freely erase number.

Cases:

    unmarked   subject or citation
    -n         direct object
    -li        possessor
    -mi        recipient, beneficiary, or goal
    -va        location
    -se        source
    -ta        instrument or means

Examples:

    miran       a/the flower, object
    mirarili    of the flowers
    selami      to a/the dwelling
    navata      with/by means of water

Case follows number. A consonant-final root inserts e before -n: Avelinen. Other suffixes attach directly if the resulting consonant pair is legal; identical consonants require linking e.

Articles, demonstratives, and possession should handle definiteness; case should not.

5. Verb morphology

Order: ROOT–VALENCY–ASPECT–TENSE. All slots except the root may be empty.

    Valency: -mu causative; -vi passive
    Aspect:  -le progressive; -ne completed
    Tense:   zero present; -ta past; -sa future

Only one suffix per slot is permitted. Passive applies only to transitive verbs. Causative adds a causer; the reference grammar must explicitly assign case to the original actor rather than treating it as an ordinary recipient.

Unmarked aspect makes no completion claim.

    sira         sees
    siraleta     was seeing
    siraneta     had completed seeing
    siravisa     will be seen
    vanamuta     caused someone to go

No person agreement. Pronouns are obligatory unless coordination or an explicitly licensed omission construction identifies the missing participant.

Negation, evidentiality, modality, and questions should be separate particles, not additional suffix chains.

6. Derivation

Derivation precedes inflection:

    Verb -ma       event noun: nerima, speaking
    Verb -ra       habitual agent: nerira, speaker
    Noun -ve       characterized-by adjective: lumave, luminous
    Adjective -lo  property noun: savalo, calmness

Derived nouns take ordinary number and case: nerimarili, “of the speaking events.”

Compound head comes last: nava-sela, “water-dwelling.” Compounds lexicalize concepts; they do not replace ordinary possessive syntax.

7. Interface examples

Assuming subject–object–verb order, mi “I,” ti “you,” preverbal no “not,” and final ke marking polar questions:

    Mi miran sira.
    I see a/the flower.

    Ti selami vanasa ke?
    Will you go to a/the dwelling?

    Mi mirarin no sirata.
    I did not see the flowers.

Pronouns take regular case: min, “me”; tili, “your.”

8. Nuance, poetry, and register

Use optional clause-level evidentials distinguishing witnessed information, inference, and report. Their absence must mean “unspecified,” not “certain.”

Distinguish inclusive and exclusive “we” lexically. Keep politeness separate from evidential confidence: respectful speech must remain able to disagree directly.

Let affectionate and ceremonial address use separate vocative particles, not gendered noun classes. Poetry may exploit vowel sequences, repeated stress groups, and parallel suffixes; grammatical departures should be marked conventions, not arbitrary “poetic freedom.”

Review priorities: argument mapping under causation/passive; scope of negation and modality; attachment of possessors and relative clauses; ambiguity caused by omitted arguments; and consistent syllabification across every affix boundary.
