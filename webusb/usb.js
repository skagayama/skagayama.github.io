'use strict';

function findBleDevices() {
    if (navigator.bluetooth) {
        navigator.bluetooth.requestDevice({ acceptAllDevices: true })
            .then(function (device) {
                console.log(device);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

const auth = () => {
    const vendorId = 8352; // ここにVendor ID
    const productId = 17001; // ここにProduct ID
    // const vendorId = '20a0'; // ここにVendor ID
    // const productId = '4269'; // ここにProduct ID
    // const serialNumber = 'XXXXXXXX'; // ここにSerial Number
    navigator.usb.requestDevice(
        {
            'filters': [
                // { 'vendorId': vendorId, 'productId': productId }
            ]
        }
    ).then(device => {
        console.log(device);
        // if (device.serialNumber === serialNumber) {
        //     console.log('success!');
        //     login();
        //     return device.open;
        // } else {
        //     console.log('false!');
        //     alert('認証に失敗しました');
        // }
    }).catch(error => {
        console.log(error);
    });
}
// document.getElementById('connect').addEventListener("click", auth, false);

document.getElementById('connect').addEventListener("click", findBleDevices, false);
