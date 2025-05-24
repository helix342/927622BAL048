import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const StocksPage = () => {

    const [data, setData] = useState([]);
    const getData = async () => {
      await axios.get("http://localhost:8000/getData")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });

    };

    useEffect(() => {
      getData();
    }, []);

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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.company}</td>
                            <td>{item.stockName}</td>
                            <td>{item.stockPrice}</td>
                            <td>{item.lastUpdated}</td>
                            <td><button>Add</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StocksPage;