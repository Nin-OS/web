---
title: 2024.04 Progress Report
description: 'This article provides a brief overview of the major developments in the eweOS community as of April 2024.'
date: 2024-04-30
---

## Image Updates

- [Added a default limine background](https://github.com/eweOS/iso/commit/ca7f55876a8b3d22f0eebed5bab104c2e6414247) to `liveimage-desktop` variant of iso image.
- [Added a intro readme](https://github.com/eweOS/iso/commit/0dac3b3e13b063ff5af94ddfedb6f037d56fef03) for liveimage iso.
- `bash-completion` is [included](https://github.com/eweOS/iso/commit/547e77bbf156bd805dbd9829685b841b1ee26651) in `liveimage-desktop` variant.
- `mimalloc` is [enabled by default](https://github.com/eweOS/iso/commit/2d9dd356c1a334bf9eacc59b2b0c53dd6315ec1a) in liveimage iso.

## Package Highlights

### Kernel

- `linux` [6.8.8](https://github.com/eweOS/packages/commit/3f31735971e21e18820b8fe15230fd07cc9ddaf8) with [broadcom and mediatek wireless drivers](https://github.com/eweOS/kernel-config/commit/6879b68ea3a129579c8d17cea161af1a31cb876f)

### Toolchain / Programming Languages

- `llvm` [18.1.2](https://github.com/eweOS/packages/commit/81545ccabcfbf421210389be18cd878f01d59dcd)
- `rust` [1.77.2](https://github.com/eweOS/packages/commit/1b8baba6e1d927b672892085c0bb651649a985fd)
- `python` [3.12.2](https://github.com/eweOS/packages/commit/8d577f3d5b7e56e51085bb56ca3b0dd81f1d4f26), with python packages to support `python-pip`
- `nodejs` [21.7.3](https://github.com/eweOS/packages/commit/60d87d991d133dd62d1d47054772884d65d83b99)

### Utils

- `neovim` [0.9.5](https://github.com/eweOS/packages/commit/9bbf61027a30f42d368b70ab3157d3ecb5416786) (new) and related lua packages
- `catnest` [0.2.1](https://github.com/eweOS/packages/commit/9c9cf59666195911d96283959fdc60aaa00bcb4b) with multiple fixes
- `neofetch` is now also [provided](https://github.com/eweOS/packages/commits/hyfetch) by `neowofetch` in `hyfetch` (new).
- `pacman` now depends on `pacman-mirrorlist` for [better selection of mirrors](https://github.com/eweOS/packages/tree/pacman-mirrorlist)
- `ifupdown-ng` [0.12.1](https://github.com/eweOS/packages/commit/da22996561f95e293012a38ee0db2793dd086102)

### Libraries

- `gtk4` [4.15.0](https://github.com/eweOS/packages/commit/78cb1ae7898415931ad0db181f75ad1e38397301), with [fixes for clang 18](https://github.com/eweOS/packages/commit/a7ecf2b820859cfcd548f0a9d25ea8ba6382580d)

### Desktop Applications

- `firefox` [125.0.2](https://github.com/eweOS/packages/commit/bd9c9ba4eeec2fae57425212a55c950b1c35b183), with [fixes for clang 18](https://github.com/eweOS/packages/commit/f5815a3bcef16a1adfdfbee36acbdfc639dc7c5d)

### More

- ...and [more](https://github.com/eweOS/packages/)!

## Infra

### Workflow
- Now daily images (tarball and all liveimage variants) is built on [Github Actions](https://github.com/eweOS/iso/actions)
- Docker images are now generated from daily images from [Github Actions](https://github.com/eweOS/docker/actions).

### Build System

- We are going to [include names of worker nodes](https://github.com/YukariChiba/obs-build/commit/287cc7808a49fd13ff1e7941b45381cd4be25821) in `Packager` field of each package, with the format of `worker-name <worker-name@workers.os-build.ewe.moe>`.
- Our build system now supports workers connected from IPv6 addresses. [A patch](https://github.com/openSUSE/open-build-service/pull/15985) is submitted to upstream.

### Website

- We improved our [package list and upgrade list](https://os.ewe.moe/pkglist) for better UI. [Workflow](https://github.com/eweOS/workflow) is also adjusted to provide [failed upgrade checks](https://github.com/eweOS/workflow/tree/updatecheck) and [splitted package info](https://github.com/eweOS/workflow/tree/pkginfo-x86_64). 
- Docker image is now listed on [download section](https://os.ewe.moe/download). Daily builds in Github Actions is listed as well.

### Repository

- A [cloudflare R2 storage](https://os-repo-cloudflare.ewe.moe/) is now deployed, serving eweOS images.
- A [redirector](https://os-repo-auto.ewe.moe/) is now deployed to provide policy-based mirror selection.

## Community

- Released an initial design of our [artwork](https://github.com/eweOS/artwork/).
- eweOS logo is now [included in hyfetch](https://github.com/hykilpikonna/hyfetch/pull/252).

## Next Steps (maybe)

- Bootstrap `rust` in `riscv64` and fix failed packages for `riscv64`
- Fix missing dependencies for manpages and documentations.
- Better desktop experience.
- Kernel improvements (add more configs and patches, mini/tiny kernels)