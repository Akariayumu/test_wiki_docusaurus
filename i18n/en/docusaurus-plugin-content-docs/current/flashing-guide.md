---
title: C1902 Flashing Guide
---

# C1902 System Flashing Guide

::: tip Preparation
It is recommended to perform flashing operations on a **Linux system or Linux virtual machine**. For VM and SDK Manager installation, refer to the VMware setup guide.
:::

## 1. Flashing with NVIDIA SDK Manager

### 1.1 Configure VMware USB Mode

Set the USB connection mode to **Connect to the foreground virtual machine** to prevent flashing failures caused by the board rebooting mid-process.

![VMware USB Setting 1](/img/flash-vmware-usb-1.png)

![VMware USB Setting 2](/img/flash-vmware-usb-2.png)

### 1.2 Enter Recovery Mode

1. Use a jumper cap to short the **FC REC** and **GND** pins on the board.
2. Connect the board to your computer using a USB to Type-C cable.
3. Power on the board with the DC adapter.

> Once in recovery mode, SDK Manager will automatically detect the module type and prompt you to select the kit type. The cooling fan will not spin.

![FC REC Jumper Short](/img/flash-recovery-jumper.jpg)

![Recovery Mode Detected](/img/flash-recovery-detected.png)

::: warning Note
The board will reboot into the system if left idle in recovery mode. Pay attention to timing.
:::

### 1.3 Configure SDK

1. Uncheck **Host Machine** and click **CONTINUE**

![Cancel Host Machine](/img/flash-sdk-cancel-host.png)

2. Select only **Jetson Linux**

![Select Jetson Linux](/img/flash-sdk-jetson-linux.png)

### 1.4 Wait for Download

![Downloading](/img/flash-downloading.png)

### 1.5 Configure Flashing Parameters

**Pre-Config**: Pre-set username and password

![Pre-Config](/img/flash-preconfig.png)

**Runtime**: Configure username and password after boot

![Runtime](/img/flash-runtime.png)

**Storage Device**: Select the target medium (SD card / NVMe SSD / USB drive)

![Storage Device Selection](/img/flash-storage-device.png)

Select **Developer Kit Version**:

![Select DevKit Version](/img/flash-devkit-version.png)

![Flashing in Progress](/img/flash-sdk-flashing.png)

![Flashing Complete](/img/flash-sdk-done.png)

::: warning Important
- The board may reconnect multiple times during flashing. **Do not disconnect the USB cable or power**.
- You can remove the jumper cap once the module type has been detected.
- The process takes approximately **10–20 minutes**.
:::

> After flashing completes, remove the jumper cap, power on, and boot into the desktop or setup screen to confirm success.

---

## 2. Command-Line SUPER Mode Flashing

::: warning Prerequisites
This method requires the official firmware environment. Complete at least one full flash via SDK Manager first to create the firmware cache.
:::

### 2.1 Enter Recovery Mode

Short **FC REC** and **GND** pins with a jumper cap, connect via Type-C cable, and power on the board to enter recovery mode.

### 2.2 Command-Line Flashing

::: danger Caution
**Close any running SDK Manager** before proceeding. The flash takes approximately **10–20 minutes**.
:::

**JetPack 6.2 Command:**

```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# Adjust path according to your actual version and directory

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

**JetPack 5.1.5 Command:**

```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_5.1.5_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# Adjust path according to your actual version and directory

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml \
  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

![Command-Line Flashing](/img/flash-cli-flashing.png)

### 2.3 Verify SUPER Mode

After completing user setup, select the power mode from the top-right desktop menu:
- **25W & MAXN SUPER** are unique to SUPER mode
- Standard mode only offers **7W** and **15W**

![SUPER Mode Verification](/img/flash-super-mode-verify.png)

---

## 3. Backup and Restore Firmware

### 3.1 Backup Firmware

**Method 1: Hardware Recovery Mode**
- Short **FC REC** and **GND** pins with a jumper cap
- Connect via Type-C cable to computer
- Power on the board to enter recovery mode

**Method 2: Command Reboot to Recovery**
- From a normal boot, run:

```bash
sudo reboot -f forced-recovery
```

**Flashing Steps:**

1. Navigate to the firmware cache directory:
```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# Adjust path according to your actual version and directory
```

2. Install dependencies on the host:
```bash
sudo apt-get install qemu-user-static libxml2-utils abootimg sshpass nfs-kernel-server binutils
```

3. **Backup Command**:
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -b -e nvme0n1 jetson-orin-nano-devkit-nvme
```

4. **Restore Command**:
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -r -e nvme0n1 jetson-orin-nano-devkit-nvme
```

::: warning Third-Party Carrier Boards
If restoring to a third-party carrier board, modify `nvrestore_partitions.sh` and comment out **lines 292–296**.
:::

---

[← Back to C1902 Product Introduction](/en/c1902)

> Source: [LinkZee Labs — C1902 Flashing Guide](https://www.linkzeelabs.com/wiki/books/68839/page/c1902)
