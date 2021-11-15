/*
 * @Author: your name
 * @Date: 2021-09-26 20:30:00
 * @LastEditTime: 2021-09-26 21:39:34
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \Web\promise-demo\index.js
 */
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
// //读取文件内容
// function getFileContent(filename, callback) {
//     const fullFilename = path.resolve(__dirname, 'data', filename); //数据文件的绝对路径
//     fs.readFile(fullFilename, (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         callback(JSON.parse(data.toString()));
//     })
// }
//回调地狱
// getFileContent('a.json', (aData) => {
//     console.log('aData', aData.message);
//     getFileContent(aData.next, (bData) => {
//         console.log('bData', bData.message);
//         getFileContent(bData.next, (cData) => {
//             console.log('cData', cData.message);
//         })
//     })
// })
//代替回调地狱的方法:promise树
function getFileContent(filename) {
    const promise = new Promise((resolve, reject) => {
        const fullFilename = path.resolve(__dirname, 'data', filename); //数据文件的绝对路径
        fs.readFile(fullFilename, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data.toString()));
        });

    })
    return promise;
}
getFileContent('a.json').then((aData) => {
    console.log('aData', aData);
    return getFileContent(aData.next);
}).then((bData) => {
    console.log('bData', bData);
    return getFileContent(bData.next);
}).then((cData) => {
    console.log('cData', cData);
})