import { useEffect, useContext, useState } from "react";
import "./trans.css";
import axios from "../../hooks/axios";
// import { Footer } from '../../components';

import { AuthContext } from "../../context/authContext";
import { Navbar } from "../../components";

function Trans() {
  const { data } = useContext(AuthContext);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const fetchTrans = async () => {
      console.log(data.email);
      const responseData = await axios.post("/user", {
        email: data.email,
      });

      console.log(responseData.data);
      for (let i in responseData.data) {
        console.log(responseData.data[i]);
      }
      setTransactions(responseData.data);
    };

    fetchTrans();
  }, []);

  return (
    <>
    <div className="Trans">
    <Navbar login={true} />
          <h2>Transaction History</h2>
        <div class="container">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="topic1">Transaction Id</div>
              <div class="topic2">Contract Address</div>
              <div class="col col-3">Date Of Agreement</div>
              <div class="col col-4">Tenure</div>
              <div class="col col-4"></div>
            </li>

            {transactions &&
              transactions.transactions.map((transaction) => {
                return (
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">
                      {transaction.transactionHash}
                    </div>
                    <div class="col col-2" data-label="Customer Name">
                      {transaction.contractAddr}
                    </div>
                    <div class="col col-3" data-label="Amount">
                      {transaction.details.dateOfStarting}
                    </div>
                    <div class="col col-4" data-label="Payment Status">
                      {transaction.details.years}
                    </div>

                    <div class="col col-4" data-label="Payment Status">
                      <a
                        href={`https://goerli.etherscan.io/tx/${transaction.transactionHash}`}
                        target="_blank"
                      >
                        View Details
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Trans;
