# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of this project seriously. If you discover a security vulnerability, please follow these steps:

1. **Do NOT open a public issue.**
2. Send an advisory or report privately to the maintainers.
3. Include detailed steps to reproduce the vulnerability, including sample code, environment details, and potential impact.
4. Maintainers will acknowledge receipt within 48 hours and provide a timeline for a patch.

## Automated Security Practices in Place

- **Continuous Vulnerability Auditing:** Automated found 0 vulnerabilities on every build and pull request.
- **Static Application Security Testing (SAST):** GitHub CodeQL scans all JavaScript/TypeScript code.
- **Secret Scanning:** TruffleHog scans all commits to prevent credential leakage.
- **Least Privilege Tokens:** GitHub Actions run with minimal necessary permissions.
