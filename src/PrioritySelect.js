import React from "react";

class PrioritySelect extends React.Component {
  render() {
    const { handleSelect, index } = this.props;
    return (
      <select defaultValue="无" style={{ width: 120 }} onChange={handleSelect(index)}>
        <option value="">无</option>
        <option value="决策">决策</option>
        <option value="创造">创造</option>
        <option value="亲和">亲和</option>
        <option value="行动">行动</option>
      </select>
    )
  }
}

export default PrioritySelect
