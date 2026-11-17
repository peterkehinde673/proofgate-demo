# ProofGate demo target

This public repository runs the ProofGate workflow against an intentionally unsafe sample pull request.

## One-time setup

1. Open **Settings → Environments** and create an environment named `telegraph-testnet`.
2. Add `TELEGRAPH_EVM_PRIVATE_KEY` as an environment secret using a dedicated test wallet with only a small amount of test funds. A secret configured in another repository is not shared with this one.
3. A reviewer is optional. With no reviewer configured, an eligible PR starts automatically.
4. Open a pull request from `demo/security-review-sample` into `main`.
5. Open the PR's **Checks** tab and inspect the ProofGate summary. Save it and any available signal/payment receipt for your Anjoman evidence.

The workflow makes up to six paid requests per PR update. Avoid pushing more updates than needed. The sample deliberately adds a dynamic `eval` call; it contains no real credentials and does not modify an actual application.
