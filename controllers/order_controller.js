//================= 訂單相關Controller =================

//model
// import MembersModel from '../models/members_model.js';//訂單相關Model

export default class orderController {

    async getOneOrder(req, res, next) {
        try {

            if (!req.session.email) {
                // 返回 401 代表未授權
                return res.status(401).json({
                    error: 'User not logged in',
                });
            }

            const { id, quantity } = req.body;

            res.json({
                id: id,
                quantity: quantity,
            });

        } catch (error) {
            // 在 catch 中也可以直接返回 500 代表內部服務器錯誤
            res.status(500).json({
                error: 'Internal server error',
            });
        }
    };


}
