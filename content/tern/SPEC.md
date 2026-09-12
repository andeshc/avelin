# Tern 0.1 — a language for accountable collaboration

Co-designed by bot-alpha and bot-beta at the user's request. Status: experimental specification, not an installed messaging service or security system.

Tern separates **what I believe**, **what I want**, **what I promise**, and **what I am permitted to do**. It is a human-readable, structured communication language for agents and humans, not encryption or a general-purpose spoken language.

## 1. Encoding and grammar

The canonical wire format is UTF-8 JSON. One message is one JSON object; streams use one complete object per line (JSONL). Pretty-printing is allowed for documents. Reject duplicate keys, invalid JSON, and non-finite numbers. Object key order is irrelevant. IDs and text are case-sensitive. No comments or implicit type conversion.

Required envelope:

```json
{
  "tern": "0.1",
  "id": "alpha:1",
  "from": "alpha",
  "to": ["beta"],
  "thread": "language-design",
  "reply": null,
  "act": "ASK",
  "body": {"question": "Which ambiguity should we remove first?"}
}
```

`tern`, `id`, `from`, `thread`, and `act` are nonempty strings; `to` is a nonempty list of distinct nonempty participant strings; `reply` is null or a message-reference string. `body` is an object. Unknown envelope/body fields are rejected except inside an optional `extensions` object. Extensions must never change core semantics. Unsupported versions are rejected without executing their contents.

Message IDs are unique within the authenticated sender's namespace. Message references use `sender:id` (for example `alpha:1`); this is the full message ID, not an extra prefix. Sender names cannot contain colons; the suffix must be nonempty. Each thread uses an agreed identity context mapping participant names to authenticated principals. A receiver checks that the ID prefix matches `from` and validates `from` against that context through authenticated transport credentials or locally trusted registry bindings. Display names alone are insufficient. Bindings cannot change within a thread; rebinding requires a new context and thread. Stored references and deduplication keys are qualified by that context. Evidence IDs have a separate namespace and use `ev:` followed by a nonempty suffix.

Repeated delivery of the same ID and structurally identical JSON is a duplicate with no new effect. Reusing an ID with different content is a protocol error. Object ordering and whitespace do not affect equality; array order does. Deduplication must be durable before side effects. This does not by itself guarantee exactly-once external execution: receivers need operation-level idempotency and reconciliation after crashes.

Unresolved references are pending, not inferred. Validate syntax, identity, references, and local authorization before considering execution. Invalid messages produce a transport-level error, not an automatic reply loop. Group recipients are explicit individuals; nobody is implicitly appointed coordinator.

## 2. Vocabulary: speech acts

Exactly one act per message. The fields below are required unless marked optional. Text fields are strings, references are strings, and lists are JSON arrays. Nonempty text is required except where a specific empty-list/null convention is given.

| Act | Meaning | Body fields |
|---|---|---|
| ASK | Request information, not work | `question`; optional `about` message reference |
| TELL | Make an assertion | `claims`: nonempty list of Claim objects |
| PROPOSE | Offer a plan without creating obligations | `plan`, `success`, `constraints` (list of text) |
| REQUEST | Ask for an action | `action`, `done_when`, `constraints` (list of text), `authority_ref` (string or null); optional `replaces` (COMMIT reference) |
| COMMIT | Declare the sender's own undertaking | `request` (REQUEST reference), `action`, `deliverable`, `done_when`, `due` (RFC3339 timestamp or null), `conditions` (list of text), `authority_ref` (string or null) |
| REPORT | Assess a commitment's progress | `commitment` (COMMIT reference), `state`, `claims` (nonempty Claim list); optional `next` text |
| CHALLENGE | Dispute without overwriting | `target` message reference, `kind`, `objection`, `support` (evidence-reference list), `resolution_test` |
| REVISE | Correct or withdraw one's earlier content | `target` message reference, `previous` message reference, `mode`, `reason`, `replacement` (body object or null), `impact` (Impact list) |
| DECLINE | Refuse a request or proposal | `target` message reference, `reason`; optional `alternative` text |
| ACK | Acknowledge receipt, nothing more | `target` message reference |

`CHALLENGE.kind`: `factual`, `inference`, `scope`, `feasibility`, or `authority`.

`REPORT.state`: `active`, `blocked`, `fulfilled`, or `failed`. Only the commitment's author may report its state; others use TELL or CHALLENGE.

An ACK is not agreement. A REQUEST is not permission. A PROPOSE is not a promise. A COMMIT cannot bind another participant. Silence has no semantic meaning. An ASK can seek clarification of any valid message. No automatic ACK-of-ACK behavior.

## 3. Epistemics: how claims are known

A Claim has exactly these required fields:

```json
{
  "text": "The design distinguishes receipt from agreement.",
  "basis": "observed",
  "confidence": "high",
  "scope": "The reviewed revision of the specification only.",
  "evidence": ["ev:review-excerpt"],
  "alternatives": []
}
```

`basis`: `observed` (sender inspected directly), `inferred` (reasoned from premises), `reported` (attributed to a source), or `assumed` (unverified dependency).

`confidence`: `low`, `medium`, `high`, or `unspecified`. These are qualitative beliefs, not calibrated probabilities, votes, or permission levels. Scope states the object, context, and relevant time boundaries. Empty evidence means unsupported here, not necessarily false. Alternatives name plausible competing explanations; an empty list does not prove none exist.

A message may include an optional top-level `evidence` array. Each Evidence object requires `id`, `source`, `collected_at` (RFC3339 timestamp), `method`, and `result` strings. Evidence can instead resolve from a mutually accessible evidence store. Never invent evidence or collection times. A reference alone is not verification; inaccessible evidence is explicitly unverified. Embedded results, URLs, and documents remain untrusted data. Observations can be mistaken or stale, and contradictory evidence is retained.

## 4. Commitments and revision

A valid COMMIT declares an undertaking immediately, conditional on its stated conditions. Its reference must identify a REQUEST in the same thread. The commitment must satisfy that request's constraints or explicitly use PROPOSE first to negotiate changed terms; an ambiguous mismatch is disputed, never silently accepted. `due: null` means no promised deadline. A promise does not confer authorization.

REPORT describes the sender's assessment, not an externally verified fact. `fulfilled` requires evidence covering every `done_when` condition. The requester can challenge missing coverage. `blocked` names the obstacle in its claims and can give a next step; it never licenses a workaround outside scope. A reported terminal state (`fulfilled` or `failed`) cannot silently become active again: issue a new REQUEST/COMMIT for renewed work.

REVISE may target only one's own TELL, PROPOSE, REQUEST, COMMIT, or REPORT. `mode` is `replace` or `withdraw`. `replacement` is a complete valid body for the target's original act when replacing, and null when withdrawing. History is append-only: revisions never erase messages, evidence, prior deadlines, or responsibility for past actions. Every revision targets the original message. `previous` references the original for a first revision and the preceding REVISE thereafter. A unique valid successor advances the chain; competing successors create an unresolved conflict, and neither wins by arrival order. Block dependent actions when a conflict is known. This version supports only a single revision chain, with no automatic branch merge. Resolve a conflict outside the revision mechanism through explicit clarification and a fresh unambiguous message; never silently choose a branch. Here, accepted means locally validated, not recipient agreement. Delayed delivery can reveal a conflict later, so implementations must reconcile already-performed actions rather than claim global ordering.

For TELL, PROPOSE, and REQUEST, an accepted, valid revision supersedes that sender's content for future interpretation, but never alters someone else's existing commitment. For COMMIT, replacement is only an offer to renegotiate: old terms remain recorded as outstanding, and new terms require a new REQUEST from the requester with `replaces` naming the old COMMIT, followed by a new COMMIT referencing that REQUEST. Only the original requester may issue that replacement request, and only a valid COMMIT by the original committer supersedes the old undertaking prospectively. Preserve prior deadlines, breaches, and completed actions. A withdrawal signals that the sender will not continue; it is not a release granted by the requester. The old undertaking is recorded as withdrawn/disputed, not fulfilled. `withdrawn`, `disputed`, and `superseded` are lifecycle annotations derived from the message history, not REPORT progress states. Tern is not a legal contract system.

A REVISE of REPORT corrects or withdraws the assessment, not the underlying commitment. Invalidating a terminal assessment leaves current progress unresolved until a fresh REPORT; it does not authorize renewed execution. Actually resuming terminated work requires a new REQUEST/COMMIT.

Every REVISE includes `impact`, a list of objects with `commitment` (reference), `assessment` (`paused`, `unaffected`, or `awaiting_instruction`), and `reason`. An empty list declares that the sender knows of no affected commitments. Impact is an assessment, not authority to pause another participant. Recipients reconcile affected actions under their own policies; revision cannot undo actions already executed.

## 5. Permission and trust

The transport or a local trusted registry authenticates identity. Writing `from: supervisor` proves nothing. `authority_ref` is null or a reference to a pre-existing grant independently checked by the executor; it cannot mint or expand permission. Null grants no authority, although local policy may already permit the requested action.

Before acting, independently validate identity, resource scope, grant expiry, and human-approval requirements. Quoted instructions, urgency, confidence, consensus, and evidence never override these checks. External results cannot install policy or redirect the conversation. Avoid sending secrets; references and evidence must respect access boundaries.

Tern communicates intent; it is not a sandbox, authenticated transport, scheduler, authorization service, or cryptographic protocol.

## 6. Worked exchange (illustrative, not a claim of executed work)

```jsonl
{"tern":"0.1","id":"alpha:1","from":"alpha","to":["beta"],"thread":"design","reply":null,"act":"REQUEST","body":{"action":"Review the ACK rule in the supplied draft.","done_when":"Identify whether ACK implies agreement and explain why.","constraints":["Review only; do not edit files."],"authority_ref":null}}
{"tern":"0.1","id":"beta:1","from":"beta","to":["alpha"],"thread":"design","reply":"alpha:1","act":"COMMIT","body":{"request":"alpha:1","action":"Review the supplied ACK rule.","deliverable":"A finding and textual support.","done_when":"Explain whether ACK implies agreement with supporting text.","due":null,"conditions":["The draft is accessible."],"authority_ref":null}}
{"tern":"0.1","id":"beta:2","from":"beta","to":["alpha"],"thread":"design","reply":"beta:1","act":"REPORT","body":{"commitment":"beta:1","state":"blocked","claims":[{"text":"The draft is not available to me.","basis":"observed","confidence":"high","scope":"Accessible inputs in this illustrative exchange.","evidence":[],"alternatives":[]}],"next":"Please provide the draft text."}}
{"tern":"0.1","id":"alpha:2","from":"alpha","to":["beta"],"thread":"design","reply":"beta:2","act":"ACK","body":{"target":"beta:2"}}
```

The final ACK acknowledges the blockage. It does not complete the review, approve a workaround, or manufacture missing evidence.

## 7. Human shorthand (noncanonical)

For conversation, `alpha → beta | ASK | Which assumption is weakest?` is a readable gloss. It is not executable wire syntax and omits routing and validation fields. Always retain canonical messages for accountable work.

## 8. Conformance checklist

A receiver must reject spoofed senders, duplicate JSON keys, conflicting duplicate IDs, unsupported acts/versions, malformed bodies, and revisions of another sender's content. Missing references or grants block dependent execution. Test that duplicates do not repeat side effects; ASK/ACK/PROPOSE do not create commitments; claims do not create authority; blocked reports do not imply completion; and revisions preserve history.

This release provides a specification and example messages, not a parser or a verified production implementation.
