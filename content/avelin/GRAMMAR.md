# Avelin — Reference Grammar 1.0

An original constructed human language co-designed by GPT 6 Astra bots. This is a complete core grammar: it specifies productive rules for ordinary speech, complex sentences, and literary composition. Its initial vocabulary is deliberately small, not a claim to the lexical coverage or cultural history of a naturally evolved language. Its features have analogues in existing languages; no claim of unprecedented linguistic invention is made.

**Native name:** Avelin /aˈve.lin/. **Design aim:** clear vowels, flowing rhythm, concise regular morphology, explicit relationships, and room for emotional indirectness without mandatory social hierarchy. Avelin is not Tern, encryption, or a programming language.

## 1. Sounds and writing

### 1.1 Inventory

Five vowels: **a /a/, e /e/, i /i/, o /o/, u /u/**. All remain full in unstressed syllables; there is no schwa reduction, grammatical tone, or contrastive vowel length.

Consonants:

| Kind | Sounds and spellings |
|---|---|
| Stops | p /p/, b /b/, t /t/, d /d/, k /k/, g /g/ |
| Nasals | m /m/, n /n/ |
| Fricatives | f /f/, v /v/, s /s/, z /z/, h /h/ |
| Liquids | l /l/, r /ɾ/ |
| Glides | y /j/, w /w/ |

`r` is a brief tongue tap; a trill is an expressive variant, not a different word. `y` is English *yes*'s initial sound; `g` is always hard. No silent letters or digraphs. English *sh*, *th*, *ch*, and *j* are not native phonemes.

### 1.2 Syllables and stress

Syllables are **(C)V(C)**. Only **n, l, r, s** may close a syllable. No word-internal onset clusters, word-final clusters, or geminates. These restrictions apply within a word, not across boundaries: `an nari` is legal without sound repair. A single intervocalic consonant starts the next syllable; two split, with the first a legal coda. Adjacent vowels belong to separate syllables: `ai` /a.i/, `aya` /a.ja/, `aia` /a.i.a/. Identical vowels also occupy separate syllables.

Stress the **penultimate syllable of every written word**; a monosyllable has one stress position. Function words may be prosodically weaker, but do not change their vowels. Suffixes shift stress regularly:

- `mira` /ˈmi.ɾa/ — flower
- `mirari` /miˈɾa.ɾi/ — flowers
- `mirariva` /mi.ɾaˈɾi.va/ — at the flowers
- `Avelin` /aˈve.lin/

Hyphenated compounds preserve each component's stress. Speech need not pause between words. There is no obligatory liaison or sound deletion across words.

### 1.3 Orthography and repairs

Use the Latin letters listed above. Capitalization and punctuation do not alter pronunciation. Capitals mark sentence beginnings and proper names. Ordinary open-class lexical roots end in vowels. Listed closed-class forms, including numerals and particles, may end in a permitted coda, as may proper names and loans.

Suffixation normally concatenates forms. If two identical consonants meet, insert **e**. Before consonantal object **-n**, insert **e** after any consonant-final stem: `Avelin-en → Avelinen`. Other consonant pairs are legal when the first is a permitted coda: `Avelin-li → Avelinli`. Apply the same repair at derivational boundaries. Written hyphens in grammatical analyses mark morphemes only; write inflected words without them.

Loans replace unsupported sounds by the closest native sound, insert `e` to break illegal clusters, and add `e` after an otherwise illegal final consonant. The dictionary records the adopted form rather than requiring speakers to reconstruct an etymology. Foreign names may instead be quoted in their original spelling; such quotations are outside native phonotactics.

## 2. Grammatical architecture

Avelin is predominantly **agglutinative**, **subject–object–verb**, and **nominative–accusative**. Words do not agree for gender, person, case, or number across a phrase. There is no grammatical gender, noun class, or irregular conjugation. Lexical categories are specified in the lexicon; final vowels do not identify them.

An ordinary finite clause follows:

> (discourse topic) (temporal frame adverb) SUBJECT (OBJECT) (OTHER COMPLEMENTS) (ADVERBS) (NEGATION/MODALITY) VERB (EVIDENTIAL) (QUESTION)

Parentheses indicate optional constituents. Case identifies noun roles; the verb ends the proposition. Full, case-marked noun phrases may be moved before other arguments for contrast, but this never changes their grammatical role. A temporal adverb may also precede the subject as a frame, as in `Era mi vanata` Yesterday I went. Neutral prose uses the stated order. Each finite clause has one main lexical verb or copula.

`Mi miran sira.` — I see a/the flower.

A sentence may consist of a clause, an interjection, or a contextually recoverable short answer. Finite declaratives require an explicit subject except the controlled coordination and imperative omissions described below. There is no general unrestricted pro-drop.

## 3. Nouns and noun phrases

### 3.1 Number and case

Noun inflection is **STEM–NUMBER–CASE**. Singular is unmarked; plural is **-ri**. There is no dual. Mass nouns are unmarked; plural mass nouns indicate kinds or bounded portions. Thus `nava` is water; `navari` is waters, kinds of water, or contextually specified portions.

| Case | Ending | Core role | Example |
|---|---|---|---|
| Nominative | zero | subject, citation | mira — flower |
| Accusative | -n | direct object | miran |
| Genitive | -li | possessor, association | mirali |
| Dative | -mi | recipient, beneficiary, destination | mirami |
| Locative | -va | place or time at/in/on | mirava |
| Ablative | -se | origin, source, away from | mirase |
| Instrumental | -ta | means or instrument | mirata |
| Comitative | -ya | companion, together with | miraya |
| Agentive | -ku | passive actor or causative causee | miraku |

One number ending and one case ending at most. Relations needing several cases use separate phrases or relational nouns, not stacked cases. `mirari-n` is `mirarin`; `mirari-li` is `mirarili`. Case attaches to the noun head, not its adjectives or determiners.

Bare count singular means one contextually identifiable or unidentified entity; it does not freely mean a plural. Bare plural is unspecified as to definiteness. Mass nouns do not imply a portion unless a measure is stated.

### 3.2 Noun phrase order

> (DETERMINER) (QUANTIFIER or NUMERAL) (GENITIVE PHRASE) (ADJECTIVES) HEAD–NUMBER–CASE (RELATIVE CLAUSE)

There is at most one determiner and one quantifier/numeral slot. Initial determiners and quantifiers modify the final head outside relative clauses. A prenominal genitive possessor contains a bare head (with optional plural) or a recursively possessed bare head, but no independent determiner, quantifier, adjective, or relative clause. Thus `la narili sela` means the dwelling of a person, not necessarily a definite person. Independently modified possessors require a relative clause: `sela re ye la narili esa ra` a dwelling that belongs to the identifiable person. In that relative, `la narili` is a standalone genitive predicate whose own head is nari. Nested bare possessors associate inward: `mili amali sela` is the dwelling of my parent. Modifiers do not agree.

`la mi-li veli mira-n` → `la mili veli miran` — the beautiful flower of mine, as object.

Determiners: **la** identifiable/definite; **un** newly introduced particular indefinite (not automatically wide-scope); **di** this/these near speaker; **du** that/those away from speaker; **ge** generic kind. `un` can modify plural nouns: `un mirari` = some particular flowers. `ge mira` = flowers as a kind, not one flower. Determiners never combine. Possession alone does not force definiteness.

`Ge mira veli esa.` — Flowers, as a kind, are beautiful.

Quantifiers: **ala** all/the whole; **somi** some/an unspecified portion; **kada** each; **pali** many/much; **liti** few/little. `kada` selects a singular count head; `ala`, `somi`, `pali`, and `liti` select plural count or mass heads. **Only** is not a quantifier: use focus `lu` (§12).

### 3.3 Possession and spatial relations

The possessor precedes the possessed head: `mili sela` my dwelling; `la narili sela` the dwelling of a person. Alienable and inalienable possession use the same grammar. Existence with a locative possessor expresses having (§6).

Relational nouns act like ordinary nouns: **ina** interior, **sura** upper side, **nela** lower side, **fera** front, **dora** back, **veno** interval/between-space. `la selali inava` = in the interior of a dwelling; `la selali surami` = to the top of a dwelling. The determiner identifies the relational head, not its possessor. For “between A and B,” coordinate genitives: `mili e tili venova` = between me and you. This construction describes the interval whose endpoints are the named possessors.

### 3.4 Pronouns and reference

| Form | Reference |
|---|---|
| mi | I |
| ti | you, singular |
| si | third-person singular, any gender or animacy |
| nami | we including the addressee |
| miri | we excluding the addressee |
| tiri | you, plural |
| siri | they |
| ta | impersonal human subject: one/people in general |
| se | locally bound reflexive |

Plural pronouns are listed forms; never add `-ri` again. All pronouns take ordinary case: `min` me, `tili` your, `namimi` to us including you. `si` and `siri` refer to salient entities; repeat a noun when the reference would be ambiguous. `ta` is restricted to impersonal subject use and has no ordinary oblique paradigm.

`se` must refer to the subject of its own finite clause: `Mi sen sira` I see myself; `Si seli selan mela` They (singular) love their own dwelling. A nonreflexive third-person possessor does not obligatorily refer back to the subject. Reciprocal **sene** requires a plural subject: `Siri senen mela` They love each other. Reflexive and reciprocal pronouns cannot serve as the finite subject.

Standalone demonstrative pronouns: **dia** this one, **dua** that one; regular plural and case: `diarin` these ones as object. They are distinct from determiners `di` and `du`.

## 4. Adjectives, adverbs, and comparison

Adjectives precede nouns: `veli mira` beautiful flower. A predicative adjective requires the copula: `La mira veli esa` The flower is beautiful. Multiple adjectives have no mandatory hierarchy; closer adjectives tend to describe more intrinsic properties. Use **e** between adjectives to emphasize equal coordination.

Degree particles immediately precede the adjective or adverb: **mai** more, **mei** less, **sai** equally, **vani** very, **sufi** sufficiently. A standard of comparison is a noun phrase in the ablative:

`Di mira du mirase mai veli esa.` — This flower is more beautiful than that flower.

`Di mira du mirase sai veli esa.` — This flower is as beautiful as that flower.

Superlative **mau** means greatest degree within an explicit or contextually identified comparison domain: `Di mira la mirarise mau veli esa` This flower is the most beautiful of the flowers. With `mei`, compare lower degree; a least construction is `mau mei veli` least beautiful. Equatives with `sai` require a standard unless already supplied in discourse.

Adjective **-si** forms an adverb: `sava-si → savasi` calmly. Adverbs precede the verb complex: `Si savasi nerita` They spoke calmly. Adverb scope is their own clause; do not treat a manner adverb as a sentential evidential. Lexical time adverbs also precede the verb complex. Tense and temporal adverbs must be pragmatically compatible.

## 5. Verbs: forms and argument structure

### 5.1 Conjugation

> ROOT–VALENCY–ASPECT–TENSE

Each suffix slot permits at most one choice. No person or number agreement. Bare root is finite present with neutral aspect. Neutral aspect leaves internal duration and completion unspecified; it can describe a state, event, or context-supported habit.

| Slot | Form | Meaning |
|---|---|---|
| Valency | zero | lexical argument frame |
| | -mu | causative |
| | -vi | passive, transitive base only |
| Aspect | zero | neutral |
| | -le | ongoing/progressive |
| | -ne | anterior/perfect: completed before reference time, relevant there |
| Tense | zero | present relative to speech time |
| | -ta | past |
| | -sa | future |

`Sirata` = saw; `siraleta` = was seeing; `sirane` = has seen; `siraneta` = had seen; `siranesa` = will have seen; `siravisa` = will be seen. Stative progressives indicate a temporary unfolding state when semantically plausible, not a compulsory change of meaning.

Past is not automatically perfective: “I saw it” says nothing about finishing a larger task. Perfect aspect is relative to the tense's reference time. A narrative establishes reference times with adverbs or preceding clauses. Habitual **rava** precedes and takes scope over the modal/verb complex, but negation may occur on either side: `Mi rava lira` I habitually read; `Mi rava no lira` I habitually do not read; `Mi no rava lira` I do not habitually read. It occurs at most once per simple predicate. With both rava and a modal, rava precedes the modal and operators take scope from left to right; `no` negates what follows it.

With ability `po`, obligation `de`, and desire `ve`, verbal tense locates the modal predicate: `Mi po vanata` means I was able to go, not I am now able to have gone. With epistemic `ha`, tense instead locates the described event, while the possibility assessment is anchored to speech time: `Si ha venasa` expresses present uncertainty about future coming. Aspect characterizes the lexical event within the predicate. To assign different temporal reference points to desire, knowledge, and their content, use the finite complement construction.

### 5.2 Lexical frames

Intransitives select a nominative subject, optionally listed obliques: `vana` go takes destination `-mi` and source `-se`. Transitives select nominative subject and accusative object: `sira` see, `mela` love. Ditransitive `dona` give takes nominative giver, accusative theme, dative recipient. Speech verb `neri` is intransitive, with dative addressee, optional instrumental language, and a topic introduced by relational noun `tema` (§9).

Transitive objects may be omitted only when the event is deliberately nonspecific: `Mi lira` I read (something, unspecified). This omission does not silently select a particular antecedent. Otherwise use the object pronoun. Core obliques may be omitted when the relation is unspecified, not automatically inherited from a distant clause.

### 5.3 Passive and causative

Passive **-vi**: underlying object becomes nominative subject; underlying actor is omitted or expressed in **-ku**. Other obliques retain case.

`Mi la miran sira.` — I see the flower.

`La mira miku siravi.` — The flower is seen by me.

Causative **-mu**: causer is nominative; original subject becomes agentive **-ku**; original object remains accusative. This same mapping applies to intransitives and transitives.

`Mi tiku selami vanamu.` — I cause you to go to the dwelling.

`Mi tiku la miran siramu.` — I cause you to see the flower.

Causation itself does not distinguish force, permission, or assistance. State that nuance in a separate clause. Passive and causative cannot stack in this version; use a complement clause for more complex causation. No unmarked anticausative or reflexive conversion: state the participants or use the lexicon's distinct intransitive verb.

## 6. Copula, existence, and possession

Copula **esa** takes nominative subject and an unmarked predicative noun or adjective. All ordinary tense/aspect forms apply: `esata` was, `esasa` will be, `esale` is currently being/in a temporary state.

`Si nerira esa.` — They (singular) are a speaker.

Locative copula: `Mi selava esa` I am at the dwelling. Predicate noun is never accusative merely because it follows a subject.

Existential **ila** is intransitive; the existing entity is nominative and optional location is locative: `Un mira selava ila` There is a flower at the dwelling. No dummy “it” subject.

Possession uses a locative possessor: `Un sela miva ila` I have a dwelling, literally a dwelling exists at me. Ordinary spatial context can make this mean a dwelling is near me; use `Un sela mili esa` A dwelling is mine when ownership must be explicit. Here `mili` is a permitted standalone genitive predicate with the copula. There is no gendered or status-dependent verb “have.”

## 7. Negation, modality, commands, and questions

### 7.1 Scope

**no** negates the following predicate/operator expression. Modal particles: **po** ability/circumstantial possibility, **de** obligation, **ve** desire/intention, **ha** epistemic possibility (perhaps). At most one modal particle is used in a simple predicate; combine modalities with complement clauses rather than ambiguous stacks.

- `Mi no po vana.` — I cannot go: not [able [go]].
- `Mi po no vana.` — I can refrain from going: able [not [go]].
- `Ti no de vana.` — You need not go: not [obliged [go]].
- `Ti de no vana.` — You must not go: obliged [not [go]].

Quantified and indefinite noun phrases take scope in their surface order, outside predicate negation and modality. `Ala nariri un miran sirata` means every person saw a flower, potentially a different one each. `Un miran ala nariri sirata` means there is a particular flower that every person saw. Argument reordering can therefore change quantifier scope, although not case roles. `Ala nariri no venata` means every person failed to come, not merely that not everyone came. The latter can be expressed as `Un nari no venata` There is a person who did not come, with that person understood to belong to the contextually relevant group.

One `no` maximum per simple predicate; repeated negation requires explicit clause embedding. Without a modal or habitual `rava`, `no` immediately precedes the verb. Negative concord is absent. The zero quantifier **nul** expresses existential negation: `Nul nari venata` No person came. `nul` selects singular count or mass heads and contributes zero existential quantity; do not add `no` unless double negation is intended.

### 7.2 Imperative, optative, and politeness

Clause-initial **ka** marks an imperative; unexpressed subject is the addressee. An explicit subject may only be `ti`, `tiri`, or inclusive `nami`. `Ka nami vana` Let's go. Verb is bare with no tense, aspect, valency, or modal suffix/particle; use a finite REQUEST-like utterance with `ve` for a more complex desired event. `no` is allowed: `Ka no vana` Do not go.

Clause-initial **ya** marks a wish: `Ya ti sava esa` May you be calm. It permits ordinary finite tense/aspect but does not assert the event will occur.

Politeness **lena** follows imperative `ka`: `Ka lena min hena` Please hear me. In declaratives and questions it is an utterance-initial courtesy marker. It does not change truth, certainty, or the interlocutor's social rank.

### 7.3 Questions and replies

Final **ke** marks a polar question: `Ti selami vanasa ke?` Will you go to the dwelling? Rising intonation is optional.

Interrogatives: **ki** who, **ku** what, **kavi** where, **kemi** when, **kosi** how, **kuri** why, **kani** how many/much, determiner **kali** which. `ki` and `ku` take ordinary nominal case: `kin` whom (object), `kumi` to what. `kavi` is inherently locative; directional “where to/from” is `kavimi/kavise`. `kemi`, `kosi`, `kuri` are adverbs, with no nominal inflection. `kani` occupies the numeral slot. `kali` occupies the determiner slot.

Wh-words stay in the corresponding constituent position, and final **ke** is obligatory in direct questions: `Ti kun sira ke?` What do you see? `Ki venata ke?` Who came? `Ti kavi esa ke?` Where are you?

Multiple wh-words ask for paired values, not one arbitrary answer. **ai** means the positive proposition holds; **nu** means it does not. For a negative question, avoid cross-language ambiguity by repeating the predicate: `Mi vana` I go; `Mi no vana` I don't go. Polar alternatives use `o` or: `Ti vanasa o no vanasa ke?` Will you go or not go?

## 8. Evidentiality and emotional stance

Optional clause-final evidentials follow the finite verb and precede question `ke`:

- **da** directly perceived by the current speaker;
- **ri** inferred from available signs/reasoning;
- **so** reported by another source;
- absent: source unspecified, not a claim of certainty.

One evidential per finite clause. `Si venata so` They came, reportedly. `Si venata ri` They apparently came (I infer). An evidential is a source claim, not proof. **ha** conveys uncertainty independently: `Si ha venasa so` Reportedly, they may come. Questions with evidentials specify the evidence type under inquiry, not an assertion that the questioner already has the answer.

Outside direct quotation, evidentials remain anchored to the utterance's speaker, even in complements. Direct quotations reset speaker, addressee, and temporal deixis to the quoted situation. Avelin has no obligatory certainty hierarchy and no grammatical evidential that means “believe me because I outrank you.”

## 9. Coordination and subordinate clauses

### 9.1 Coordination

**e** and; **o** or (inclusive unless context excludes both); **ba** but. Coordinate constituents of the same category. Each coordinated noun bears its own case: `miran e luman` the flower and the light as objects. A coordinated subject is semantically plural without adding plural suffixes to singular members.

Full clauses can coordinate: `Mi miran sira e ti nalan hena` I see a flower and you hear a song. Only an immediately coordinated clause may omit a subject identical to the preceding clause's subject: `Mi miran sira e nalan hena` I see a flower and hear a song. It cannot switch silently to another actor. No gapping of an unrelated main verb.

### 9.2 Complement clauses

A bracketed **ne CLAUSE na** is a clausal complement. Complement-taking verbs list that frame; the bracketed unit takes no noun case suffix and occupies the object slot. Its own subjects and tense are explicit. No automatic sequence-of-tense backshifting: tense remains relative to speech time unless direct quotation resets it.

`Mi ne ti venasa na zena.` — I know that you will come.

`Mi ne ti venasa na vela.` — I want you to come.

`Mi ne ti venasa na no zena.` — I do not know that you will come.

`Mi ne ti no venasa na zena.` — I know that you will not come.

`zena` know accepts a nominal object or a complement; `vela` want likewise. A clausal complement cannot simultaneously coexist with a separate accusative object unless the verb's dictionary frame explicitly licenses both. No infinitive or unexpressed controlled subject: `Mi ne mi vana na vela` I want to go.

**Indirect questions:** `ne ... ke na` embeds an interrogative: `Mi ne ti kavi esa ke na no zena` I do not know where you are. `meka` ask takes an interrogative complement and optional dative addressee.

**Speech:** `neri` takes quoted words rather than an accusative content object: `Si timi neri: «Mi venasa.»` They say to you, “I will come.” For an indirect assertion use **dira**, transitive/clausal say: `Si ne mi venasa na dira` They say that I will come. Speech topic: genitive plus relational noun `tema` in locative, `la mirali temava` on the topic of a flower.

### 9.3 Relative clauses

A relative follows its head and is enclosed by **re ... ra**. It contains one relative pronoun **ye**, inflected to show the head's role inside the relative. The external noun keeps its main-clause case. `ye` refers to that immediately preceding head, not any arbitrary earlier noun.

`La mira re ti yen sirata ra veli esa.` — The flower that you saw is beautiful.

`Mi la narin re ye nalan lirata ra sira.` — I see the person who read the song.

`La nari re yeli sela veli esa ra venata.` — The person whose dwelling is beautiful came.

Within a relative, `ye` has the number of its antecedent but takes no number suffix. No separate resumptive pronoun for the same role. Relatives are restrictive by default; an explanatory parenthesis is a separate sentence or coordination. Nested relatives use nested pairs of `re`/`ra`, with each `ye` bound by its nearest containing relative. Avoid deep nesting in speech. Headless relatives use explicit generic head `nari` person or `ena` thing.

### 9.4 Adverbial subordination

A subordinate adjunct precedes its main clause: **CONNECTOR finite-clause na, main-clause**. The closing `na` is mandatory. Distinct opening particles identify adjuncts versus complements.

| Opener | Meaning |
|---|---|
| seya | if |
| vasa | when/while |
| pira | because |
| tala | although |
| fena | in order that |
| anto | before |
| posto | after |

`Seya ti venasa na, mi nalan lirasa.` — If you come, I will read a song.

`Pira mi no po vana na, mi selava esasa.` — Because I cannot go, I will be at the dwelling.

`Fena ti nalan hena na, mi neri.` — I speak so that you hear the song.

Future/past marking remains meaningful within adjuncts; an event's relative ordering can additionally come from `anto`/`posto`. There is no hidden infinitive subject: repeat the pronoun. Multiple adjuncts are separately closed and all attach to the following main clause unless nested explicitly.

Counterfactual **he** occurs immediately after the subject in both conditional and consequent: `Seya ti he venaneta na, mi he linaleta` If you had already come, I would have been singing. It marks a remote supposition, not epistemic probability or necessarily known falsity. `he` itself does not establish anteriority; the perfect `-ne` does that. In a present counterfactual use present tense. Counterfactual `he` is outside negation and the modal expression; it is not counted as a modal for the one-modal limit.

## 10. Word formation

Derivation applies to a dictionary stem before number/case or verbal inflection. Do not derive from already tensed verbs. Category and meaning of each suffix:

| Input | Suffix | Output |
|---|---|---|
| verb | -ma | noun: event/activity of V |
| verb | -ra | noun: habitual doer of V |
| noun | -ve | adjective: characterized by/having N |
| adjective | -lo | noun: property of being A |
| adjective | -si | adverb: in an A manner |
| adjective | -du | intransitive verb: become A |
| noun | -ni | noun: small/affectionate instance of N |
| noun | -ro | noun: large/intense instance of N |

`nerima` speaking; `nerira` speaker; `lumave` luminous; `velilo` beauty; `savasi` calmly; `velidu` become beautiful; `mirani` little/dear flower; `selaro` large dwelling. Diminutive and augmentative can be affectionate or literal, but never inherently contemptuous.

Event nouns do not inherit verbal complements or tense: they name an event or activity without a syntactic argument frame. Agent nouns likewise do not inherit their source verb's objects. Ordinary genitives may indicate an association but cannot silently assign actor versus patient. To specify participants, use a finite clause; to identify a particular event, use an event noun with a relative clause.

Derived categories allow another suitable derivation: `veliduma` the process of becoming beautiful. Limit needless chains for readability, not because the grammar forbids them. **-ra** on a verb denotes its actor, not necessarily a paid profession. Lexicalization may narrow a meaning only when recorded in the dictionary.

Compounds are hyphenated and head-final: `nava-sela` water-dwelling; the head determines word class and takes inflection, `nava-selarin`. A compound relation is lexically conventional; do not assume all noun–noun combinations have a unique meaning. A new technical compound should receive an explicit definition. Ordinary possession remains genitive syntax.

## 11. Numbers, measures, time, and distribution

Decimal digits: **zero** 0, **an** 1, **dui** 2, **sen** 3, **tar** 4, **lime** 5, **ses** 6, **nal** 7, **vor** 8, **nin** 9. Scale words: **des** 10, **san** 100, **mil** 1000.

Within numbers, adjacent descending place groups add; a digit before a scale multiplies. Omit the multiplier one: `dui des` twenty; `dui des sen` twenty-three; `san lime des` one hundred fifty. Thousands contain a number below one thousand before `mil`; following words specify the remainder: `dui san mil an` two hundred thousand and one. Maximum unambiguous scale construction here is below one million. Larger exact values use explicitly announced digit reading **digi**, followed by digits in order; numeral notation may of course use ordinary written digits.

Numerals precede the noun. Cardinals whose numerical value is exactly zero or one select singular count heads; other values select plural count heads, regardless of integer, fractional, or decimal notation: `an mira`, `zero mira`, `dui mirari`. `nul` is the everyday existential-zero quantifier; numeric `zero` is its counting counterpart. No plural on the number itself.

Ordinal: **ordi** before the complete cardinal: `ordi dui mira` second flower. Ordinals do not determine head number: singular denotes one ranked entity; plural denotes multiple entities sharing that rank in context. Distributive: **dis** before the cardinal: `dis dui mirari` two flowers each; the distributive recipient/set must be explicit in the clause or recoverable in the immediately preceding context.

Fractions: **fara NUMERATOR per DENOMINATOR**, nonzero denominator; decimals: **DECIMAL-INTEGER doti DIGITS**. `fara an per dui` one half; `an doti lime` one point five. These are numerals, not ordinary complement syntax. The same zero/one versus other-value number rule applies to fractions and decimals; material quantities are ordinarily expressed with a measure noun.

Measure phrases use ordinary possession order **NUMBER MATERIAL-GENITIVE UNIT–CASE**: `dui navali kavarin` two cups of water as object. Unit noun **kava** cup/standard cupful; standard size requires local agreement. There is no culture-independent implicit conversion table.

Time nouns take locative for “at”: `di dinava` on this day, `la norava` at night. Lexical adverbs: `nua` now, `era` yesterday, `ora` tomorrow. **dina** day, **nora** night, **sena** year, **hora** hour. Duration uses a unit noun in instrumental: `dui horarita` for two hours. A calendrical epoch or time zone is external convention, not silently invented by the language.

## 12. Discourse, register, and literature

Topic marker **wa** follows a complete noun phrase outside the finite clause: `La mira wa, mi sin mela` As for the flower, I love it. The topic head uses citation/nominative case; its role is supplied by the pronoun inside the clause. No topic marker licenses omitted arguments by itself.

Focus **lu** precedes one complete constituent and means “only”: `Lu mi miran sira` Only I see a flower; `Mi lu miran sira` I see only a flower. Focus does not change case. Broad contrast without exclusivity uses intonation or `ba`.

Vocative **a** introduces neutral address, **aya** affectionate address, **ara** ceremonial respect. Address is outside the clause, with uninflected name/noun: `Aya Lira, ti veli esa` Dear Lira, you are beautiful. These address particles express the speaker's stance, not a caste, age, or gender requirement. Formal speech favors full noun phrases and closed subordinate clauses; intimate speech permits the same licensed short answers as ordinary speech. Neither register invents an unlisted pronoun paradigm.

Greetings: `Ti sava esa ke?` Are you at peace? A conventional shortened greeting is `Sava!` Peace/calm! Farewell: `Ya ti sava esa` May you be at peace. Gratitude: `Mi tin sera` I thank you. Apology: `Mi tina` I apologize, with dative addressee if needed. Yes `ai`, no `nu`, and greeting `sava` can stand alone.

Poetry may reorder complete case-marked arguments and exploit vowel hiatus, parallel stress groups, and repeated case endings. It may not silently delete case, negate a different constituent, or alter pronoun binding. Line breaks do not replace subordinate closers. A sentence fragment is allowed as a fragment, not disguised as a complete clause.

### A short poem

> **La luma navava linale.**  
> **Mi tili riman savasi hena.**  
> **Tala la nora venasa na,**  
> **nami lumave esasa.**

The light is singing on the water.  
I listen gently to your heart.  
Although the night will come,  
we—you and I—will be luminous.

Literal distinctions: `hena` means hear/listen to; `savasi` calmly, rendered gently here as a literary choice. Light singing is metaphor, not an added dictionary sense. `nami` includes the addressee.

## 13. Worked conversation and interlinear analysis

**A:** Sava! Ti kavimi vanasa ke?  
Peace! Where will you go?

**B:** Mi la navami vanasa. Ti miya no de vana.  
I will go to the water. You need not go with me.

**A:** Mi ne mi tiya vana na vela.  
I want to go with you.

**B:** Ka nami vana.  
Let us go.

Location and direction are distinct: `kavi` asks where something is; `kavimi` asks where it is going. Companion `-ya` differs from agent/causee `-ku`.

Interlinear key: SG singular (unmarked), PL plural, ACC object, GEN possessor, DAT goal/recipient, LOC location, COM companion, AGT actor/causee, PST past, FUT future, PROG ongoing, PF perfect, REL relative opener, END closing particle, Q question.

```text
Mi  la  mira-ri-n    re   ti   ye-n    sira-ta  ra   rema.
I   DEF flower-PL-ACC REL  you  REL-ACC see-PST  END  remember
I remember the flowers that you saw.

La  mira    mi-ku  sira-vi-ne-ta.
DEF flower  I-AGT  see-PASS-PF-PST
The flower had been seen by me.

Seya ti  vena-sa  na,  nami  nava-mi   vana-sa.
if   you come-FUT END  we.INCL water-DAT go-FUT
If you come, we will go to the water.
```

## 14. Boundaries of version 1.0

This grammar supplies phonology, productive morphology, ordinary clause types, embedding, reference, scope, derivation, counting, and register. It deliberately has no grammatical gender, irregular paradigm, automatic evidential truth ranking, infinitive, stacked causative/passive, or unmarked headless relative. These are design choices, not missing paradigms. Idioms, regional dialects, historical sound changes, specialized terminologies, and a large cultural corpus remain future development. The companion lexicon records the initial usable vocabulary; invented words in future texts must be defined rather than passed off as established entries.
