class Serivces {
    getProductList = () => axios
        ({
            url: "https://628b995c7886bbbb37bbca67.mockapi.io/api/phones",
            method: "GET"
        });

    deleteProduct = (id) => axios
        ({
            url: `https://628b995c7886bbbb37bbca67.mockapi.io/api/phones/${id}`,
            method: "DELETE"
        });


    addProductApi = (product) => axios
        ({
            url: "https://628b995c7886bbbb37bbca67.mockapi.io/api/phones",
            method: "POST",
            data: product
        })

    getProductById = (id) => axios
        ({
            url: `https://628b995c7886bbbb37bbca67.mockapi.io/api/phones/${id}`,
            method: "GET"
        })

    editProductApi = (product) => axios
        ({
            url: `https://628b995c7886bbbb37bbca67.mockapi.io/api/phones/${product.id}`,
            method: "PUT",
            data: product
        })
}