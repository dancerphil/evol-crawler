import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PrioritySelect from './PrioritySelect'
import cards from './card_records.json'
import {scoreHandler} from './util'

const length = cards.length

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards,
      priority: [null, null, null, null]
    };
    this.handleSelect = (index) => (e) => {
      if (e.target.value === '') {
        this.state.priority[index] = null
      } else {
        this.state.priority[index] = e.target.value
      }
      this.forceUpdate()
    }
  }
  render() {
    const { cards, priority } = this.state;
    const data = cards.map(card => scoreHandler(card, priority))
    return (
      <div>
        <div>
          调整分数权重
          <PrioritySelect index={0} handleSelect={this.handleSelect} />
          <PrioritySelect index={1} handleSelect={this.handleSelect} />
          <PrioritySelect index={2} handleSelect={this.handleSelect} />
          <PrioritySelect index={3} handleSelect={this.handleSelect} />
        </div>
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
            {
              Header: "分数",
              accessor: "分数"
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
