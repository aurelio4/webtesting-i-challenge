const enhancer = require('./enhancer.js');
// test away!

let item
const name = 'test item'
const durability = 50
const level = 17

describe('item enhancer', () => {
  it('should restore item durability to max', () => {

    item = {
      name,
      durability,
      level
    }

    expect(enhancer.repair(item)).toStrictEqual({
      name,
      durability: 100,
      level
    })
  })

  it('should upgrade item when the item successfully enhancement', () => {

    item = {
      name,
      durability,
      level
    }

    expect(enhancer.succeed(item)).toStrictEqual({
      name: item.name,
      durability: item.durability,
      level: 18
    })
  })

  it('should decrease item stats when the item successfully fails enhancement', () => {

    item = {
      name,
      durability,
      level
    }

    expect(enhancer.fail(item)).toStrictEqual({
      name: item.name,
      durability: 40,
      level: 16
    })
  })

  it('should change the name of the item based on its level', () => {
    item = {
      name,
      durability,
      level
    }
    expect(enhancer.get(item)).toStrictEqual({
      name: '[+17] test item',
      durability,
      level: 0
    })
  })
})