/*
 * @Author: your name
 * @Date: 2021-09-25 15:27:00
 * @LastEditTime: 2021-09-26 12:57:38
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \Web\src\routes\controlers\blog.js
 * 博客相关方法
 */
const getList = (author, keyword) => {
    //从数据库去数据/假数据
    return [{
            id: 1,
            title: 'title1',
            content: 'content1',
            author: 'zhangsan',
            createdAt: 1610555518935
        },
        {
            id: 2,
            title: 'title2',
            content: 'content3',
            author: 'lisi',
            createdAt: 1610555535044
        },
    ]
}


const getDetail = (id) => {
    return [{
        id: 2,
        title: 'title2',
        content: 'content3',
        author: 'lisi',
        createdAt: 1610555535044
    }]
}




module.exports = {
    getList,
    getDetail
}