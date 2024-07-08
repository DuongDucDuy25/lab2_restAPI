const mongoose = require('mongoose');

// Định nghĩa schema
const sinhvienSchema = new mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: String,
    },
},{ versionKey: false })

// Tạo model từ schema
const SinhVien = mongoose.model('Student', sinhvienSchema);
module.exports = SinhVien;