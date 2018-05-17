# install dependencies
sudo apt-get update -y
sudo apt-get install -y build-essential git libtool gettext autoconf libgconf2-dev libncurses5-dev python-dev fio bison autopoint

# blkdiscard
git clone git://git.kernel.org/pub/scm/utils/util-linux/util-linux.git
cd util-linux/
./autogen.sh
./configure --disable-libblkid
make
sudo mv blkdiscard /usr/bin/
sudo blkdiscard /dev/disk/by-id/google-local-ssd-0

# full write pass - measures write bandwidth with 1M blocksize
sudo fio --name=writefile --size=100G --filesize=100G --filename=/dev/disk/by-id/google-local-ssd-0 --bs=1M --nrfiles=1 --direct=1 --sync=0 --randrepeat=0 --rw=write --refill_buffers --end_fsync=1 --iodepth=200 --ioengine=libaio

# rand read - measures max read IOPs with 4k blocks
sudo fio --time_based --name=benchmark --size=100G --runtime=30 --filename=/dev/disk/by-id/google-local-ssd-0 --ioengine=libaio --randrepeat=0 --iodepth=128 --direct=1 --invalidate=1 --verify=0 --verify_fatal=0 --numjobs=4 --rw=randread --blocksize=4k --group_reporting

# rand write - measures max write IOPs with 4k blocks
sudo fio --time_based --name=benchmark --size=100G --runtime=30 --filename=/dev/disk/by-id/google-local-ssd-0 --ioengine=libaio --randrepeat=0 --iodepth=128 --direct=1 --invalidate=1 --verify=0 --verify_fatal=0 --numjobs=4 --rw=randwrite --blocksize=4k --group_reporting
