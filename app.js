/*
 * @Author: your name
 * @Date: 2021-09-24 21:59:21
 * @LastEditTime: 2021-09-26 12:57:04
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \Web\app.js
 */


const querystring = require('querystring');

const handleBlogRoute = require('./src/routes/blog');

const serverHandler = (req, res) => {
    //服务器业务代码
    res.setHeader('Content-Type', 'application/json');
    //解析url
    const url = req.url;
    req.path = url.split('?')[0];
    //解析query
    req.query = querystring.parse(url.split('?')[1]);

    const blogData = handleBlogRoute(req, res);
    // const responseData = {
    //     name: '服务器',
    //     age: 20
    // }
    // res.end(
    //     JSON.stringify(responseData)
    // )
    if (blogData) {
        res.end(JSON.stringify(blogData));
        return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
}
module.exports = serverHandler;