// https://observablehq.com/@mariaclee1/world-tour@522
const mapJson = require('./country.json')
import * as D3 from 'd3'
const topJson = require('./topjson')

function define(runtime, observer) {
  const main = runtime.module()
  main
    .variable(observer('canvas'))
    .define(
      'canvas',
      [
        'DOM',
        'width',
        'height',
        'd3',
        'sphere',
        'land',
        'borders',
        'countries',
        'mutable name',
        'tilt',
        'Versor'
      ],
      async function * (
        DOM,
        width,
        height,
        d3,
        sphere,
        land,
        borders,
        countries,
        $0,
        tilt,
        Versor
      ) {
        const context = DOM.context2d(width, height)
        // context.scale(0.84, 0.84);
        // context.translate();
        const projection = d3.geoOrthographic().fitExtent(
          [
            [0, 0],
            [width, height]
          ],
          sphere
        )
        const path = d3.geoPath(projection, context)

        function render(country, arc) {
          context.clearRect(0, 0, width, height)
          context.lineWidth = 1.5
          // 地球填充色
          context.fillStyle = '#ffffff'
          // eslint-disable-next-line no-sequences
          context.beginPath(), path(sphere), context.fill(), context.stroke()

          // eslint-disable-next-line no-sequences
          context.beginPath(),
          // 陆地颜色
          path(land),
          (context.fillStyle = '#F0F0F0'),
          context.fill()

          // eslint-disable-next-line no-sequences
          context.beginPath(),
          path(country),
          // 国家颜色
          (context.fillStyle = '#F0F0F0'),
          context.fill()

          // eslint-disable-next-line no-sequences
          context.beginPath(),
          path(borders),
          // 国家边界
          (context.strokeStyle = '#ffffff'),
          (context.lineWidth = 0.5),
          context.stroke()

          // eslint-disable-next-line no-sequences
          context.beginPath(),
          path(arc),
          (context.strokeStyle = 'transparent'),
          (context.lineWidth = 1.5),
          context.stroke()

          return context.canvas
        }

        let p1
        let p2 = [0, 0]
        let r1
        let r2 = [0, 0, 0]
        // 改变国家
        // let id = "616";
        while (true) {
          for (const country of countries) {
            // eslint-disable-next-line no-unused-vars
            $0.value = country.properties.name
            // eslint-disable-next-line no-redeclare
            var time
            if ($0.value === 'China') {
              time = 14000
            } else if ($0.value === 'United States of America') {
              // eslint-disable-next-line no-redeclare
              time = 8000
            } else {
              time = 8000
            }
            yield render(country);

            // eslint-disable-next-line no-sequences
            (p1 = p2), (p2 = d3.geoCentroid(country));
            // eslint-disable-next-line no-sequences
            (r1 = r2), (r2 = [-p2[0], tilt - p2[1], 0])
            // 在两个点之间沿着大圆进行插值.
            const ip = d3.geoInterpolate(p1, p2)
            // 旋转角度
            const iv = Versor.interpolateAngles(r1, r2)

            await d3
              .transition()
              .ease(d3.easePolyInOut)
              // 地球旋转时间
              .duration(3000)
              .on('end', () => {
                // 转去处理函数(只简化一个标签国家)
                function go(a, b) {
                  const KoreaApart = document.querySelector('#map-apart')
                  const country_tag = KoreaApart.querySelector(a)
                  country_tag.classList.add('active')

                  // 首尔标签
                  const shouer = country_tag.querySelector(b)
                  shouer.querySelector('.Tag').onmouseenter = function() {
                    if (this.parentNode.className.indexOf('active') > -1) {
                      this.parentNode.classList.add('reactive')
                    } else {
                      return null
                    }
                  }

                  shouer.querySelector('.Tag').onmouseleave = function() {
                    if (this.parentNode.className.indexOf('active') > -1) {
                      this.parentNode.classList.remove('reactive')
                    }
                  }

                  const showTag = async() => {
                    await setTimeout(() => {
                      shouer.classList.add('active')
                    }, 1000)

                    await setTimeout(() => {
                      shouer.classList.add('active_item')
                    }, 2000)

                    await setTimeout(() => {
                      shouer.classList.remove('active_item')
                    }, 6000)
                  }

                  showTag()
                }

                try {
                  // 转去的是中国
                  if (country.properties.name === 'China') {
                    // eslint-disable-next-line no-unused-vars
                    const ChinaApart = document.querySelector(
                      '#map-apart .china_tag'
                    )
                    ChinaApart.classList.add('active')

                    const Wuhan = document.querySelector('.Wuhan')
                    const shanghai = document.querySelector('.shanghai')

                    // 定义中国标签数组
                    const ChinaTag = [Wuhan, shanghai]

                    // 注册鼠标移入事件
                    for (let i = 0; i < ChinaTag.length; i++) {
                      ChinaTag[i].querySelector(
                        '.Tag'
                      ).onmouseenter = function() {
                        // 判断其父元素是否含有active 类名 如果含有证明此时是激活状态
                        if (this.parentNode.className.indexOf('active') > -1) {
                          // 遍历去除所有的激活项
                          for (let i = 0; i < ChinaTag.length; i++) {
                            ChinaTag[i].classList.remove('active_item')
                          }
                          this.parentNode.classList.add('reactive')
                        }
                      }

                      ChinaTag[i].querySelector(
                        '.Tag'
                      ).onmouseleave = function() {
                        // 判断其父元素是否含有active 类名 如果含有证明此时是激活状态
                        if (this.parentNode.className.indexOf('active') > -1) {
                          this.parentNode.classList.remove('reactive')
                        }
                      }
                    }

                    const ShowTag = async() => {
                      await setTimeout(() => {
                        Wuhan.classList.add('active')
                      }, 1000)

                      await setTimeout(() => {
                        shanghai.classList.add('active')
                      }, 2000)

                      await setTimeout(() => {
                        Wuhan.classList.add('active_item')
                      }, 3000)

                      await setTimeout(() => {
                        Wuhan.classList.remove('active_item')
                      }, 7000)

                      await setTimeout(() => {
                        shanghai.classList.add('active_item')
                      }, 8000)

                      await setTimeout(() => {
                        shanghai.classList.remove('active_item')
                      }, 12000)
                    }

                    ShowTag()
                  }
                  // 如果转去的是韩国
                  if (country.properties.name === 'South Korea') {
                    go('.Korea_tag', '.shouer')
                  }

                  // 如果转去的是日本
                  if (country.properties.name === 'Japan') {
                    go('.Japan_tag', '.DongJing')
                  }

                  // 如果转去的是马来西亚
                  if (country.properties.name === 'Malaysia') {
                    go('.Malaysia_tag', '.jilongpo')
                  }

                  // 如果转去的是澳大利亚
                  if (country.properties.name === 'Australia') {
                    go('.Australia_tag', '.moerben')
                  }

                  // 转去的是美国
                  if (country.properties.name === 'United States of America') {
                    // eslint-disable-next-line no-unused-vars
                    const USApart = document.querySelector(
                      '#map-apart .us_tag'
                    )
                    USApart.classList.add('active')

                    // CONCORD
                    const XiusiDun = document.querySelector('.XiusiDun')

                    // 定义美国标签数组
                    const USTag = [XiusiDun]
                    // 注册鼠标移入事件
                    for (let i = 0; i < USTag.length; i++) {
                      USTag[i].querySelector('.Tag').onmouseenter = function() {
                        // 判断其父元素是否含有active 类名 如果含有证明此时是激活状态
                        if (this.parentNode.className.indexOf('active') > -1) {
                          // 遍历去除所有的激活项
                          for (let i = 0; i < USTag.length; i++) {
                            USTag[i].classList.remove('active_item')
                          }

                          this.parentNode.classList.add('reactive')
                        }
                      }

                      USTag[i].querySelector('.Tag').onmouseleave = function() {
                        // 判断其父元素是否含有active 类名 如果含有证明此时是激活状态
                        if (this.parentNode.className.indexOf('active') > -1) {
                          this.parentNode.classList.remove('reactive')
                        }
                      }
                    }

                    const showTag = async() => {
                      await setTimeout(() => {
                        XiusiDun.classList.add('active')
                      }, 1000)

                      await setTimeout(() => {
                        XiusiDun.classList.add('active_item')
                      }, 2000)

                      await setTimeout(() => {
                        XiusiDun.classList.remove('active_item')
                      }, 6000)
                    }

                    showTag()
                  }

                  // 如果转去的是波兰
                  if (country.properties.name === 'Poland') {
                    go('.Poland_tag', '.huasha')
                  }

                  // 埃及
                  if (country.properties.name === 'Egypt') {
                    go('.Egypt_tag', '.kailuo')
                  }

                  // 迪拜
                  if (country.properties.name === 'Libya') {
                    go('.Dibai_tag', '.dibai')
                  }
                } catch (error) {
                  return null
                }
              })
              .tween('render', () => t => {
                // for (const country of countries) {
                //   console.log("换了国家", country, aa);
                // }
                projection.rotate(iv(t))
                render(country, {
                  type: 'LineString',
                  coordinates: [p1, ip(t)]
                })
              })
              .transition()

              .ease(d3.easePolyInOut)
              // 国家停留时间,此时地球旋转到激活国家
              .duration(time)
              .on('end', () => {
                // 离开处理函数(只使用一个标签国家)
                function leave(a, b) {
                  const JapanApart = document.querySelector('#map-apart')
                  const JapanApart_tag = JapanApart.querySelector(a)
                  JapanApart_tag.classList.remove('active')
                  const DongJing = document.querySelector(b)
                  DongJing.classList.remove('active')
                }
                try {
                  // 离开的是中国
                  if (country.properties.name === 'China') {
                    // 武汉
                    const Wuhan = document.querySelector('.Wuhan')
                    // 上海
                    const shanghai = document.querySelector('.shanghai')
                    const ChinaApart = document.querySelector(
                      '#map-apart .china_tag'
                    )
                    ChinaApart.classList.add('active')
                    Wuhan.classList.remove('active')
                    shanghai.classList.remove('active')
                  }
                  // 离开的是韩国
                  if (country.properties.name === 'South Korea') {
                    leave('.Korea_tag', '.shouer')
                  }

                  // 离开的是日本
                  if (country.properties.name === 'Japan') {
                    leave('.Japan_tag', '.DongJing')
                  }

                  // 离开的是吉隆坡
                  if (country.properties.name === 'Malaysia') {
                    leave('.Malaysia_tag', '.jilongpo')
                  }

                  // 澳大利亚
                  if (country.properties.name === 'Australia') {
                    leave('.Australia_tag', '.moerben')
                  }

                  // 波兰
                  if (country.properties.name === 'Poland') {
                    leave('.Poland_tag', '.huasha')
                  }

                  // 埃及
                  if (country.properties.name === 'Egypt') {
                    leave('.Egypt_tag', '.kailuo')
                  }

                  if (country.properties.name === 'Libya') {
                    leave('.Dibai_tag', '.dibai')
                  }

                  // 离开的是美国
                  if (country.properties.name === 'United States of America') {
                    const XiusiDun = document.querySelector('.XiusiDun')
                    const USApart = document.querySelector(
                      '#map-apart .us_tag'
                    )
                    USApart.classList.remove('active')
                    XiusiDun.classList.remove('active')
                  }
                } catch (error) {
                  return null
                }
              })
              .tween('render', () => t => {
                render(country, {
                  type: 'LineString',
                  coordinates: [ip(t), p2]
                })
              })
              .end()
          }
        }
      }
    )
  main
    .variable(observer())
    // eslint-disable-next-line no-unused-vars
    .define(['html', 'countries'], function(html, countries) {
      return html``
    })
  main.variable(observer('Versor')).define('Versor', function() {
    return class Versor {
      static fromAngles([l, p, g]) {
        l *= Math.PI / 360
        p *= Math.PI / 360
        g *= Math.PI / 360
        const sl = Math.sin(l)
        const cl = Math.cos(l)
        const sp = Math.sin(p)
        const cp = Math.cos(p)
        const sg = Math.sin(g)
        const cg = Math.cos(g)
        return [
          cl * cp * cg + sl * sp * sg,
          sl * cp * cg - cl * sp * sg,
          cl * sp * cg + sl * cp * sg,
          cl * cp * sg - sl * sp * cg
        ]
      }
      static toAngles([a, b, c, d]) {
        return [
          (Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180) /
            Math.PI,
          (Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180) /
            Math.PI,
          (Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180) /
            Math.PI
        ]
      }
      static interpolateAngles(a, b) {
        const i = Versor.interpolate(
          Versor.fromAngles(a),
          Versor.fromAngles(b)
        )
        return t => Versor.toAngles(i(t))
      }
      static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
        // eslint-disable-next-line no-sequences
        (a2 -= a1), (b2 -= b1), (c2 -= c1), (d2 -= d1)
        const x = new Array(4)
        return t => {
          const l = Math.hypot(
            (x[0] = a1 + a2 * t),
            (x[1] = b1 + b2 * t),
            (x[2] = c1 + c2 * t),
            (x[3] = d1 + d2 * t)
          );
          // eslint-disable-next-line no-sequences
          (x[0] /= l), (x[1] /= l), (x[2] /= l), (x[3] /= l)
          return x
        }
      }
      static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
        let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2
        // eslint-disable-next-line no-sequences
        if (dot < 0) { (a2 = -a2), (b2 = -b2), (c2 = -c2), (d2 = -d2), (dot = -dot) }
        if (dot > 0.9995) { return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) }
        const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)))
        const x = new Array(4)
        const l = Math.hypot(
          (a2 -= a1 * dot),
          (b2 -= b1 * dot),
          (c2 -= c1 * dot),
          (d2 -= d1 * dot)
        );
        // eslint-disable-next-line no-sequences
        (a2 /= l), (b2 /= l), (c2 /= l), (d2 /= l)
        return t => {
          const theta = theta0 * t
          const s = Math.sin(theta)
          const c = Math.cos(theta)
          x[0] = a1 * c + a2 * s
          x[1] = b1 * c + b2 * s
          x[2] = c1 * c + c2 * s
          x[3] = d1 * c + d2 * s
          return x
        }
      }
    }
  })
  main.define('initial name', function() {
    return ''
  })
  main
    .variable(observer('mutable name'))
    .define('mutable name', ['Mutable', 'initial name'], (M, _) => new M(_))
  main
    .variable(observer('name'))
    .define('name', ['mutable name'], _ => _.generator)
  main
    .variable(observer('height'))
    .define('height', ['width'], function(width) {
      return Math.min(width, 1600)
    })
  main.variable(observer('tilt')).define('tilt', function() {
    return 20
  })
  main.variable(observer('sphere')).define('sphere', function() {
    return { type: 'Sphere' }
  })
  main
    .variable(observer('countries'))
    .define('countries', ['topojson', 'world'], function(topojson, world) {
      return topojson.feature(world, world.objects.countries).features
    })
  main
    .variable(observer('borders'))
    .define('borders', ['topojson', 'world'], function(topojson, world) {
      return topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
    })
  main
    .variable(observer('land'))
    .define('land', ['topojson', 'world'], function(topojson, world) {
      return topojson.feature(world, world.objects.land)
    })
  main.variable(observer('world')).define('world', ['d3'], function() {
    return mapJson
  })
  main
    .variable(observer('topojson'))
    .define('topojson', ['require'], function() {
      return topJson
    })
  main.variable(observer('d3')).define('d3', ['require'], function() {
    return D3
  })
  return main
}

export { define }
