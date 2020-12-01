<template>
  <div id="map-container" class="fill-flex" />
</template>

<script>
import AMap from 'AMap'
import Between from './utils/between.js'

export default {
  data() {
    return {
      // 地图级别与styles中样式对应关系的映射
      zoomStyleMapping1: {
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0
      },
      // mock 点
      pointArr: [
        [
          {
            x: 121.239364,
            y: 31.387609
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.258925,
            y: 31.335482
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.45659,
            y: 31.197196
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.489415,
            y: 31.253329
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.486367,
            y: 31.202432
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.467537,
            y: 31.232239
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.464125,
            y: 31.229899
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.511289,
            y: 31.257499
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.471627,
            y: 31.259188
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.453592,
            y: 31.272137
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.5123,
            y: 31.237666
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.593938,
            y: 31.186584
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.522256,
            y: 31.206952
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ],
        [
          {
            x: 121.501915,
            y: 31.302261
          },
          {
            x: 121.505949,
            y: 31.195747
          }
        ]
      ],
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('map-container', {
        mapStyle: 'amap://styles/e8bdcdb020c0a0e6c1f239fa67629827', // 设置地图的显示样式
        zoom: 14, // 设置缩放等级
        pitch: 75, // 地图俯仰角度
        center: [121.499718, 31.239703], // 设置缩放中心
        viewMode: '3D', // 设置地图模式
        buildingAnimation: true, // 楼块出现是否带动画
        expandZoomRange: true,
        rotation: 0,
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        dragEnable: true,
        doubleClickZoom: false,
        keyboardEnable: true,
        scrollWheel: true
      })

      // 地图加载完成执行
      this.map.on('complete', () => {
        console.log('地图加载完成！')
        this.generateMeshLine(this.pointArr)
        this.getPoint()
        this.startRotationAnimation()
      })
    },
    // 绘制点标记
    getPoint() {
      // 绘制中心点
      new AMap.ElasticMarker({
        map: this.map,
        position: [121.505949, 31.195747],
        zooms: [3, 20],
        styles: [
          {
            icon: {
              img: require('@/assets/images/goverment.png'),
              size: [24, 24], // 图标的原始大小
              ancher: [0, 0], // 锚点，图标原始大小下锚点所处的位置，相对左上角
              imageOffset: [0, 0],
              // 可缺省，当使用精灵图时可用，标示图标在整个图片中左上角的位置
              imageSize: [24, 24],
              // 可缺省，当使用精灵图时可用，整张图片的大小
              fitZoom: 11, // 最合适的级别，在此级别下显示为原始大小
              scaleFactor: 1, // 地图放大一级的缩放比例系数
              maxScale: 2, // 最大放大比例
              minScale: 0.125 // 最小放大比例
            }
          }
        ],
        zoomStyleMapping: this.zoomStyleMapping1
      })

      // 绘制所选医院点
      for (var item in this.pointArr) {
        // console.log(1111, item, pointArr[item][0].x, pointArr[item][0].y)
        new AMap.ElasticMarker({
          map: this.map,
          position: [this.pointArr[item][0].x, this.pointArr[item][0].y],
          zooms: [3, 20],
          styles: [
            {
              icon: {
                img: require('@/assets/images/hospital.png'),
                size: [24, 24],
                ancher: [0, 0],
                imageSize: [24, 24],
                imageOffset: [0, 0],
                fitZoom: 11,
                scaleFactor: 1,
                maxScale: 2,
                minScale: 0.125
              }
            }
          ],
          zoomStyleMapping: this.zoomStyleMapping1
        })
      }
    },

    generateMeshLine(pointsArr) {
      if (pointsArr && pointsArr.length > 0) {
        for (var item in pointsArr) {
          var pointObj = this.generatePoints(
            pointsArr[item][0],
            pointsArr[item][1]
          )
          this.drawLine(pointObj.points, pointObj.height)
        }
      }
    },

    generatePoints(xPoint, yPoint) {
      // console.log(xPoint, yPoint);
      var pointObj = {}
      var tempArr = []
      var tempP1 = {}
      // var tempP2 = {}

      var tempX = (xPoint.x - yPoint.x) / 10
      var tempY = (xPoint.y - yPoint.y) / 10

      var differX =
        xPoint.x - yPoint.x < 0 ? -(xPoint.x - yPoint.x) : xPoint.x - yPoint.x
      var differY =
        xPoint.y - yPoint.y < 0 ? -(xPoint.y - yPoint.y) : xPoint.y - yPoint.y
      var maxNum = Math.max(differX, differY)
      var multiple = (maxNum * 20).toFixed(6)
      // console.log(differX, differY, maxNum, multiple)

      var lnglat = new AMap.LngLat(yPoint.x, yPoint.y)
      tempArr.push(lnglat)

      tempP1.x = Number((yPoint.x + 1 * tempX).toFixed(6))
      tempP1.y = Number((yPoint.y + 1 * tempY).toFixed(6))
      lnglat = new AMap.LngLat(tempP1.x, tempP1.y)
      tempArr.push(lnglat)
      // var lnglat = new AMap.LngLat(yPoint.x, yPoint.y)
      // tempArr.push(lnglat)

      tempP1.x = Number((yPoint.x + 9 * tempX).toFixed(6))
      tempP1.y = Number((yPoint.y + 9 * tempY).toFixed(6))
      lnglat = new AMap.LngLat(tempP1.x, tempP1.y)
      tempArr.push(lnglat)
      // var lnglat = new AMap.LngLat(xPoint.x, xPoint.y)
      // tempArr.push(lnglat)

      lnglat = new AMap.LngLat(xPoint.x, xPoint.y)
      tempArr.push(lnglat)

      pointObj.points = tempArr
      pointObj.height = 8000 * multiple

      return pointObj
    },

    // 绘制线
    drawLine(points, height) {
      var object3Dlayer = new AMap.Object3DLayer()
      var numberOfPoints = 180
      var minHeight = 20

      var meshLine = new AMap.Object3D.MeshLine({
        path: this.computeBezier(points, numberOfPoints, minHeight),
        height: this.getEllipseHeight(numberOfPoints, height, minHeight),
        color: 'rgba(1,236,213, 0.5)',
        width: 5
      })

      var points3D = new AMap.Object3D.RoundPoints()
      points3D.transparent = true

      var pointsGeo = points3D.geometry
      const result = this.computeBezier(points, numberOfPoints, minHeight)[179]
      var point = this.map.lngLatToGeodeticCoord(result)

      pointsGeo.vertices.push(
        AMap.Util.format(point.x, 3),
        AMap.Util.format(point.y, 3),
        -this.getEllipseHeight(numberOfPoints, height, minHeight)[179]
      ) // 空中点
      pointsGeo.pointSizes.push(5)
      pointsGeo.vertexColors.push(0.004, 0.925, 0.835, 1)
      points3D.borderColor = [0.6, 0.8, 1, 1]
      points3D.borderWeight = 0

      var n = 180
      const that = this

      setInterval(() => {
        n--
        if (n === 0) {
          n = 180
        } else {
          var point = that.map.lngLatToGeodeticCoord(
            that.computeBezier(points, numberOfPoints, minHeight)[n]
          )
          pointsGeo.vertices[0] = AMap.Util.format(point.x, 3)
          pointsGeo.vertices[1] = AMap.Util.format(point.y, 3)
          pointsGeo.vertices[2] = -that.getEllipseHeight(
            numberOfPoints,
            height,
            minHeight
          )[n]
          // pointsGeo.pointSizes.push(30);
          // pointsGeo.vertexColors.push(0, 0.209, 0.099, 0.087);
          points3D.needUpdate = true
          points3D.reDraw()
        }
      }, Math.random() * 30)

      object3Dlayer.add(points3D)

      meshLine.transparent = true
      object3Dlayer.add(meshLine)
      meshLine['backOrFront'] = 'both'
      this.map.add(object3Dlayer)
    },

    pointOnCubicBezier(cp, t) {
      var ax, bx, cx
      var ay, by, cy
      var tSquared, tCubed

      cx = 3.0 * (cp[1].lng - cp[0].lng)
      bx = 3.0 * (cp[2].lng - cp[1].lng) - cx
      ax = cp[3].lng - cp[0].lng - cx - bx

      cy = 3.0 * (cp[1].lat - cp[0].lat)
      by = 3.0 * (cp[2].lat - cp[1].lat) - cy
      ay = cp[3].lat - cp[0].lat - cy - by

      tSquared = t * t
      tCubed = tSquared * t

      var lng = ax * tCubed + bx * tSquared + cx * t + cp[0].lng
      var lat = ay * tCubed + by * tSquared + cy * t + cp[0].lat

      return new AMap.LngLat(lng, lat)
    },

    computeBezier(points, numberOfPoints) {
      var dt
      var i
      var curve = []

      dt = 1.0 / (numberOfPoints - 1)

      for (i = 0; i < numberOfPoints; i++) {
        curve[i] = this.pointOnCubicBezier(points, i * dt)
      }

      return curve
    },

    getEllipseHeight(count, maxHeight, minHeight) {
      var height = []
      var radionUnit = Math.PI / 180

      for (var i = 0; i < count; i++) {
        var radion = i * radionUnit

        height.push(minHeight + Math.sin(radion) * maxHeight)
      }

      return height
    },

    // 设置旋转
    startRotationAnimation() {
      new Between(0, 360)
        .time(180000)
        // .easing(Between.Easing.Cubic.InOut)
        .loop('repeat')
        .on('update', (v, { times }) => {
          this.changeRotation(v.toFixed(2))
        })
        .on('start', () => {
          // console.log('start')
        })
        .on('complete', () => {
          // console.log('end 移动')
        })
    },

    changeRotation(x) {
      // map.setZoomAndCenter(17.5, [121.499719,31.239621]);
      // console.log(x)
      this.map.setRotation(x)
    }
  }
}
</script>

<style lang="scss" scoped>
#map-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - 50px);
}

.amap-logo img {
  display: none;
}
</style>
