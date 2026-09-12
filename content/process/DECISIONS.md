# Design decisions and corrections

This is a curated record of consequential changes, not a claim that every sentence of the grammar was independently proved correct. Review records preserve the intermediate proposals. The current grammar takes precedence when they differ.

## Avelin: sound and form

| Question | Decision | Why |
|---|---|---|
| How should the language sound? | Five pure vowels, a tapped r, permitted syllable codas n/l/r/s, penultimate stress. | A flowing rhythm with enough consonant contrast for distinct words. |
| Should vowel length or tone encode grammar? | No. | Their absence is a design choice, not a claim that languages using them are inferior. |
| Are root restrictions universal? | Open-class roots end in vowels; listed grammatical words, names, and loans may have legal codas. | The original wording accidentally excluded native numeral forms such as an and des. |
| What about illegal number words? | lim → lime; fra → fara; dot → doti. | The earlier forms violated the chosen final-consonant or onset-cluster rules. |
| Can nouns freely become verbs? | No; lexical class and argument frames are specified. | Predictable morphology should not hide changes in participant roles. |
| Can two words sound the same? | Documented homophones are allowed, but interval became veno while come remained vena. | This removed an avoidable ambiguity in a central relational construction. |

## Avelin: sentence meaning

### Tense and modality

For ability **po**, obligation **de**, and desire **ve**, tense places the modal predicate in time. **Mi po vanata** means “I was able to go.”

Epistemic **ha** is different: its assessment is anchored to speech time while tense locates the described event. **Si ha venasa** means present uncertainty about future coming.

Beta's first review exposed the missing general rule. The second review exposed the need to distinguish epistemic assessment from event time.

### Negation and quantity

Quantificational noun phrases take scope in their surface order. Reordering can change scope without changing case roles. **Ala nariri un miran sirata** permits different flowers for different people; placing **un miran** first gives a shared particular flower wide scope.

“All did not come” is not silently interpreted as “not all came.” A single person who did not come is enough to make the latter true. The final explanation uses **Un nari no venata**, with that person in the relevant group, rather than requiring multiple non-arrivals.

The final habitual-negation clarification distinguishes **rava no lira**, habitually not reading, from **no rava lira**, not habitually reading. This clarification was made by Alpha after the two bounded Beta reviews; it was not a separate Beta approval.

### Possession and attachment

Determiners and quantifiers in an unbracketed noun phrase modify the final head, outside relative clauses. Prenominal genitives are deliberately restricted. An independently determined or modified possessor uses a relative clause.

Consequently, **la narili sela** identifies the dwelling, not necessarily the person. Spatial examples and their English translations were updated to follow that same rule.

### Derived event nouns

Event nouns do not inherit their source verbs' complements or tense. Agent nouns do not inherit verbal objects either. A finite clause supplies explicit participants. This is a conservative, stated restriction rather than an unresolved nominal syntax.

### Counterfactuals

**he** marks a remote supposition, not necessarily a known falsehood and not anteriority by itself. The anterior counterfactual example uses **venaneta** to express prior coming explicitly.

### Numbers and noun number

Cardinal values exactly zero or one select singular count heads; other values select plural, regardless of numeric notation. Ordinals do not force plural merely because their rank exceeds one.

## Tern: the separate protocol

| Problem raised in review | Resolution |
|---|---|
| Sender names alone do not establish identity. | An agreed identity context binds participant names to authenticated principals. |
| Receivers may observe competing revisions in different orders. | Revisions name their predecessor; competing successors remain a conflict rather than selecting a winner by arrival. |
| A replacement commitment may leave the old one outstanding. | A replacement request names the old commitment; the corresponding new commitment supersedes it prospectively. |
| An erroneous terminal report needs correction. | A sender may revise its report without thereby authorizing renewed execution. |
| Acknowledgment can be mistaken for agreement. | ACK confirms receipt only; it grants neither permission nor acceptance. |

Tern does not implement authentication, grant authority, or guarantee exactly-once external execution. It describes communication semantics. It is not the syntax or an ancestor language of Avelin.

## How to extend the project

1. Propose a specific new construction or word, with examples and intended meaning.
2. Check it against phonotactics and the existing lexicon.
3. State its grammatical category, argument roles, and scope.
4. Have another reader produce a new sentence from the rule.
5. Update every affected example and translation, not only the rule paragraph.
6. Preserve the previous decision in version history and name any remaining uncertainty.
