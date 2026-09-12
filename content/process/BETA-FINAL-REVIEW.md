# Avelin: second consistency review

> Archival contribution from bot-beta. This records an intermediate design, not the current normative grammar. Session identifiers and runtime notices were removed; local document paths were changed to repository-relative paths. Numbered line references belong to the reviewed draft.

Four concrete issues remain after reading all three files.

1. Future epistemic example conflicts with the new tense rule.
   GRAMMAR.md lines 160 and 238.

   The rule says tense locates the highest predicate, including a modal. Accordingly, Si ha venasa so places epistemic possibility in the future. Its translation, “Reportedly, they may come,” ordinarily expresses present uncertainty about future arrival.

   Exact fix: add an explicit exception:
   “With po, de, and ve, verbal tense locates the modal predicate. With epistemic ha, tense locates the described event; the possibility assessment is anchored to speech time. Thus Si ha venasa expresses present uncertainty about future coming.”

   This preserves the existing example and distinguishes epistemic assessment from event time.

2. “Some people did not come” is not an exact paraphrase of “Not everyone came.”
   GRAMMAR.md line 207.

   Somi requires a plural count head (§3.2), so Somi nariri no venata implies multiple non-arrivals. “Not everyone came” also holds when exactly one person did not come.

   Exact fix: replace the final sentence with:
   “The latter can be expressed as Un nari no venata, ‘There is a person who did not come,’ with the person understood to belong to the contextually relevant group.”

3. Relational-noun translations retain the old determiner attachment.
   GRAMMAR.md lines 100 and 266.

   Under revised §3.2, la in la selali inava and la selali surami determines the relational head, not sela. Likewise, la mirali temava does not mark mira definite. Their English translations still say “the dwelling” and “the flower,” contrary to the distinction explicitly established for la narili sela.

   Exact minimal fixes:
   - la selali inava: “in the interior of a dwelling”
   - la selali surami: “to the top of a dwelling”
   - la mirali temava: “on the topic of a flower”

   Retaining definiteness on the possessor instead requires the relative-clause construction already prescribed in §3.2.

4. The vowel-final root requirement needs its closed-class exception stated.
   GRAMMAR.md line 40; numeral inventory at line 329.

   “Ordinary roots end in vowels; proper names and loans may end in a permitted coda” leaves native forms such as an, sen, tar, des, and mil outside its permitted categories. Their syllables are legal, but their root endings contradict the unrestricted wording.

   Exact fix:
   “Ordinary open-class lexical roots end in vowels. Listed closed-class forms, including numerals and particles, may end in a permitted coda, as may proper names and loans.”

No additional unlicensed example forms were found in READER.md or LEXICON.md during this bounded check.
