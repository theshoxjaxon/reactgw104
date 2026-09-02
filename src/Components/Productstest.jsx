import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Productstest = () => {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(respons => {
            setData(respons.data)
            console.log(respons.data)
        }).catch((err) => {
            console.log("Bart Sizdagi error: ", err)
        })
    }, [])

    const viewModal = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setSelectedProduct(null)
        setIsModalOpen(false)
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Products Catalog</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((product) => (
                        <div
                            key={product.id}
                            // Added onClick to trigger the modal function passing the whole product
                            onClick={() => viewModal(product)}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group cursor-pointer"
                        >
                            <div className="relative w-full h-56 bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="font-semibold text-gray-800 text-base mb-2 line-clamp-1" title={product.title}>
                                    {product.title}
                                </h2>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                                    {product.description}
                                </p>
                                <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                                    <span className="text-lg font-bold text-indigo-600">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Modal Backdrop and Content */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        >
                            ✕
                        </button>

                        {/* Modal Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-50 p-4 rounded-xl flex items-center justify-center">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="max-h-full object-contain"
                            />
                        </div>

                        {/* Modal Details */}
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div>
                                <span className="text-xs uppercase tracking-wider font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                                    {selectedProduct.category}
                                </span>
                                <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                                    {selectedProduct.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {selectedProduct.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-2xl font-extrabold text-indigo-600">
                                    ${selectedProduct.price}
                                </span>
                                <button
                                    onClick={closeModal}
                                    className="px-5 py-2 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Productstest