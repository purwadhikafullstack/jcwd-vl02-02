const { dbConf, dbQuery } = require('../config/db');

module.exports = {
    getProduct: (req, res) => {

        let { query, sort, filterName } = req.body;

        dbConf.query(`Select * from product 
        ${filterName ? `where product_name like ('%${filterName}%')` : ''} 
        order by ${sort ? `${sort}` : `idproduct`} asc 
        limit ${dbConf.escape(query)}`,
            (err, results) => {
                if (err) {
                    return res.status(500).send(`Middlewear getProduct failed, error : ${err}`)
                }

                res.status(200).send(results);
            })
    },
    filterProduct: (req, res) => {
        let filterCategory = req.query.category_id;
        let { query, sort, filterName } = req.body;

        // let resultFilter = filterCategory.map((val, idx) => {
        //     if (idx == 0) {
        //         if (JSON.stringify(filterName) == '{}') {
        //             return `where category_id = ${val}`
        //         } else {
        //             return `and (category_id = ${val}`
        //         }
        //     } else if (idx==(filterCategory.length-1)) {
        //         if (JSON.stringify(filterName) == '{}') {
        //             return `or category_id = ${val}`
        //         } else {
        //             return `and category_id = ${val})`
        //         }
        //     } else {
        //         if (JSON.stringify(filterName) == '{}') {
        //             return `or category_id = ${val}`
        //         } else {
        //             return `and category_id = ${val}`
        //         }
        //     }
        // })

        // dbConf.query(`Select * from product 
        //     ${JSON.stringify(filterName) != '{}' ? `where ${filterName.field} like ('%${filterName.value}%')` : ''} 
        //     ${filterCategory ? resultFilter.join(' ') : ''}
        //     order by ${sort ? `${sort}` : `idproduct`} asc 
        //     limit ${dbConf.escape(query)}`,
        //         (err, results) => {
        //             if (err) {
        //                 return res.status(500).send(`Middlewear getProduct failed, error : ${err}`)
        //             }

        //             res.status(200).send(results);
        //         })

        if(JSON.stringify(filterName) != '{}'){
            `and category_id = ${filterCategory}`
        } else {
            `where category_id = ${filterCategory}`
        }

        // let a = `Select * from product 
        // ${filterCategory ? `where category_id=${filterCategory}` : ''}
        // ${JSON.stringify(filterName) != '{}' ? `and ${filterName.field} like ('%${filterName.value}%')` : ''} 
        // order by ${sort ? `${sort}` : `idproduct`} asc 
        // limit ${dbConf.escape(query)}`

        // console.log(a)

        dbConf.query(`Select * from product 
        ${filterCategory ? `where category_id=${filterCategory}` : ''}
        ${filterName ? `and product_name like ('%${filterName}%')` : ''} 
        order by ${sort ? `${sort}` : `idproduct`} asc 
        limit ${dbConf.escape(query)}`,
            (err, results) => {
                if (err) {
                    return res.status(500).send(`Middlewear getProduct failed, error : ${err}`)
                }

                res.status(200).send(results);
            })
    },
    getCategory: (req, res) => {
        dbConf.query(`Select * from category`,
            (err, results) => {
                if (err) {
                    return res.status(500).send('Middlewear getCategory failed, error :', err)
                }

                res.status(200).send(results);
            })
    },
    getcartdata: async (req, res) => {
        try {
            // butuh authorization token
            // sementara pakai manual data iduser = 2;
            // harus join sm tabel stock juga

            let getSql = await dbQuery(`SELECT * FROM cart c JOIN product p ON c.product_id = p.idproduct WHERE c.user_id = 2;`);

            res.status(200).send(getSql);

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },

    deletecart: async (req, res) => {
        try {
            await dbQuery(`DELETE FROM cart WHERE idcart=${dbConf.escape(req.query.idcart)}`);

            res.status(200).send({
                success: true,
                message: 'Delete Success'
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },

    updatecart: async (req, res) => {
        try {
            //console.log(req.body)
            if (req.body.selected){
                if(req.body.iduser){
                    // harus pakai iduser
                    await dbQuery(`UPDATE cart SET selected=${dbConf.escape(req.body.selected)} WHERE user_id = 2;`);
                } else {
                    await dbQuery(`UPDATE cart SET selected=${dbConf.escape(req.body.selected)} WHERE idcart=${dbConf.escape(req.body.idcart)};`);
                }
            } else {
                await dbQuery(`UPDATE cart SET quantity=${dbConf.escape(req.body.newQty)} WHERE idcart=${dbConf.escape(req.body.idcart)};`);
            }

            res.status(200).send({
                success: true,
                message: 'Update Success'
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
};
