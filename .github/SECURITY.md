# Security Policy

## Supported versions

The latest commit on the `main` branch is the supported version of this site.

## Reporting a vulnerability

Please do not open a public issue for security problems.

Use GitHub's private vulnerability reporting:

1. Go to the repository's **Security** tab.
2. Select **Advisories**.
3. Click **Report a vulnerability**.

Include the affected URL, a description of the issue, and reproduction steps.

## Secret handling

- Never commit private keys, passwords, tokens, or `.env` files.
- SSH keys, certificates, and credential files are excluded in `.gitignore`.
- If a secret is exposed, assume it is compromised:
  1. Revoke or rotate it immediately in the affected service.
  2. Remove it from the Git history.
  3. Review access logs and recent changes for unauthorized activity.
  4. Enable secret scanning and push protection in GitHub.

## Dependency and workflow security

- Dependencies are audited with `npm audit` in CI.
- Dependabot keeps npm packages and GitHub Actions up to date.
- GitHub Actions are pinned to full commit SHAs.
- Deployment workflows use minimal permissions and do not persist Git credentials.
