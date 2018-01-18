import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import data from './card_records.json'

const length = data.length

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "角色",
              accessor: "角色"
            },
            {
              Header: "名称",
              accessor: "名称"
            },
            {
              Header: "稀有度",
              accessor: "稀有度"
            },
            {
              Header: "决策",
              accessor: "决策"
            },
            {
              Header: "创造",
              accessor: "创造"
            },
            {
              Header: "亲和",
              accessor: "亲和"
            },
            {
              Header: "行动",
              accessor: "行动"
            },
          ]}
          defaultPageSize={length}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
