/**
 * Created by Admin on 3/14/2017.
 */
var cat_tree = [
    {
        name: 'Đồ sơ sinh',
        sub: [
            {
                name: 'Quần áo',
                sub: [
                    {
                        name: 'Body'
                    },
                    {
                        name: 'Set quần áo'
                    },
                    {
                        name: 'Áo khoác'
                    },
                    {
                        name: 'Yếm'
                    },
                    {
                        name: 'Tã dán'
                    }
                ]
            },
            {
                name: 'Giày dép',
                sub: [
                    {
                        name: 'Tất',
                    },
                    {
                        name: 'Giày'
                    },
                    {
                        name: 'Dép'
                    }
                ]
            },
            {
                name: 'Phụ kiện',
                sub: [
                    {
                        name: 'Bao tay',
                    },
                    {
                        name: 'Bao chân'
                    },
                    {
                        name: 'Kén ủ'
                    },
                    {
                        name: 'Màn'
                    }
                ]
            },
            {
                name: 'Đồ cho bé ăn',
                sub: [
                    {
                        name: 'Cọ bình'
                    },
                    {
                        name: 'Giá để bình sữa'
                    }
                ]
            },
            {
                name: 'Dụng cụ khác',
                sub: [
                    {
                        name: 'Gối'
                    },
                    {
                        name: 'Chăn'
                    },
                    {
                        name: 'Tấm lót'
                    },
                    {
                        name: 'Khăn xô'
                    },
                    {
                        name: 'Khăn tắm'
                    },
                    {
                        name: 'Thảm chống nước'
                    }
                ]
            }
        ]
    },
    {
        name: 'Đồ cho bé',
        sub: [
            {
                name: 'Quần áo',
                sub: [
                    {
                        name: 'Mũ',
                    },
                    {
                        name: 'Áo len'
                    },
                    {
                        name: 'Áo yếm'
                    },
                    {
                        name: 'Váy'
                    }
                ]
            },
            {
                name: 'Giày dép',
                sub: [
                    {
                        name: 'Tất',
                    },
                    {
                        name: 'Giày'
                    },
                    {
                        name: 'Dép'
                    }
                ]
            },
            {
                name: 'Phụ kiện',
                sub: [
                    {
                        name: 'Băng đô',
                    },
                ]
            }
        ]
    },
    {
        name: 'Bé trong nhà'
    },
    {
        name: 'Bé đi chơi'
    },
    {
        name: 'Sức khỏe bé'
    },
    {
        name: 'Đồ cho mẹ',
        sub: [
            {
                name: 'Đồ ngủ'
            },
            {
                name: 'Áo lót sơ sinh'
            },
            {
                name: 'Gel bụng'
            }
        ]
    }
];

module.exports = cat_tree;