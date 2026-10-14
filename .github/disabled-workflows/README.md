# Disabled publishing workflows

These upstream publishing workflow sources are intentionally kept outside
`.github/workflows/` in the RatioCore fork. The fork's `master` branch is an
upstream mirror and must not publish packages or images, or deploy.

Do not move a file from this directory back into `.github/workflows/` on
`master`. A separately reviewed, explicitly approved release-branch change is
required before any publishing workflow can be re-enabled.
