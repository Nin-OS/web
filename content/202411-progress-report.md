---
title: 2024.11 Progress Report
description: "In November, eweOS advanced its repository with significant system improvements, package enhancements, and expanded mirror presence, embodying its dedication to versatility, efficiency, and community engagement."
date: 2024-11-30
---

> In November, eweOS advanced its repository with significant system improvements, package enhancements, and expanded mirror presence, embodying its dedication to versatility, efficiency, and community engagement.

## Image Updates

- squashfs is now [compressed using zstd](https://github.com/eweOS/iso/commit/6127a6a57d478a1466a8ec5623e388fa5d0ac03d)
- Desktop live images will be built with LXQt, [a PR is presented](https://github.com/eweOS/iso/pull/9) and will be merged soon
- Desktop live images will be built with Xfce, [a PR is presented](https://github.com/eweOS/iso/pull/10) and will be merged soon

## Package Highlights

> 322 PRs merged in total during November 2024. 
> 45% (145) of them are [automated](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-11-01..2024-11-30+label%3Aautomated)

> See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-11-01..2024-11-30+).

> There are 1090 packages on eweOS in total
> 1063 (97.9%) are available on riscv64
> 836 (77.0%) are available on loongarch64

### Kernel

- linux [6.12.1](https://github.com/eweOS/packages/commit/acb5540ea0fb5225576fd419c1e98e2b69c90321)
- Enabled nbd and mmc drivers by default.

### Toolchain / Programming Languages

- llvm [19.1.3](https://github.com/eweOS/packages/commit/c9742f18b89dc98fca4f6c66b5457fe9a287adff) with float 128 fixes.
- rust is now available on loongarch64
- java23-openjdk [23.0.1](https://github.com/eweOS/packages/commit/44d516d4e4af8067bd6099d9c518124352741efb) (New) with X11 functions and AWT removed is now available on x86_64 and aarch64
- js128 [128.4.0](https://github.com/eweOS/packages/pull/2179)

### Utils

- kmod [33](https://github.com/eweOS/packages/commit/57832f37af0c0e6834582090a8cd53f3d76b21b4) is now part of base-baremetal and provides modutils
- busybox now has builtin console-related utils and more commandline features
- git [2.47.1](https://github.com/eweOS/packages/pull/2230)
- tmux [3.5_a](https://github.com/eweOS/packages/pull/2086)
- minimodem [0.24.1](https://github.com/eweOS/packages/pull/2185) (New)
- strace [6.12](https://github.com/eweOS/packages/pull/2097)
- catnest [0.3.0](https://github.com/eweOS/packages/pull/2264)
- graphviz [12.2.0](https://github.com/eweOS/packages/pull/2033)
- flashrom [1.4.0](https://github.com/eweOS/packages/pull/1965) (New)

### Libraries

- mesa [24.2.7](https://github.com/eweOS/packages/commit/a6ef6448d601783b88227e16a78f2ca85924bf0a)
- protobuf [28.3](https://github.com/eweOS/packages/commit/b09793ae885d74daea8de02452de955773dc597e)
- texlive-texmf [20240312](https://github.com/eweOS/packages/commit/1a59bd7a0f0314051b50375a03a28252425d61f4) (New)
- icu [76.1](https://github.com/eweOS/packages/commit/04a16a3bbeb6b24638ae77ab78f1ae6fd93241ae)
- Qt [6.8](https://github.com/eweOS/packages/pull/2104) is shipped with [musl-related backports](https://github.com/eweOS/packages/blob/48cf9bd5a1e412cdf7b6d87f6ca1b3df4451e04e/0001-QThread-Unix-refactor-to-split-QThreadPrivate-finish.patch)
- gtk [4.16.7](https://github.com/eweOS/packages/pull/2221)
- libinput [1.27.0](https://github.com/eweOS/packages/pull/2100)
- sdl2 [2.30.9](https://github.com/eweOS/packages/pull/2069)

### Desktop

![lxqt demo](/content-img/202411-progress-report/lxqt.jpg)
![xfce demo](/content-img/202411-progress-report/xfce.jpg)

- LXQt 2.1.0 (New) with X11 functions removed, which is the first usable DE in eweOS. Unfortunately, however, [at the request of the maintainer](https://github.com/lxqt/lxqt/issues/2650), eweOS users and developers should be careful not to report bugs in eweOS to the LXQt project.
- Xfce 4.19 (New) with X11 functions disabled, which is the second usable DE in eweOS
- pipewire [1.2.6](https://github.com/eweOS/packages/commit/2ff8ca64123782c8ed585f3f70aba614c2c83d45), with [gstreamer support enabled](https://github.com/eweOS/packages/commit/1b4b2b0f8205b470d4270b6d1035b1be8e370df7)
- NetworkManager [1.50.0](https://github.com/eweOS/packages/pull/2169) (New)
- Hyprland [0.45.2](https://github.com/eweOS/packages/pull/2101)
- Wine [9.22](https://github.com/eweOS/packages/commit/c20282fc911c8792b2572960ec340b655619f786)
- telegram-desktop [5.7.2](https://github.com/eweOS/packages/pull/1971)
- mousepad [0.6.3](https://github.com/eweOS/packages/pull/2237)

### Games

![minecraft demo](/content-img/202411-progress-report/minecraft.jpg)

- prismlauncher [9.1](https://github.com/eweOS/packages/commit/99eb317806b8c9dd6834cce16ad1d43456ca8579) (New), Minecraft without flatpak is now verified as possible
- minetest [5.10.0](https://github.com/eweOS/packages/pull/2088)

### Misc

- binfmt-manager now ships [a dinit service description](https://github.com/eweOS/packages/pull/2177)

### More

- ...and more!

## Infra

### Workflow

- ewe-pkgtool [0.3.0](https://github.com/eweOS/packages/pull/1918) is released

### Repository

```
50G     ./eweos
100G    ./eweos-snapshots

3.3G    ./eweos-images
24G     ./eweos-images-snapshots
```

## Upstream

- Hyprland crash is [reported](https://github.com/hyprwm/aquamarine/issues/107) and [fixed in upstream](https://github.com/hyprwm/aquamarine/pull/108)

## Community

- A [new official mirror](https://os-repo-us.ewe.moe) is deplyed at St. Louis, United States.
- The first donation from a community supporter was received, developers will follow up with public disclosure rule of donation and its usage.

## Regular Meeting

<details>
  <summary>2nd Half</summary>

## Regular Meeting for 2024.11 2nd Half

### Attendee

- @YukariChiba, eweOS developer
- @ziyao233, eweOS developer

### Agenda

- Session management on eweOS
- Deal with downstream patches of LXQT
- Basic structure of EUR (eweOS User Repository)

</details>