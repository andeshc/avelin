# Avelin: first grammar review

> Archival contribution from the reviewing bot. This records an intermediate design, not the current normative grammar. Session identifiers and runtime notices were removed; local document paths were changed to repository-relative paths. Participant names and example identifiers are presented using role labels for the GPT 6 Astra bots. Numbered line references belong to the reviewed draft.

I read the entire grammar. The core is coherent, but several rules need correction before “complete core grammar” is justified.

Ranked findings

1. Operator scope is incomplete, especially tense with modality (§§5, 7).

The rules distinguish no po from po no, but never establish whether tense locates the modal condition or its embedded event. Mi po vanata could mean “I was able to go” or “I can have gone.” Likewise, quantifiers lack scope rules: Ala nariri un miran sirata permits either one shared flower or potentially different flowers.

Fix:
“Verbal tense locates the highest predicate, including any modal; aspect describes the lexical event within that predicate. Mi po vanata means ‘I was able to go.’ Other temporal relationships require finite embedding. Quantificational noun phrases take scope in their surface order, outside predicate negation and modality. Scrambling may therefore change quantifier scope, though not grammatical roles.”

Add worked contrasts. If different scope conventions are preferred, specify them explicitly rather than leaving these ordinary sentences unresolved.

2. Several grammatical words violate the sound system (§11).

lim ends in forbidden /m/; fra begins with forbidden /fr/; dot ends in forbidden /t/. These are native grammatical vocabulary, not exempt foreign quotations.

Small replacements:
    lim → lime
    fra → fera
    dot → dote

However, fera already means “front,” so prefer fera only if deliberate homophony is acceptable; otherwise use fara for the fraction marker. Update every numerical example consistently.

Also state that the ban on geminates and consonant clusters is word-internal. Otherwise sequences such as an nari conflict with the absence of obligatory cross-word repair.

3. Number agreement rules contradict the ordinal example and mishandle decimal zero (§11).

“integers greater than one select plural” conflicts with ordi dui mira, correctly translated as one second flower. “Fractions and decimals other than exactly one select plural” makes decimal zero plural while cardinal zero selects singular.

Fix:
“Cardinals whose numerical value is exactly zero or one select singular count heads; other values select plural count heads, regardless of notation. Ordinals do not determine the head’s number: singular denotes one ranked entity; plural denotes multiple entities sharing that rank in context.”

This also distinguishes a numerical spelling convention from grammatical quantity.

4. Nested noun phrases have no reliable determiner-attachment rule (§3.2).

La narili sela can mean either “[the person]’s dwelling” or “the [person’s dwelling].” The stated order permits both; “parsed from the innermost phrase outward” does not select one. With unrestricted full genitive phrases, speakers cannot consistently recover which referent is definite.

Minimal fix without new particles:
“In an unbracketed noun phrase, initial determiners and quantifiers modify the final head outside relative clauses. A prenominal genitive possessor contains a bare or recursively possessed head, but no independent determiner or quantifier. Express independently determined or quantified possessors through a relative clause.”

Then la narili sela unambiguously marks the dwelling definite. Revise the claim that an unrestricted complete noun phrase may occupy the genitive slot. Alternatively introduce explicit spoken possessive brackets, but do not rely on punctuation.

5. Relational vena and motion vena collide (§§3.3, 7, 9).

vena is explicitly the noun “interval,” while venata and venasa repeatedly mean “came/will come.” Because instrumental -ta and past -ta are identical, venata is both “by means of an interval” and “came.” Homophony is permissible, but this one compromises the explicit-category design and is currently undeclared.

Fix: retain vena “come” and rename the relational noun veno “interval.” Change venava to venova in the “between” example. Alternatively explicitly list two homophonous entries and accept the ambiguity.

6. Derivation does not say whether argument structure survives (§10).

Nerima “speaking” is defined, but “speaking to you” has no licensed analysis: timi nerima could incorrectly assign the addressee to the main verb. This is a missing central rule for productive event nouns, not a vocabulary gap.

Small conservative fix:
“Event nouns do not inherit verbal complements or tense. They denote events or activities without syntactically expressed participants. To specify participants, use an ordinary finite clause. Agent nouns likewise do not inherit their source verb’s objects.”

That restricts expressiveness slightly but closes the rule cleanly. A richer alternative needs an explicit nominal argument construction and attachment boundaries.

7. The counterfactual example overtranslates tense/aspect (§9.4).

Seya ti he venata na, mi he linaleta contains neutral past “came,” not anterior perfect “had come.” English counterfactual “had” can mark remoteness, but the example obscures Avelin’s explicit distinction.

Fix: translate it “If you came [contrary to fact], I would have been singing,” or change the antecedent to he venaneta when prior arrival is intended. Add that he itself does not establish anteriority.

Also distinguish remote supposition from known falsity: a remote conditional need not assert that its antecedent is false.

New mini-story

These sentences use only vocabulary and morphology already present in the grammar, without depending on the proposed repairs.

Era mi un miran navava sirata.
La mira veli esata.
Mi la miran timi donata.
Ti linaleta e mi tin henaleta.

Translation

Yesterday I saw a flower at the water.
The flower was beautiful.
I gave the flower to you.
You were singing, and I was listening to you.

Analysis

1. Era mi un mira-n nava-va sira-ta.
   yesterday I specific.indefinite flower-ACC water-LOC see-PST

   Un introduces a particular flower. Navava locates the seeing event; the sentence does not grammatically assert that the flower was floating on the water.

2. La mira veli esa-ta.
   definite flower beautiful COP-PST

   La retrieves the introduced flower. Veli is a predicative adjective, so esa is required.

3. Mi la mira-n ti-mi dona-ta.
   I definite flower-ACC you-DAT give-PST

   The giver is nominative, the transferred flower accusative, and the recipient dative. No participant is omitted.

4. Ti lina-le-ta e mi ti-n hena-le-ta.
   you sing-PROG-PST and I you-ACC hear-PROG-PST

   Both clauses explicitly express their different subjects. Progressive aspect presents both activities as ongoing; coordination alone does not strictly entail their simultaneity, although that is the natural narrative reading.
