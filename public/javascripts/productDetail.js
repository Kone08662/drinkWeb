const sendOrder = async productId => {
    try {
        // 訂購數量
        const quantity = document.getElementById('quantity').value;
        // 商品價格
        const price = document.getElementById('price').value;

        // 使用 axios.post 直接將 URL 參數放在 URL 中，並將請求主體放在 data 中
        const response = await axios.post(`/order/${productId}/${quantity}`, {});

        // 處理成功回應，例如更新介面、顯示成功消息等
        console.log(response.data);
    } catch (error) {
        // 處理錯誤，例如顯示錯誤消息
        console.error(error);
        console.log(response.data);
    }
};
