import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PrioritySelect from './PrioritySelect'
import cards from './card_records.json'
import {scoreHandler} from './util'
import './index.css'

const length = cards.length

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards,
      priority: [null, null, null, null],
      checked: false
    };
    this.handleSelect = (index) => (e) => {
      if (e.target.value === '') {
        this.state.priority[index] = null
      } else {
        this.state.priority[index] = e.target.value
      }
      this.forceUpdate()
    }
    this.handleCheck = () => {
      const { checked } = this.state
      this.setState({ checked: !checked })
    }
  }
  render() {
    const { cards, priority, checked } = this.state
    let data = cards
    if (checked) {
      data = data.filter(card => card.star)
    }
    data = data.map(card => scoreHandler(card, priority))
    return (
      <div style={{ width: 1000, marginLeft: 'calc(50vw - 500px)', textAlign: 'right' }}>
        <div style={{ position: 'relative', marginTop: 5 }}>
          <span style={{ right: 0, color: '#d0d0d0' }}>
            作者已经加入 <a href="https://weibo.com/u/6329420338" style={{ color: '#d0d0d0' }}>Link 攻略组</a>，敬请期待
          </span>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 10 }}>
          <input type="checkbox" onClick={this.handleCheck}/>
          调整分数权重
          <PrioritySelect index={0} handleSelect={this.handleSelect} />
          <PrioritySelect index={1} handleSelect={this.handleSelect} />
          <PrioritySelect index={2} handleSelect={this.handleSelect} />
          <PrioritySelect index={3} handleSelect={this.handleSelect} />
          <a href="https://github.com/dancerphil/evol-crawler" style={{ position: 'absolute', right: 0, color: '#d0d0d0' }}>GPL3.0 By 张振衣</a>
        </div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: '',
              id: '-',
              accessor: i => i.star ? '*' : '-',
              width: 30
            },
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
          getTdProps={(state, rowInfo) => {
            return {
              onClick: (e, handleOriginal) => {
                const row = rowInfo.original;
                row.star = !row.star;
                this.forceUpdate()
                if (handleOriginal) {
                  handleOriginal()
                }
              }
            }
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
