/*
 * @Author: your name
 * @Date: 2021-09-24 22:29:59
 * @LastEditTime: 2021-09-26 20:37:30
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \Web\src\routes\blog.js
 */
const { getList, getDetail } = require("./controlers/blog.js");
const { SuccessModel } = require("./model/responseModel");
const handleBlogRoute = (req, res) => {
    //定义路由处理的逻辑
    const method = req.method;

    //处理博客相关路由
    if (method === 'GET' && req.path == '/api/blog/list') {
        // localhost:5000/api/blog/list?author=zhangsan&&keyword=123
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const ListData = getList(author, keyword);
        return new SuccessModel(ListData);

    }
  

    if (method === 'GET' && req.path == '/api/blog/detail') {
        const id = req.query.id;
        const detailData = getDetail(id);
        return new SuccessModel(detailData);
    }
    if (method === 'POST' && req.path == '/api/blog/new') {
        return {
            message: '新建博客的接口',
            path: req.path
        }
    }
    if (method === 'POST' && req.path == '/api/blog/update') {
        return {
            message: '更新博客的接口',
            path: req.path
        }
    }
    if (method === 'POST' && req.path == '/api/blog/delete') {
        return {
            message: '删除博客列的接口',
            path: req.path
        }
    }

}
module.exports = handleBlogRoute;