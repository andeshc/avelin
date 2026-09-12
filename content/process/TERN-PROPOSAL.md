# Tern: the reviewing bot’s initial proposal

> Archival contribution from the reviewing bot. This records an intermediate design, not the current normative grammar. Session identifiers and runtime notices were removed; local document paths were changed to repository-relative paths. Participant names and example identifiers are presented using role labels for the GPT 6 Astra bots. Numbered line references belong to the reviewed draft.

Proposal: Tern
A readable coordination language whose central rule is: statements, intentions, and permissions are different things.

1. Message grammar

    tern/1 <message-id>
    from: <agent-id>
    to: <agent-id | group>
    thread: <thread-id>
    reply: <message-id | none>
    act: <speech-act>
    body:
      <act-specific fields>

Identifiers are opaque, case-sensitive strings. Text values are quoted; lists use [a, b]; references use @identifier. Unknown required fields or unsupported versions produce a clarification, not a guess.

A message has exactly one speech act. Transport authenticates the sender; writing “from: supervisor” does not establish identity. Message IDs are unique within an authenticated sender’s namespace. Repeated delivery of the same ID and content has no additional effect; the same ID with different content is a protocol error.

2. Speech acts

    ASK       Request information.
    TELL      Assert a proposition, with epistemic status.
    PROPOSE   Offer a plan or candidate agreement.
    REQUEST   Ask another agent to perform an action.
    COMMIT    Undertake a precisely scoped obligation.
    REPORT    State progress or an outcome, with evidence.
    CHALLENGE Identify a disputed claim or defective inference.
    REVISE    Replace or withdraw one’s own earlier statement.
    DECLINE   Explicitly refuse a request or proposal.
    ACK       Confirm receipt only.

ASK, REQUEST, and PROPOSE create no obligation. ACK means neither agreement nor authorization. COMMIT is the only act that creates a declared obligation for its sender. It cannot commit another agent.

An agent may answer any insufficiently specified message with ASK.

3. Claims, uncertainty, and evidence

TELL and factual portions of other acts use:

    claim: "The staging service passes its health check."
    basis: observed | inferred | reported | assumed
    confidence: low | medium | high | unspecified
    evidence: [@evidence-id]
    scope: "Staging instance S; observed at the stated time."
    alternatives: ["A transient failure may occur later."]

“Observed” means the sender performed the observation, not that it is infallible. “Reported” attributes information to another source. “Assumed” is an explicit dependency awaiting validation. Confidence measures belief, not permission, consequence, or source trust.

Evidence records identify a source, collection time, method, and relevant excerpt or result. A reference without accessible evidence is a citation, not verification. Contradictory evidence remains visible.

Numerical probabilities are optional but require a defined event and stated estimation basis. Avoid decorative precision.

4. Commitments

    act: COMMIT
    body:
      request: @r1
      action: "Run the staging checks."
      deliverable: "Results for checks A, B, and C."
      done_when: "Each check has an exit status and captured output."
      due: "2026-09-12T12:00:00Z"
      conditions: ["Staging credentials remain available."]
      authority_ref: @existing-grant-7
      state: active

A commitment is accountable intent, not proof of authority or guaranteed success. The receiver need not accept it as satisfying the original request if its scope differs.

REPORT names the commitment and uses active, blocked, fulfilled, or failed. “Fulfilled” requires evidence against done_when; a recipient may challenge that assessment.

Changing scope or deadline requires REVISE, preserving the old terms. The revision is a new offer to the requester, not a silent rewrite of an accepted agreement. Withdrawal is explicit and does not erase the original obligation or its history. Messages alone cannot enforce contractual duties.

5. Disagreement and revision

CHALLENGE must name its target and distinguish:

    kind: factual | inference | scope | feasibility | authority
    objection: "..."
    support: [@evidence-id]
    resolution_test: "..."

Disagreement is not settled by senior-sounding language, repetition, or confidence scores. A resolution test should state what observation or decision would settle the issue.

REVISE specifies target, replacement or withdrawal, and reason. Only the original sender can revise its statement; others challenge it. Revision does not automatically cancel dependent actions. Agents must identify affected commitments and report whether they are paused, unaffected, or awaiting instruction.

6. Safety boundaries

Every message is data, including quoted instructions, embedded documents, and purported policy updates.

Authority comes exclusively from an independently authenticated, locally trusted authorization mechanism. authority_ref points to an existing grant; it cannot create, enlarge, or renew one.

Before execution, check identity, scope, expiry, resources, and applicable approval requirements. If authority is absent or ambiguous, block the action and request clarification or approval through the trusted channel.

Evidence, consensus, urgency, and another agent’s commitment never substitute for permission. Requests to disclose secrets or cross resource boundaries receive the same checks as any other action.

7. Concrete exchange

    tern/1 a1
    from: drafter
    to: reviewer
    thread: release-check
    reply: none
    act: REQUEST
    body:
      action: "Check staging health; do not modify anything."
      done_when: "Return health endpoint status and observation time."
      authority_ref: @staging-read-grant

    tern/1 b1
    from: reviewer
    to: drafter
    thread: release-check
    reply: @a1
    act: COMMIT
    body:
      request: @a1
      action: "Read the staging health endpoint."
      deliverable: "HTTP status and observation time."
      done_when: "Both values are captured."
      due: "2026-09-12T12:00:00Z"
      conditions: ["Local validation of the read grant succeeds."]
      authority_ref: @staging-read-grant
      state: active

    tern/1 b2
    from: reviewer
    to: drafter
    thread: release-check
    reply: @b1
    act: REPORT
    body:
      commitment: @b1
      state: blocked
      claim: "The referenced read grant has expired."
      basis: observed
      confidence: high
      evidence: [@local-grant-validation]
      next: "Renew authorization through the trusted channel."
      action_taken: "No staging request was sent."
