const express = require('express')
const Mock = require('mockjs')

const app = express()

app.use(function (req, res, next) {
    // 配置跨域
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
    res.header("Access-Control-Allow-Headers", "*")
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

app.use('/list', function (req, res) {
    res.json(Mock.mock({
        'code': 0,
        'msg': "成功",
        "total": 10,
        'list|10': [
            {
                "title": "【活动通知】@ctitle",
                "time": "@date(yyyy-MM-dd hh:mm:ss)"
            }
        ]
    }))
})

app.listen('9999', () => {
    console.log('server is running on 9999')
})