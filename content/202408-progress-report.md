---
title: 2024.08 Progress Report
description: "In August, we held offline community events, which brought us a lot of valuable feedback. Packaging continued to progress steadily, with fixes on the riscv64 architecture and preparations for the LoongArch port."
date: 2024-08-31
---

> In August, we held offline community events, which brought us a lot of valuable feedback. Packaging continued to progress steadily, with fixes on the riscv64 architecture and preparations for the LoongArch port.

## Image Updates

- `liveimage-standard` profile is [now available](https://github.com/eweOS/iso/commit/a3fb56ea92ae0af562097d4857c55f5fd94a2e8b) on `riscv64`.
- `jade` and `jade-gui` installer are [now integrated](https://github.com/eweOS/iso/commit/0eaeb0368750e0d831b1c18242518237d804bdef) in `liveimage-desktop` images.
- Low memory mode [is introduced](https://github.com/eweOS/iso/commit/472f30201d9d4e2559debbc15edc90b68f7302f8) for devices with low RAM.

## Package Highlights

> 195 PRs merged in total during August 2024. See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-08-01..2024-08-31+).

### Kernel

- linux [6.10.6](https://github.com/eweOS/packages/pull/1058)
- kernels for `aarch64` and `riscv64` are [provided without compression](https://github.com/eweOS/kernel-config/commit/ea88c926913159694fb5168f62dbaf3592a3adac) to support `limine`

### Toolchain / Programming Languages

- llvm now supports [LoongArch target](https://github.com/eweOS/packages/pull/1022)
- rust [1.80.1](https://github.com/eweOS/packages/pull/999) is finally bootstrapped and available on `riscv64` with multiple fixes.
- go [1.23.0](https://github.com/eweOS/packages/pull/1064)
- slibtool [0.6.0](https://github.com/eweOS/packages/pull/897) is now [default libtool](https://github.com/eweOS/packages/pull/899) for eweOS
- mold [2.33.0](https://github.com/eweOS/packages/pull/931)
- pacman now [provides RUST{ARCH,HOST}](https://github.com/eweOS/packages/pull/1028) for better multiarch support


### Utils

- android-tools [35.0.1](https://github.com/eweOS/packages/pull/1053) (New)
- dinit-services [20240802.1](https://github.com/eweOS/packages/pull/877) (New) is splitted out from dinit.
- busybox [1.36.1-27](https://github.com/eweOS/packages/pull/881) now supports `-S` option for `modprobe`
- inotify-tools [4.23.9.0](https://github.com/eweOS/packages/pull/979) (New)
- bash [5.2.32](https://github.com/eweOS/packages/pull/900)
- namcap [3.5.2](https://github.com/eweOS/packages/pull/977) (New)
- socat [1.8.0.1](https://github.com/eweOS/packages/pull/1076)
- avrdude [8.0](https://github.com/eweOS/packages/pull/1054)

### Libraries

- gstreamer [1.24.7](https://github.com/eweOS/packages/pull/1059) (New)
- xcurcommon [0.0.3](https://github.com/eweOS/packages/pull/950) (New) is splitted from X11 to provide support for legacy cursors without X11
- boost [1.86.0](https://github.com/eweOS/packages/pull/1019)
- freetype2 [2.13.3](https://github.com/eweOS/packages/pull/1008)
- opencc [1.1.9](https://github.com/eweOS/packages/pull/980)
- ffmpeg [7.0.2](https://github.com/eweOS/packages/pull/945)
- glib [2.82.0](https://github.com/eweOS/packages/pull/1057)

### Bootloaders

- limine [7.13.2](https://github.com/eweOS/packages/pull/876) with a grub-like installer

## Desktop

- mesa [24.1.5](https://github.com/eweOS/packages/pull/911)
- flatpak [1.15.10](https://github.com/eweOS/packages/pull/995)
- openttd [14.1](https://github.com/eweOS/packages/pull/1039) (New)
- firefox [129.0](https://github.com/eweOS/packages/pull/921)
- Hyprland [0.42.0](https://github.com/eweOS/packages/pull/951)
- Pipewire [1.2.3](https://github.com/eweOS/packages/pull/1068)
- foot [1.18.1](https://github.com/eweOS/packages/pull/1007)

![OpenTTD running on eweOS](/content-img/202408-progress-report/openttd.jpg)

### Misc

- Misc riscv64 package fixes, now 734/786 (approximately 93.4%) packages compared to x86_64 are available
- base [1-3](https://github.com/eweOS/packages/pull/879) now provides `base-baremetal` group for easier installation.

### More

- ...and more!

## Infra

### Build System

- We acquired a LoongArch 3A6000 motherboard, which will hit the shelves next month as a LoongArch build machine for eweOS.

### Workflow

- [Merge package info](https://github.com/eweOS/workflow/commit/f64784dbee9ffb64ef0b45e60987ddb022c241e1) before uploading to provide a better organized json.
- Version bumping is now [running inside eweOS container](https://github.com/eweOS/workflow/commit/9d69f8bab30e7d525ab5863b9fc5fd02ecf1e81c) to take use of pacman `vercmp`.
- `checksymdiff` workflow is [now fixed](https://github.com/eweOS/workflow/commit/77882c0a762fd9e7453a8580f88dd9db19762b98), `namcap` is called after packaging to line packages.
- [Added `/recheck` command](https://github.com/eweOS/bot/commit/94f2516a82e541a097fe0cfb5fd4ee123d6b34d8) for telegram bot.
- [ewe-pkgtool](https://github.com/eweOS/ewe-pkgtool) is ready to ease packaging workflow

### Website

- [Merged package info json is used](https://github.com/eweOS/web/commit/697bb629645d7de373c7841d9d40414866de40cd) to provide better performance of packages info page.

### Repository

```
Current size of repositories:
14G     ./eweos
3.3G    ./eweos-images

Current size of snapshot repositories:
37G     ./eweos-snapshots
31G    ./eweos-images-snapshots
```

## Community

- An initial attempt of eweOS stickerset [is designed and printed](https://github.com/eweOS/artwork/commit/3513bab28b33c835e600be7cbe6b4bbc4564c67a), delivered in developers meetup.
- We had a community-wide vote on the arch name for LoongArch.

## Regular Meeting

<details>
  <summary>Special: developers meetup @ RVSC2024</summary>

## Special: developers meetup @ RVSC2024

### Attendee

- @YukariChiba, eweOS developer
- @ziyao233, eweOS developer
- eweOS developers and users

### Agenda

- Distribution of eweOS stickerset (30 total)
- Distribution of eweOS installation media (10 in total)
- Users presented problems encountered in using eweOS to developers on site
- Worked together to solve problems and package new packages.
- Explained eweOS to other linux enthusiasts
- Tested status of UEFI support among the riscv64 devices in the field, without success.

</details>
