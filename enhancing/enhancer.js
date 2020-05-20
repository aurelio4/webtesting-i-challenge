module.exports = {
  succeed,
  fail,
  repair,
  get,
}

function succeed(item) {
  if (item.level === 20) {
    item.level = item.level
  } else {
    item.level += 1
  }

  return {
    ...item
  }
}

function fail(item) {
  if (item.level < 15) {
    if (item.durability < 5) {
      item.durability = 0
    } else {
      item.durability -= 5
    }
  }

  if (item.level >= 15) {
    if (item.durability < 10) {
      item.durability = 0
    } else {
      item.durability -= 10
    }
  }

  if (item.level > 16) {
    item.level -= 1
  }

  return {
    ...item
  }
}

function repair(item) {
  item.durability = 100
  return {
    ...item
  }
}

function get(item) {
  if (item.level === 0) {
    return {
      ...item
    }
  } else {
    item.name = `[+${item.level}] ${item.name}`
    item.level = 0
    return {
      ...item
    }
  }
}