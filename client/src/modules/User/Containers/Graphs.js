import { Graph } from "../Components"

export const Graphs = ({ title, date, value }) => {
  const options = {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },
    title: {
      text: title,
      align: 'left'
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: null,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: 'm'
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000 * 24 *31, // one hour
        pointStart: Date.UTC(date.year, date.month )
      }
    },
    series: [{
      name: 'Hestavollane',
      data: value
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }
  return <Graph options={ options } />
}