---
title: Development Roadmap (2024.03.ver)
description: 'The focus of future eweOS development and the issues that need to be addressed. (2024.03 Ver)'
date: 2024-03-11
---

## Architecture Support

- ~~**aarch64** initial support is on our roadmap~~ (Finished)
- ~~**aarch64** will be built in Main and Testing repo~~ (Finished)
- ~~**aarch64** KIS image will be released~~ (Finished)
- ~~**riscv64** initial support is on our roadmap~~ (Finished)
- **aarch64** in Main repo will get all packages built successfully (Near finished)
- ~~**riscv64** will be built in Main and Testing repo~~ (Finished)
- **riscv64** in Main repo will get all packages built successfully

## System Utils

- ~~**dinit** system services will be redesigned.~~ (Finished)
- ~~**dinit** user services will be initialized.~~ (Finished)
- **obs-worker** will be able to run directly in eweOS.
- ~~**System Image Creation** will be able to accomplish directly in eweOS.~~ (Finished)

## Graphics and Desktop

- ~~**sway** will be the first usable compositor for eweOS.~~ (Finished)
- ~~**GNOME** will NOT be our immediate goal. It will be considered when all pre-requisites are ready and stable.~~ (Mutter requires X11, just be patient)
- More **fonts** will be added into Testing repo.
-  **OpenJFX** will be provided to play Minecraft.
- **hyprland** will be our demo desktop environment, relevant scripts will be packaged to provide out-of-box experience.
- ~~**mesa** will be our only choice of video driver, with support of more GPUs.~~ (Finished)
- A **wallpaper** collection will be created for eweOS.

## Multimedia

- **pipewire** will be our only choice of audio system, and **wireplumber** support for libudev-zero will be investigated.

## Language Support

- **Python** support with common packages is on our roadmap.
- **Java** bootstrapping with its build tools is on our roadmap.

## Infra

- ~~**Package list** will be added to our homepage.~~ (Finished)
- ~~**Architecture** information will be added into Package List.~~ (Finished)
- **User Repository** will be ready to accept build scripts from community.
- ~~**Main Repo Server** will be moved to europe/US.~~ (mirrors deployed)
- ~~**OBS Server** will be moved to a safer zone.~~ (Finished)
- ~~More **build workers** for multiple architectures will be added.~~ (aarch64 workers added)
- An **auto package upgrading** system will be developed and deployed, with GitHub issues for notification.
- ~~An **image creation service** will be developed with `systemd-nspawn` and `qemu-user` to create daily system image of eweOS.~~ (Finished)

## Testing

- **VM-based system automatic testing** will be added and performed after system image creation.

## Device-targeted Kernels

- For `aarch64`, **RockPi 5B** will be initially supported with 5.10 kernel from vendor. **Raspberry Pi 4B** will be supported with mainline kernel later.
- For `riscv64`, **Visionfive2** will be initially supported with 515 kernel from vendor. **Hifive Unmatched** will be supported with mainline kernel later. 