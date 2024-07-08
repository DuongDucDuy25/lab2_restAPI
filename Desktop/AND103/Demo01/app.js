const express = require('express');
const mongoose = require('mongoose');
const SinhVien = require('./sinhvien');
const app = express();

// Kết nối với MongoDB
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/AND103')
.then(() => {
    console.log("Kết nối thành công");
}).catch((error) => {
    console.log("Kết nối thất bại " + error);
});
app.get('/sinhvien', async (req, res) => {
    try {
        const sinhviens = await SinhVien.find(); //đọc dữ liệu từ csdl
        console.log(sinhviens);
        res.json(sinhviens);//chuyển dữ liệu json
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/sinhvien', async (req, res) => {
    console.log(req.body); // Kiểm tra dữ liệu nhận được
    const sinhvien = new SinhVien(req.body);
    try {
        await sinhvien.save();
        res.status(201).send(sinhvien);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});