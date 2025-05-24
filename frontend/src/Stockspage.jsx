import React from "react";
import { useNavigate } from 'react-router-dom';

const StocksPage = () => {
    return (
        <div>
            <h1>Stock Price Aggregator</h1>
            <table className='table table-responsive table-bordered table-hover'>
                <thead className="table-center">
                    <tr>
                    <th>S.No</th>
                    <th>Company</th>
                    <th>Stock Name</th>
                    <th>Stock Price</th>    
                    <th>Last Updated at</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Apple Inc.</td>
                        <td>AAPL</td>
                        <td>$150.00</td>
                        <td>2023-10-01 12:00:00</td>
                        <td><button>Add</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Microsoft Corp.</td>
                        <td>MSFT</td>
                        <td>$300.00</td>
                        <td>2023-10-01 12:00:00</td>
                        <td><button>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StocksPage;