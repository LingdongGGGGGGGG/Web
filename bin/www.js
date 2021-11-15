/*
 * @Author: your name
 * @Date: 2021-09-24 21:56:17
 * @LastEditTime: 2021-09-26 20:37:37
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \Web\bin\www.js
 */
//创建服务器
const http = require('http');

const severHandler = require('../app');

const PORT = 5000;

const server = http.createServer(severHandler);

server.listen(PORT, () => {
    console.log('server running at port 5000...');
})