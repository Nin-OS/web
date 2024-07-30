---
title: 2024.07 Progress Report
description: "July 2024 has been a month of remarkable progress for eweOS, with notable advancements across image updates, package updating, infrastructure enhancements, and community growth."
date: 2024-07-31
---

> July 2024 has been a month of remarkable progress for eweOS, with notable advancements across image updates, package updating, infrastructure enhancements, and community growth.

## Image Updates

- Default VT is now [moved to 7](https://github.com/eweOS/iso/commit/142139949656faa26c039308802e60150260ef22) to avoid conflicts of inputs.
- LiveCD iso9660 root is now [mounted at boot](https://github.com/eweOS/iso/commit/ebcb520500b216c4a0ad78854b405490b4042f4a).
- Filesystem generation is [upgraded to a overlay layered scheme](https://github.com/eweOS/iso/commit/1328ad708c78d7ebf65a89f3f3f6c4ec2db63b20).
- Subprofiles based on layered overlay filesystem is [now introduced](https://github.com/eweOS/iso/commit/30e5c43edcac8e7d41d044f51a0601e9a8eef888).
- Old profiles like `minimal` are now useless and [got removed](https://github.com/eweOS/iso/commit/0774c8b54774d936d9b3d6f8f3fa028725664e2d).
- [A new subprofile is added](https://github.com/eweOS/iso/commit/b33306eb52c8e86105886035a91f1388129633bf) to provide better terminal experience with `yaft`.
- `liveimage-desktop` images now have 3 subprofiles (`cli` / `cli-fb` / `desktop`) and can be selected from boot menu.
- [Limine menu generation is improved](https://github.com/eweOS/iso/commit/906c81af01c2d4acb4c44433397b2df22be0bb4d) and now can be updated with subprofile items.

![Multi Profiles Booting](/content-img/202407-progress-report/profiles.png)

## Package Highlights

> 319 PRs merged in total during July 2024. See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-07-01..2024-07-30+).

### Kernel

- linux [6.9.9](https://github.com/eweOS/packages/pull/668)
- linux-lts [6.6.40](https://github.com/eweOS/packages/pull/677)
- [more usbserial drivers](https://github.com/eweOS/packages/pull/715) are added
- [netfilter modules](https://github.com/eweOS/kernel-config/commit/95975fb47470bc0fdc75a4b00edb5fe632693173) are added
- Kernel config is [now available](https://github.com/eweOS/kernel-config/commit/fc1c3ade0c15185f1379de760287dad07764c07f) from `/proc/config.gz`
- [iso 9660 driver is now enabled](https://github.com/eweOS/kernel-config/commit/4c1007fc590ca1d2b2535be956c1af26cacd0518) to provide livecd root mounting.

### Toolchain / Programming Languages

- ghc [9.4.8](https://github.com/eweOS/packages/commit/7a181229709db067d6864b3a4e72fa14c0fb0bde) has been bootstrapped on eweOS, together with Cabal [3.8.1.0](https://github.com/eweOS/packages/commit/dc9ce8e435af266654932bd577661422f6a162e3)
- llvm [18.1.8](https://github.com/eweOS/packages/pull/728), cross-compilation has been verified
- rust [1.80.0](https://github.com/eweOS/packages/pull/850)
- nodejs [22.5.0](https://github.com/eweOS/packages/pull/717)
- python [3.12.4](https://github.com/eweOS/packages/pull/707), with 20+ new python packages
- perl [5.40.0](https://github.com/eweOS/packages/pull/540)
- go [1.22.5](https://github.com/eweOS/packages/pull/563)
- verilator [5.026](https://github.com/eweOS/packages/pull/675) (new)
- systemc [3.0.0](https://github.com/eweOS/packages/pull/674) (new)

![GHC on eweOS x86_64](/content-img/202407-progress-report/ghc.jpg)

### Utils

- valgrind [3.23.0](https://github.com/eweOS/packages/pull/687) (new)
- pacman [6.1.0](https://github.com/eweOS/packages/pull/666)
- asciidoc [10.2.0](https://github.com/eweOS/packages/pull/667) (new)
- dosfstools [4.2](https://github.com/eweOS/packages/pull/527)
- btrfs-progs [6.9.2](https://github.com/eweOS/packages/pull/773) (new)
- pinentry [1.3.1](https://github.com/eweOS/packages/pull/522) with qt backend
- jade (new, testing) [is forked](https://github.com/eweOS/jade) from Jade of Crystal Linux to provide installer support, currently available in testing repo with initial support for eweOS.
- jade-gui (new, testing) [is forked](https://github.com/eweOS/jade-gui) from Jade GUI of Crystal Linux to provide GUI installer support, currently available in testing repo with initial support for eweOS.
- tty2socket [0.2.0](https://github.com/eweOS/packages/pull/856) with fixes for utmps

![Installer](/content-img/202407-progress-report/installer.png)

### Libraries

- mesa [24.1.4](https://github.com/eweOS/packages/pull/741) with ORCJIT support backported, Yukari Chiba took a great part on it.
- nss [3.102](https://github.com/eweOS/packages/pull/652), also available on [aarch64](https://github.com/eweOS/packages/pull/573)
- protobuf [27.2](https://github.com/eweOS/packages/pull/500)
- fmt [11.0.1](https://github.com/eweOS/packages/pull/664)

### Bootloaders

- limine [7.12.0](https://github.com/eweOS/packages/pull/771)

### Desktop Applications

- firefox [128.0](https://github.com/eweOS/packages/pull/653), also available on [aarch64](https://github.com/eweOS/packages/pull/686)
- weston [13.0.3](https://github.com/eweOS/packages/pull/763)
- telegram-desktop [5.2.3](https://github.com/eweOS/packages/pull/654), [fixed](https://github.com/eweOS/packages/pull/673) crash on high-resolution devices
- pipewire [1.2.1](https://github.com/eweOS/packages/pull/646)
- mutt [2.2.13](https://github.com/eweOS/packages/pull/540) (new)
- fcitx5-anthy [5.1.4](https://github.com/eweOS/packages/pull/539) (new)
- wayfire [0.8.1](https://github.com/eweOS/packages/pull/742) with fix to avoid clang over-optimization

### Server Applications

- qemu [9.0.2](https://github.com/eweOS/packages/pull/715)

### Misc

- [More docs](https://github.com/eweOS/packages/pull/676) are enabled
- man-pages [6.9.1](https://github.com/eweOS/packages/pull/660)(new)
- yaft [0.2.9](https://github.com/eweOS/packages/pull/722) with builtin customized style
- ca-certificates [20240618](https://github.com/eweOS/packages/commit/bd114681698aaa77e47e1e367dd70888e889c4cc) (new) now replaces `ca-certs` from `curl` and uses `ca-certificates-mozilla` from `nss` as source of trust

### More

- ...and more!

## Infra

- A [workflow to bump pkgver](https://github.com/eweOS/workflow/commit/b7b8e319041e3747e34378d36721884296ca17a4) automatically is introduced.
- [rollmeow](https://github.com/eweOS/rollmeow) has been used as our new update checker. [Config files are rewritten](https://github.com/eweOS/updatecheck). List of package versions in repositories is now updated every 3 hours.
- All workflows are now [running at QEMU 8.1.5](https://github.com/eweOS/workflow/commit/c84ac77e3cbe70e3d07756bd49b9d11a44c3f282), fixing issues with pacman 6.1.0.
- An experimental checker for symbols is [added into PR workflow](https://github.com/eweOS/workflow/commit/e98547279470bbeaab0c94c77dd241039982a2ea).
- [A telegram chatbot](https://t.me/eweos_bot) powered by Cloudflare Worker is added to the developer group to support convenient actions to repositories.
- Images generated by GitHub workflow are [now uploaded](https://github.com/eweOS/iso/commit/379b6b10af2952e6f28dad3940dc93f1659a4c8f) to Oracle and Cloudflare object storage.
- The dispatcher of GitHub workflow and build system is now merged into telegram bot code.

### Website

- [Resolved a problem](https://github.com/eweOS/web/commit/5462a731abb18171938788ec870871ccfda6cf74) with the performance of switching tabs at Packages page.
- The mirror list of Download page is [rewritten](https://github.com/eweOS/web/commit/6b5b424b9d671e775c3bcf2966541cda7fa753f0). Community mirrors are now splitted and placed at first.
- [Adapt package update page](https://github.com/eweOS/web/commit/5d891d51a02cf110ad84e7192c21966a32957713) to rollmeow. Now the performance is improved.
- [Added a search bar](https://github.com/eweOS/web/commit/10f8b816f8e508f4b377f4f0874d2669a6ccaa6a) for package update page.
- Added markdown style for blog

### Repository

```
Current size of repositories:
12G     ./eweos
2.7G    ./eweos-images

Current size of snapshot repositories:
16G     ./eweos-snapshots
2.2G    ./eweos-images-snapshots
```

- [Snapshots of repositories](https://os-repo-lu.ewe.moe/eweos-snapshots/) are served at official mirror at Luxembourg, providing daily and monthly-rotated snapshots of packages and images.
- Syncing logic for images is now improved. Image repository of master/backup official mirrors is now periodically fetched from object storage.

## Community

- Several of our developers and community participants attended AOSCC 2024, where @YukariChiba and @ziyao233 gave presentations related to package maintenance for eweOS.
- Our first semi-monthly community developers meeting is held online, and community will be deciding on a semi-monthly basis in the future whether or not to hold a regular meeting among developers to discuss some issues and vote on them, in order to quickly resolve some issues in developing.

## Regular Meeting

<details>
  <summary>2nd Half</summary>

## Regular Meeting for 2024.07 2nd Half

### Attendee

- @YukariChiba, eweOS developer
- @ziyao233, eweOS developer

### Agenda

- Reviewed and commented on the progress report for 2024.07.
- Updated TODO list
- Discussed future planning for the port for LoongArch and agreed on related infrastructure
- Fast-tracked the process of renaming and replacing some packages
- Discussed and agreed on technical solutions to improve limine-mkconfig
- Analyzed and resolved tty preemption issues found on the spot

</details>
