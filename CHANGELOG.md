# Changelog

## Porsche Design System - Browser Notification

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [Unreleased]

### [4.1.4] - 2022-06-20

### [4.1.3] - 2022-06-20

#### Changed

- npm package is prepared for public release on [npmjs.org](https://npmjs.com)

### [4.1.2] - 2022-05-25

### [4.1.1] - 2022-01-20

#### Fixed

- Partial `includeBanner()`

### [4.1.0] - 2022-01-20

#### Added

- Function `includeCookieOverlay()` to display notification overlay when cookies are disabled

### [4.0.0] - 2021-11-30

This major release is relevant as of `Porsche Design System v2.7.0`

#### Changed

- Remove `ResizeObserver` requirement

### [3.0.0] - 2021-10-21

This major release is relevant as of `Porsche Design System v2.3.0`

#### Changed

- Extended feature detection of `includeOverlay()` with `ResizeObserver`, `IntersectionObserver` and `MutationObserver`
  to cover **critical** browser technologies used by the Porsche Design System

### [2.0.0] - 2021-01-07

### [2.0.0-rc.1] - 2021-01-07

#### Fixed

- Browser detection of `includeBanner()`

### [2.0.0-rc.0] - 2021-01-07

#### Removed

– Universal `include()` script, use `includeBanner()` or `includeOverlay()` instead

### [1.0.0] - 2020-11-26

#### Added

- Translations for `ko, cs, da, et, fi, lt, lv, no, sl, sv, tr, uk`

### [1.0.0-rc.1] - 2020-10-06

#### Fixed

- Overflowing text on mobile device for overlay

### [1.0.0-rc.0] - 2020-10-05

#### Added

- Initial release
