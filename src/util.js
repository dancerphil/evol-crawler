const order = ['决策', '创造', '亲和', '行动']
const order_reached = [false, false, false, false]
const weight = [0.85, 0.6, 0.35, 0.2]
const weight_reached = [false, false, false, false]

export function scoreHandler(card, priority) {
  let score = 0;
  priority.forEach((item, index) => {
    if(item !== null) {
      const order_index = order.findIndex(i => i === item)
      order_reached[order_index] = true
      weight_reached[index] = true
      score += card[item] * weight[index]
    }
  })
  let weight_average = 0;
  let weight_sum = 0;
  let weight_count = 0;
  weight_reached.forEach((bool, index) => {
    if(!bool) {
      weight_sum += weight[index]
      weight_count += 1;
    }
  })
  if(weight_count !== 0) {
    weight_average = weight_sum / weight_count
    order_reached.forEach((bool, index) => {
      if(!bool) {
        const item = order[index]
        score += card[item] * weight_average
      }
    })
  }
  return Object.assign(card, {'分数': Number(score.toFixed(1))})
}
