let nums = [
  100,
  200,
  201,
  202,
  203,
  105,
  107,
  255,
  307,
  522,
  977
]
let menus = {
  100: { num: 100, parent: '977' },
  200: { num: 200, parent: '977' },
  201: { num: 201, parent: '200' },
  202: { num: 202, parent: '200' },
  203: { num: 203, parent: '522' },
  105: { num: 105, parent: '522' },
  107: { num: 107, parent: '105' },
  255: { num: 255, parent: '203' },
  307: { num: 307, parent: '201' },
  522: { num: 522, parent: '' },
  977: { num: 977, parent: '' },
}
// 977 - 100
//       200 - 201 - 307
//             202
// 522 - 203 - 255
//       105 - 107
let newMenus = []
nums.forEach(num => {
  let menu = menus[num]
  let parent = menu.parent
  if (parent) {
    let menuChild = menus[parent].child || []
    menuChild.push(menu)
    menus[parent].child = menuChild
  } else {
    newMenus.push(menus[num])
  }
})

console.log(newMenus);